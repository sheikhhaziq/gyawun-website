document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    fetchGitHubStats();
});

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num;
}

async function fetchGitHubStats() {
    const REPO_OWNER = 'sheikhhaziq';
    const REPO_NAME = 'gyawun_music';
    const CACHE_KEY = 'gyawun_stats_v5_cache';
    const CACHE_DURATION = 3600 * 1000;

    const starEl = document.getElementById('stat-stars');
    const downloadEl = document.getElementById('stat-downloads');
    const contribListEl = document.getElementById('stat-contributors-list');
    const contribCountEl = document.getElementById('stat-contributors-count');
    const stableBtn = document.getElementById('download-stable');

    let stats = {
        stars: 45,
        downloads: 250,
        contributorsCount: 5,
        topContributors: [],
        latestVersion: 'Stable'
    };

    const getCachedStats = () => {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        try {
            const parsed = JSON.parse(cached);
            const now = Date.now();
            if (now - parsed.timestamp < CACHE_DURATION) {
                console.log('Using cached stats');
                return parsed.data;
            }
        } catch (e) {
            console.error('Cache parse error', e);
        }
        return null;
    };

    const cachedData = getCachedStats();
    if (cachedData) {
        updateStatsDOM(cachedData);
        return;
    }

    console.log('Fetching fresh stats from GitHub...');
    try {
        const repoRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`);
        if (!repoRes.ok) throw new Error('Repo fetch failed');
        const repoData = await repoRes.json();
        stats.stars = repoData.stargazers_count;

        const releaseRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=100`);
        if (releaseRes.ok) {
            const releases = await releaseRes.json();
            let maxSingleReleaseDownloads = 0;

            if (Array.isArray(releases)) {
                const latestStable = releases.find(r => !r.prerelease);
                if (latestStable) {
                    stats.latestVersion = latestStable.tag_name;
                }

                releases.forEach(release => {
                    if (!release.prerelease && release.assets) {
                        let currentReleaseDownloads = 0;
                        release.assets.forEach(asset => {
                            currentReleaseDownloads += asset.download_count;
                        });

                        if (currentReleaseDownloads > maxSingleReleaseDownloads) {
                            maxSingleReleaseDownloads = currentReleaseDownloads;
                        }
                    }
                });
                stats.downloads = maxSingleReleaseDownloads > 0 ? maxSingleReleaseDownloads : 250;
            }
        }

        const contribRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`);
        if (contribRes.ok) {
            const contributors = await contribRes.json();
            if (Array.isArray(contributors)) {
                stats.contributorsCount = contributors.length;
                stats.topContributors = contributors.slice(0, 5).map(c => ({
                    login: c.login,
                    avatar_url: c.avatar_url,
                    html_url: c.html_url
                }));
            }
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: stats
        }));

        updateStatsDOM(stats);

    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        updateStatsDOM(stats);
    }

    function updateStatsDOM(data) {
        starEl.classList.remove('stat-loading');
        downloadEl.classList.remove('stat-loading');

        starEl.textContent = formatNumber(data.stars);
        downloadEl.textContent = formatNumber(data.downloads) + '+';
        contribCountEl.textContent = formatNumber(data.contributorsCount) + ' Contributors';

        if (data.latestVersion && data.latestVersion !== 'Stable') {
            const span = stableBtn.querySelector('span:last-child');
            if (span) span.textContent = `Download Stable (${data.latestVersion})`;
        }

        if (data.topContributors && data.topContributors.length > 0) {
            contribListEl.innerHTML = '';
            data.topContributors.forEach(contributor => {
                const link = document.createElement('a');
                link.href = contributor.html_url;
                link.target = '_blank';
                link.title = contributor.login;

                const img = document.createElement('img');
                img.src = contributor.avatar_url;
                img.alt = contributor.login;
                img.className = 'contributor-avatar';

                link.appendChild(img);
                contribListEl.appendChild(link);
            });
        }
    }
}
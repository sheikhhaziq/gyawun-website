import Header from "@/components/Header";
import Hero from "./Hero";
import Features from "./Features";
import Stats from "./Stats";
import Author from "./Author";

export default async function Home() {
  const repo_response = await fetch(
    "https://api.github.com/repos/jhelumcorp/gyawun",
    {
      next: { revalidate: 60 * 60 },
    }
  );
  const repo_data = await repo_response.json();
  const stars_count: number = repo_data.stargazers_count;
  const forks_count: number = repo_data.forks_count;
  const open_issues: number = repo_data.open_issues;
  const releases_response = await fetch(
    "https://api.github.com/repos/jhelumcorp/gyawun/releases/latest",
    {
      next: { revalidate: 60 * 60 },
    }
  );
  const releases_data: Release = await releases_response.json();

  const download_count: number = releases_data.assets.reduce((acc, release) => {
    return acc + release.download_count;
  }, 0);
  const finalData: HomeScreenData = {
    download_count,
    stars_count,
    forks_count,
    open_issues,
  };
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats data={finalData} />
        <Features />
        <Author />
      </main>
    </>
  );
}

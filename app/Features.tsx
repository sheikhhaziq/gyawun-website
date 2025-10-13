import {
  DownloadCloudIcon,
  PodcastIcon,
  SettingsIcon,
  ShareIcon,
  TextIcon,
  UserIcon,
  Sparkles,
  Music,
  Headphones,
  Mic2,
  Users,
  Palette,
} from "lucide-react";

async function Features() {
  const features = [
    {
      icon: SettingsIcon,
      title: "Customisation",
      description: "Listeners have complete control of the customization of this app as per their preference.",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: DownloadCloudIcon,
      title: "Unlimited Downloads",
      description: "Save all your favorite songs and playlists on your device's local storage to access them anytime without the internet.",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: PodcastIcon,
      title: "Podcasts Support",
      description: "Apart from Music, you can also explore popular Podcast channels and episodes in this app.",
      gradient: "from-orange-500 to-red-500",
      iconColor: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      icon: TextIcon,
      title: "Lyrics Support",
      description: "When you play a song, tap on the Lyrics icon to see synchronized lyrics in real-time as the music plays.",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: ShareIcon,
      title: "Share with Others",
      description: "Share the happiness of music with loved ones using this app's easy social sharing features.",
      gradient: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      icon: UserIcon,
      title: "Google Account Integration",
      description: "Link your Google account to fetch your YouTube Music playlists, preferences, and recommendations.",
      gradient: "from-red-500 to-pink-500",
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f4274d] to-[#ff0000] text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover all the amazing features that make Gyawun the ultimate music streaming experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-[#f4274d] group-hover:to-[#ff0000] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-6 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent group-hover:via-[#f4274d] transition-all duration-500" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#f4274d] to-[#ff0000] rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-gray-800 rounded-2xl px-8 py-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6 text-[#f4274d]" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                10,000+ Songs
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-3">
              <Headphones className="w-6 h-6 text-[#f4274d]" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                HD Audio Quality
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#f4274d]" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                50,000+ Users
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
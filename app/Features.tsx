import {
  DownloadCloudIcon,
  PodcastIcon,
  SettingsIcon,
  ShareIcon,
  TextIcon,
  UserIcon,
} from "lucide-react";

async function Features() {
  return (
    <div className="container py-2">
      <h2 className="text-2xl font-bold mt-4 mb-2">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <SettingsIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Customisation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Listeners have complete control of the customization of this app as
            per their preference.
          </p>
        </div>
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <DownloadCloudIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Unlimited Downloads</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Save all our favorite songs and playlists on your device’s local
            storage to access them anytime without the use of the internet.
          </p>
        </div>
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <PodcastIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Podcasts Support</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Apart from Music, you can also explore popular Podcast channels in
            this app.
          </p>
        </div>
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <TextIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Lyrics Support</h3>
          <p className="text-gray-600 dark:text-gray-400">
            When you play a song within this app, tap on the Lyrics icon on the
            top right corner of the screen to see the lyrics.
          </p>
        </div>
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <ShareIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Share with others</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Share the happiness of music with loved ones using this app’s easy
            social sharing.
          </p>
        </div>
        <div className="align-middle justify-center text-center border-2 rounded p-3">
          <div className="inline-block rounded-full text-white bg-gradient-to-r from-[#f4274d] to-[#ff0000] hover:from-transparent hover:to-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black p-6">
            <UserIcon size={54} />
          </div>
          <h3 className="my-3 text-xl font-bold">Link Google Account</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Link Google account to fetch your youtube Music playlists and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

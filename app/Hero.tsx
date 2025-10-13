"use client";

import { DownloadCloudIcon, Star, Music, Sparkles } from "lucide-react";
import Image from "next/image";
import phone from "@/public/images/phone.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { nFormatter } from "@/lib/utils";

interface HeroProps {
  statsData: {
    download_count: number;
    forks_count: number;
    open_issues: number;
  };
  className?: string;
}

function Hero({ statsData, className }: HeroProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setShowSparkles(true);

    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);

    // Hide sparkles after animation
    setTimeout(() => {
      setShowSparkles(false);
    }, 1000);
  };

  return (
    <section className={`min-h-screen pt-14 flex items-center bg-gradient-to-br from-[#f4274d] via-[#ff0000] to-[#d1001f] dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-all duration-500 ${className || ''}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl dark:bg-gray-700"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-2xl dark:bg-gray-700"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg dark:bg-gray-700"></div>
      </div>

      {/* Floating Music Notes */}
      <div className="absolute top-20 left-20 animate-float-slow">
        <Music className="w-6 h-6 text-white/20 dark:text-gray-500" />
      </div>
      <div className="absolute bottom-40 right-40 animate-float-slower">
        <Music className="w-4 h-4 text-white/15 dark:text-gray-500" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 dark:border-gray-700 mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-white dark:text-gray-200">
                Ad-Free Music Experience
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white dark:text-white mb-6">
              Stream{" "}
              <span className="bg-gradient-to-r from-white to-gray-200 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Unlimited Music
              </span>{" "}
              For Free
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Immerse yourself in the world of Gyawun, where music knows no
              bounds. Enjoy uninterrupted, ad-free streaming with an extensive
              library of songs from every genre. Download now and let the music
              carry you away.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full dark:bg-green-500"></div>
                <span className="text-white/80 dark:text-gray-300">No Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full dark:bg-green-500"></div>
                <span className="text-white/80 dark:text-gray-300">
                  High Quality Audio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full dark:bg-green-500"></div>
                <span className="text-white/80 dark:text-gray-300">
                  Offline Listening
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <div className="relative">
                {showSparkles && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-ping absolute" />
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-ping delay-300 absolute -top-2 -right-2" />
                    <Sparkles className="w-3 h-3 text-yellow-200 animate-ping delay-500 absolute -bottom-2 -left-2" />
                  </div>
                )}
                <Link href="/downloads" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    onClick={handleDownloadClick}
                    disabled={isDownloading}
                    className={`w-full sm:w-auto bg-white dark:bg-gray-800 text-red-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                      isDownloading ? "opacity-90 cursor-not-allowed" : ""
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-red-600 dark:border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <DownloadCloudIcon className="w-5 h-5 mr-2" />
                        Download Now
                      </>
                    )}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Integrated Stats Section */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/5 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm border border-white/10 dark:border-gray-700 hover:bg-white/10 dark:hover:bg-gray-700/80 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-white dark:text-white">
                    {nFormatter(statsData.download_count)}+
                  </div>
                  <div className="text-sm text-white/70 dark:text-gray-400">
                    Downloads
                  </div>
                </div>

                <div className="text-center p-4 bg-white/5 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm border border-white/10 dark:border-gray-700 hover:bg-white/10 dark:hover:bg-gray-700/80 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-white dark:text-white">
                    {nFormatter(statsData.forks_count)}+
                  </div>
                  <div className="text-sm text-white/70 dark:text-gray-400">
                    Forks
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm border border-white/10 dark:border-gray-700 hover:bg-white/10 dark:hover:bg-gray-700/80 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-white dark:text-white">
                    4.8★
                  </div>
                  <div className="text-sm text-white/70 dark:text-gray-400">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Background effects */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 dark:bg-gray-700/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/10 dark:bg-gray-700/50 rounded-full blur-2xl"></div>

              {/* Phone mockup */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 dark:from-gray-600/20 to-transparent rounded-[3rem] blur-md scale-105"></div>
                <Image
                  src={phone}
                  alt="Gyawun Music App"
                  priority
                  className="relative z-20 w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transform transition-all duration-700 hover:scale-105 cursor-pointer"
                  width={600}
                  height={600}
                  onClick={handleDownloadClick}
                />
              </div>

              {/* Music notes */}
              <div className="absolute -top-2 -right-4 bg-white/5 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-2">
                <Music className="w-4 h-4 text-white/60 dark:text-gray-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/5 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-1">
                <Music className="w-3 h-3 text-white/40 dark:text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 dark:bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
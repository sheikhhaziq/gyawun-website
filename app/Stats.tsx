import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDotIcon,
  DownloadCloudIcon,
  GitForkIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  BugIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { nFormatter } from "@/lib/utils";

interface StatsProps {
  data: HomeScreenData;
}

async function Stats({ data }: StatsProps) {
  const stats = [
    {
      title: "Stars",
      value: data.stars_count,
      icon: StarIcon,
      description: "GitHub stars",
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      trend: "+12% this month",
    },
    {
      title: "Downloads",
      value: data.download_count,
      icon: DownloadCloudIcon,
      description: "Total downloads",
      color: "from-blue-500 to-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      trend: "+24% this month",
    },
    {
      title: "Forks",
      value: data.forks_count,
      icon: GitForkIcon,
      description: "Project forks",
      color: "from-green-500 to-green-700",
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      trend: "+8% this month",
    },
    {
      title: "Open Issues",
      value: data.open_issues,
      icon: CircleDotIcon,
      description: "Active issues",
      color: "from-red-500 to-red-700",
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      trend: "Need attention",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Project Statistics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tracking our growth and community engagement across all platforms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.title}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}>
                  <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg" />
                </div>

                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                      <IconComponent 
                        className={`w-6 h-6 ${stat.iconColor}`} 
                      />
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        <TrendingUpIcon className="w-3 h-3 mr-1" />
                        Live
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">
                        {nFormatter(stat.value)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {stat.title}
                      </span>
                      <span className={`text-xs font-medium ${
                        stat.title === "Open Issues" && stat.value > 10 
                          ? "text-red-600 dark:text-red-400" 
                          : "text-green-600 dark:text-green-400"
                      }`}>
                        {stat.trend}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${Math.min((stat.value / (stats.reduce((max, s) => Math.max(max, s.value), 0) || 1)) * 100, 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-lg transition-all duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <ZapIcon className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Real-time Updates
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Growing Community
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <BugIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Active Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Download, Smartphone, Laptop, Zap, Calendar, CheckCircle, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useState, useEffect } from "react";
import DownloadTable from "@/components/DownloadTable";

// Define the extended Device type
interface ExtendedDevice {
  name: string;
  extension: string;
  type: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  description: string;
  color: string;
  bgColor: string;
}

const devices: ExtendedDevice[] = [
  {
    name: "Android",
    extension: "apk",
    type: "application/vnd.android.package-archive",
    icon: Smartphone,
    description: "For mobile devices",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    name: "Windows",
    extension: "exe",
    type: "application/x-msdownload",
    icon: Laptop,
    description: "For desktop computers",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
];

function DownloadSection({ name, assets }: { name: String; assets: Asset[] }) {
  const [selectedDevice, setSelectedDevice] = useState<ExtendedDevice | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Default to Android for mobile, Windows for desktop
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setSelectedDevice(devices[isMobileDevice ? 0 : 1]);
  }, []);

  // Show loading state during initial render
  if (!isClient || !selectedDevice) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const SelectedDeviceIcon = selectedDevice.icon;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f4274d] to-[#ff0000] text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            Download Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Get Gyawun
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download the latest version and start your ad-free music journey
          </p>
        </div>

        {/* Platform Selection Card */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
                <Download className="w-3 h-3" />
                Latest Release
              </div>
              
              {/* Release Information */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Version {name}
                </h3>
                
                {/* Release Details */}
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Release Date</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">13/10/2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Downloads</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">3.5k</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Stable</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Yes</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Select your platform to download the appropriate version
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Selected Platform Display */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl px-4 py-3 min-w-[200px]">
                <div className={`p-2 rounded-lg ${selectedDevice.bgColor}`}>
                  <SelectedDeviceIcon className={`w-5 h-5 ${selectedDevice.color}`} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {selectedDevice.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedDevice.description}
                  </p>
                </div>
              </div>

              {/* Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Change Platform</span>
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl">
                  <DropdownMenuLabel className="text-gray-900 dark:text-white font-semibold">
                    Select Platform
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
                  <DropdownMenuGroup>
                    {devices.map((device) => {
                      const DeviceIcon = device.icon;
                      return (
                        <DropdownMenuItem
                          key={device.name}
                          className={`flex items-center gap-3 px-3 py-3 cursor-pointer transition-colors duration-200 ${
                            selectedDevice.name === device.name
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setSelectedDevice(device)}
                        >
                          <div className={`p-2 rounded-lg ${device.bgColor}`}>
                            <DeviceIcon className={`w-4 h-4 ${device.color}`} />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-medium">{device.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {device.description}
                            </div>
                          </div>
                          {selectedDevice.name === device.name && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Download Table */}
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Available Downloads
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Files compatible with {selectedDevice.name}
            </p>
          </div>
          <DownloadTable
            assets={assets.filter((asset) => asset.content_type === selectedDevice.type)}
            platform={selectedDevice.name}
          />
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Safe & Secure
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                No Installation Required
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Auto Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
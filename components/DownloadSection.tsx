"use client";
import { isMobile } from "react-device-detect";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { nFormatter } from "@/lib/utils";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import DownloadTable from "@/components/DownloadTable";
const devices: Device[] = [
  {
    name: "Android",
    extension: "apk",
    type: "application/vnd.android.package-archive",
  },
  {
    name: "Windows",
    extension: "exe",
    type: "application/x-msdownload",
  },
];

function DownloadSection({ name, assets }: { name: String; assets: Asset[] }) {
  const [value, setValue] = useState(devices[isMobile ? 0 : 1]);

  return (
    <section className="container mt-4">
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg  font-semibold">
          Latest(<span className="text-sm">{name}</span>)
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              {value.name ?? "Select Device"}
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {devices.map((device) => (
              <DropdownMenuCheckboxItem
                key={device.name}
                checked={device.name === value.name}
                onCheckedChange={() => setValue(device)}
              >
                {device.name}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DownloadTable
        assets={assets.filter((asset) => asset.content_type == value.type)}
      />
    </section>
  );
}

export default DownloadSection;

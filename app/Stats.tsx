import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDotIcon,
  DownloadCloudIcon,
  GitForkIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { nFormatter } from "@/lib/utils";
import path from 'path';
import fs from 'fs';


function getDownloadCount(): number | null {
  try {
    const filePath = path.join(process.cwd(), 'downloads.json');
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents) as Record<string, { download?: number; update?: number }>;
    const totalDownloadCount = Object.values(data).reduce((sum, platform) => {
      return sum + (platform.download || 0);
    }, 0);
    return totalDownloadCount;
  } catch (e) {
    return null;
  }
}
async function Stats({ data }: { data: HomeScreenData }) {
  // const count: number | null = getDownloadCount();
  return (
    <div className="container">
      <h2 className="text-2xl font-bold mt-4 mb-2">Github Stats</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>
              <StarIcon className="inline-block" size={64} />
              <div className="mt-2 text-xl font-bold">Stars</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl">{nFormatter(data.stars_count)}</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>
              <DownloadCloudIcon className="inline-block" size={64} />
              <div className="mt-2 text-xl font-bold">Downloads</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl">{nFormatter(data.download_count)}</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>
              <GitForkIcon className="inline-block" size={64} />
              <div className="mt-2 text-xl font-bold">Forks</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl">{nFormatter(data.forks_count)}</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <CardTitle>
              <CircleDotIcon className="inline-block" size={64} />
              <div className="mt-2 text-xl font-bold">Open issues</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl">{nFormatter(data.open_issues)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Stats;

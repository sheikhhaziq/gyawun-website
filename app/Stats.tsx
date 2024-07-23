import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDotIcon,
  DownloadCloudIcon,
  GitForkIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
function nFormatter(num: number, digits: number = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
    : "0";
}

function Stats({ data }: { data: HomeScreenData }) {
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

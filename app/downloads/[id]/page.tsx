import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Markdown from "react-markdown";
import DownloadSection from "@/components/DownloadSection";
import { nFormatter } from "@/lib/utils";

async function Release({ params }: { params: { id: string } }) {
  const url: string = `https://api.github.com/repos/jhelumcorp/gyawun/releases/${params.id}`;
  const response = await fetch(url, {
    next: { revalidate: 60 * 60 },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const releases_data: Release = await response.json();
  const assets: Asset[] = releases_data.assets;
  return (
    <>
      <Header />
      <section className="container pt-24 flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle>{releases_data.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Release Date:{" "}
              {new Date(releases_data.published_at).toLocaleDateString()}
              <br />
              Downloads:{" "}
              {nFormatter(
                assets.reduce((acc, asset) => acc + asset.download_count, 0)
              )}
              <br />
              Stable: {releases_data.prerelease ? "No" : "Yes"}
            </CardDescription>
          </CardContent>
        </Card>
      </section>
      <DownloadSection name={releases_data.name ?? ""} assets={assets} />
    </>
  );
}

export default Release;

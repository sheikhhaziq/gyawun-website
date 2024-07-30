import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DownloadSection from "@/components/DownloadSection";
import { nFormatter } from "@/lib/utils";
import { Metadata } from "next";
import Head from "next/head";

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
      <Head>
        <title>{`Download Gyawun Music Version ${releases_data.name}`}</title>
        <meta
          name="description"
          content={`Download version ${releases_data.tag_name} of Gyawun Music for Android or Windows. Enjoy seamless endless streaming.`}
        />
        <meta
          name="keywords"
          content={`download Gyawun Music version ${releases_data.name}, Gyawun Music, music streaming, Android music app, Windows music app, download music app, Google account integration, open source music app, GitHub music app`}
        />
        <meta name="author" content="Sheikh Haziq" />
      </Head>
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

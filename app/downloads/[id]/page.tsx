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
              <Markdown>{releases_data.body}</Markdown>
            </CardDescription>
            <div className="flex flex-row text-sm mt-4">
              Published at:{" "}
              {new Date(releases_data.published_at).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </section>
      <DownloadSection name={releases_data.name ?? ""} assets={assets} />
    </>
  );
}

export default Release;

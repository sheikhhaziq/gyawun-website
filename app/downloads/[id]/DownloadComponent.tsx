"use client";

import DownloadSection from "@/components/DownloadSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function DownloadComponent({ id }: { id: string }) {
  const [releases_data, setReleaseData] = useState<Release | null>(null);
  useEffect(() => {
    const url: string = `https://api.github.com/repos/jhelumcorp/gyawun/releases/${id}`;
    const fetchReleaseData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setReleaseData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };
    fetchReleaseData();
  }, [id]);
  const assets: Asset[] = releases_data != null ? releases_data.assets : [];
  if (releases_data == null) {
    return <>Loading</>;
  }
  return (
    <>
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

export default DownloadComponent;

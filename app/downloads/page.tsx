import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Available Versions of Gyawun Music - Find Your Perfect Music Streaming App",
  description:
    "Explore all available versions of Gyawun Music for Android and Windows. Find the version that suits your needs and enjoy seamless music streaming with Google account integration.",
  keywords: [
    "Gyawun Music versions",
    "music streaming app versions",
    "Android music app versions",
    "Windows music app versions",
    "download music app versions",
    "Google account integration",
    "open source music app",
    "GitHub music app",
  ],
  authors: [{ name: "Sheikh Haziq", url: "https://github.com/sheikhhaziq" }],
};

async function Releases() {
  const releases_response: Response = await fetch(
    "https://api.github.com/repos/jhelumcorp/gyawun/releases"
  );
  const releases_data: Release[] = await releases_response.json();
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="container">
          {releases_data.map((release) => (
            <Link
              href={"/downloads/" + release.id}
              key={release.id}
              className="flex px-2 py-1 my-1 justify-between items-center rounded-lg bg-card hover:bg-secondary"
            >
              <div>{release.name}</div>
              <Button variant="link">
                <ArrowRight />
              </Button>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default Releases;

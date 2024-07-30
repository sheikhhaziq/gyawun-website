import Header from "@/components/Header";
import DownloadSection from "../../../components/DownloadSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Download Gyawun Music - Seamless Music Streaming for Android and Windows",
  description:
    "Download Gyawun Music app for Android and Windows. Enjoy seamless music streaming with Google account integration. Available now on GitHub.",
  keywords: [
    "Gyawun Music",
    "music streaming",
    "Android music app",
    "Windows music app",
    "download music app",
    "Google account integration",
    "open source music app",
    "GitHub music app",
  ],
  authors: [{ name: "Sheikh Haziq", url: "https://github.com/sheikhhaziq" }],
};

async function Download() {
  const releases_response: Response = await fetch(
    "https://api.github.com/repos/jhelumcorp/gyawun/releases"
  );
  const releases_data: Release[] = await releases_response.json();
  const latest_release: Release = releases_data.filter(
    (release) => release.prerelease === false
  )[0];

  const assets: Asset[] = latest_release.assets;
  return (
    <>
      <Header />
      <section className="pt-24">
        <DownloadSection name={latest_release.name} assets={assets} />
        <div className="text-center">
          <Button variant="link" asChild>
            <Link href="/downloads">
              Check older versions <ArrowRightIcon className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default Download;

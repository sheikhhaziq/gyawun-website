import Header from "@/components/Header";
import DownloadSection from "../../../components/DownloadSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

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

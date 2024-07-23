import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

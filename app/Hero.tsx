import { DownloadCloudIcon } from "lucide-react";
import Image from "next/image";
import phone from "/images/phone.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="flex md:h-screen bg-gradient-to-r from-[#f4274d] to-[#ff0000]  align-middle pt-20">
      <div className="flex flex-col md:flex-row container text-white  items-center gap-5">
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <div className="text-3xl md:4xl lg:text-6xl font-bold my-7">
            Stream Music for free
          </div>
          <p>
            Immerse yourself in the world of Gyawun, where music knows no
            bounds. Enjoy uninterrupted, ad-free streaming with an extensive
            library of songs. Download now and let the music carry you away.
          </p>
          <div>
            <Link href="/downloads/latest">
              <Button
                variant="outline"
                className="bg-transparent font-bold my-7"
              >
                <DownloadCloudIcon className="mx-2"></DownloadCloudIcon>Download
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1  hidden md:flex justify-center">
          <Image src={phone} width={341} height={600} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

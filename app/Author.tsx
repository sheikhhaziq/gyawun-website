import { Card, CardContent, CardDescription } from "@/components/ui/card";
import developer from "/images/developer.jpg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Author() {
  return (
    <section className="container my-5">
      <h2 className="text-2xl font-bold mt-4 mb-2">Developer</h2>
      <Card
        itemScope={true}
        itemProp="Person"
        itemType="https://schema.org/Person"
        className="flex flex-col md:flex-row items-center gap-5 p-5 "
      >
        <Avatar className="h-48 w-48 border">
          <Image
            itemProp="image"
            src={developer}
            alt="Sheikh Haziq"
            height={196}
            width={196}
            className="rounded-full"
          />
          <AvatarFallback>Sheikh Haziq</AvatarFallback>
        </Avatar>
        <div className="grid">
          <div
            itemProp="name"
            className="font-semibold text-center md:text-left"
          >
            Sheikh Haziq
          </div>
          <p itemProp="description" className="text-muted-foreground">
            I am a passionate developer specializing in mobile app development
            using Flutter and web development. Currently pursuing a degree in
            Computer Science and Engineering with a focus on Machine Learning, I
            bring a unique blend of skills to create innovative and
            user-friendly applications. My projects include Gyawun Music, a
            music streaming app available on both Android and Windows. I am also
            proficient in leveraging modern web technologies to build robust and
            scalable websites.
          </p>
          <a itemProp="url" href="http://www.github.com/sheikhhaziq">
            Read more
          </a>
        </div>
      </Card>
    </section>
  );
}

export default Author;

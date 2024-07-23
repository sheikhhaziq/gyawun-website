import Header from "@/components/Header";
import DownloadComponent from "./DownloadComponent";

async function Release({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <DownloadComponent id={params.id} />
    </>
  );
}

export default Release;

import { fetchLatestReleaseWithAssets } from "@/lib/github-releases";
import DownloadContent from "./download-content";

export default async function DownloadPage() {
  const release = await fetchLatestReleaseWithAssets();
  return <DownloadContent release={release} />;
}

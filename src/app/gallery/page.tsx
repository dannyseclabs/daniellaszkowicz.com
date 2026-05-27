import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function GalleryPage() {
  return (
    <>
      <PageHeader {...routeIntros.gallery} />
      <PlaceholderBody label="Gallery archive coming soon." />
    </>
  );
}

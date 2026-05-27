import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader {...routeIntros.about} />
      <PlaceholderBody label="About archive coming soon." />
    </>
  );
}

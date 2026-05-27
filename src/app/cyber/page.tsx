import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function CyberPage() {
  return (
    <>
      <PageHeader {...routeIntros.cyber} />
      <PlaceholderBody label="Security notes coming soon." />
    </>
  );
}

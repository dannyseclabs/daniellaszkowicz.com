import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function UsesPage() {
  return (
    <>
      <PageHeader {...routeIntros.uses} />
      <PlaceholderBody label="Uses and setup notes coming soon." />
    </>
  );
}

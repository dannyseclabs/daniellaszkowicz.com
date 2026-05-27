import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function JournalPage() {
  return (
    <>
      <PageHeader {...routeIntros.journal} />
      <PlaceholderBody label="Journal entries coming soon." />
    </>
  );
}

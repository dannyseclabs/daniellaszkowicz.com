import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHeader {...routeIntros.contact} />
      <PlaceholderBody label="Contact details coming soon." />
    </>
  );
}

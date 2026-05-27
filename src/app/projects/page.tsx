import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderBody } from "@/components/layout/placeholder-body";
import { routeIntros } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader {...routeIntros.projects} />
      <PlaceholderBody label="Project index coming soon." />
    </>
  );
}

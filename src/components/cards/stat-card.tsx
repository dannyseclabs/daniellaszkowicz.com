import { Surface } from "@/components/layout/surface";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  description?: string;
  className?: string;
};

export function StatCard({
  value,
  label,
  description,
  className,
}: StatCardProps) {
  return (
    <Surface className={cn("p-5", className)} variant="muted">
      <p className="font-heading text-4xl leading-none font-medium">{value}</p>
      <p className="mt-3 text-sm font-medium">{label}</p>
      {description ? (
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          {description}
        </p>
      ) : null}
    </Surface>
  );
}

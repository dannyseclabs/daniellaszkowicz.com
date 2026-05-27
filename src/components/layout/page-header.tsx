import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <Container className={cn("pt-16 sm:pt-20 lg:pt-24", className)} size="lg">
      <div className="border-line max-w-4xl border-b pb-10 sm:pb-12">
        {eyebrow ? (
          <p className="text-muted-foreground mb-5 font-mono text-xs tracking-[0.22em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading text-5xl leading-[0.98] font-medium text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-pretty">
            {description}
          </p>
        ) : null}
      </div>
    </Container>
  );
}

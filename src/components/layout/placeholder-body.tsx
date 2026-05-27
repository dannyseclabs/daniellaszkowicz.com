import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type PlaceholderBodyProps = {
  label: string;
};

export function PlaceholderBody({ label }: PlaceholderBodyProps) {
  return (
    <Section>
      <Container>
        <div className="border-border bg-card rounded-lg border border-dashed p-8 sm:p-10">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
            Static placeholder
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-8">
            {label} This route is intentionally static while the content system
            and editorial structure take shape.
          </p>
        </div>
      </Container>
    </Section>
  );
}

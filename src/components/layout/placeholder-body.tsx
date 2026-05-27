import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Surface } from "@/components/layout/surface";

type PlaceholderBodyProps = {
  label: string;
};

export function PlaceholderBody({ label }: PlaceholderBodyProps) {
  return (
    <Section spacing="tight">
      <Container size="lg">
        <Surface className="border-dashed p-8 sm:p-10" variant="muted">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
            Static placeholder
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-8 text-pretty">
            {label} This route is intentionally static while the content system
            and editorial structure take shape.
          </p>
        </Surface>
      </Container>
    </Section>
  );
}

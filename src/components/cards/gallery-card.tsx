import Image from "next/image";
import Link from "next/link";

import { Surface } from "@/components/layout/surface";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryCardProps = {
  title: string;
  description: string;
  image?: GalleryImage;
  href?: string;
  className?: string;
};

export function GalleryCard({
  title,
  description,
  image,
  href,
  className,
}: GalleryCardProps) {
  const card = (
    <Surface
      className={cn("overflow-hidden p-3", className)}
      interactive={Boolean(href)}
    >
      <div className="bg-surface-muted relative aspect-[4/3] overflow-hidden rounded-md">
        {image ? (
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={image.src}
          />
        ) : (
          <div
            className="h-full w-full bg-[linear-gradient(135deg,var(--surface-muted),var(--card)_42%,color-mix(in_oklch,var(--accent)_18%,var(--surface)))]"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="p-3 pt-5">
        <h3 className="font-heading text-2xl leading-tight font-medium">
          {title}
        </h3>
        <p className="text-muted-foreground mt-3 text-sm leading-6 text-pretty">
          {description}
        </p>
      </div>
    </Surface>
  );

  if (!href) {
    return card;
  }

  return (
    <Link className="block focus:outline-none" href={href}>
      {card}
    </Link>
  );
}

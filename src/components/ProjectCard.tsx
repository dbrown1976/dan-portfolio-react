import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/content/portfolio";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  readonly fallbackThumbnailSrc: string;
  readonly href: string;
  readonly project: PortfolioProject;
};

export function ProjectCard({ fallbackThumbnailSrc, href, project }: ProjectCardProps) {
  const thumbnailSrc = project.workThumbnail.src || fallbackThumbnailSrc;
  const presentationLabel =
    project.presentation === "flagship" ? "Flagship case study" : "Case study";
  const segmentCount: number = project.segments.length;

  return (
    <article className={styles.card}>
      <Link className={styles.link} href={href}>
        <span className={styles.imageFrame} aria-hidden="true">
          <Image
            alt=""
            className={styles.image}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            src={thumbnailSrc}
          />
        </span>
        <span className={styles.body}>
          <span className={styles.meta}>{presentationLabel}</span>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.details}>
            {segmentCount} {segmentCount === 1 ? "section" : "sections"}
          </span>
        </span>
      </Link>
    </article>
  );
}

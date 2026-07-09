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
        <span className={styles.imageFrame}>
          <Image
            alt={`${project.title} case study thumbnail`}
            className={styles.image}
            fill
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 24rem"
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

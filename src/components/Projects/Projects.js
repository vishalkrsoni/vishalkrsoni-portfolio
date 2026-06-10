"use client";

import { ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Projects.module.css";

export default function Projects() {
  const groups = useMemo(
    () => ["Client / Enterprise Work", "Personal Work"],
    [],
  );
  const [activeGroup, setActiveGroup] = useState(groups[0]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);
  const visibleProjects = projects.filter(
    (project) => project.group === activeGroup,
  );

  function scrollToProject(index) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const card = carousel.children[index];
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function updateActiveProject() {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const nextIndex = Array.from(carousel.children).reduce(
      (closest, child, index) => {
        const distance = Math.abs(child.offsetLeft - carousel.scrollLeft);
        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    ).index;

    setActiveProjectIndex(nextIndex);
  }

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.dataset.projectModal = "open";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      delete document.body.dataset.projectModal;
    };
  }, [selectedProject]);

  return (
    <>
      <section className={styles.section} id="projects">
        <div className={styles.headingWrap}>
          <SectionHeading
            align="center"
            eyebrow="Selected Work"
            title="Projects"
          />
          <p>
            Production systems, client platforms, and independent builds with
            the technical decisions that shaped them.
          </p>
        </div>
        <div className={styles.filters} aria-label="Project filters">
          {groups.map((group) => (
            <button
              className={group === activeGroup ? styles.activeFilter : ""}
              key={group}
              type="button"
              onClick={() => {
                setActiveGroup(group);
                setActiveProjectIndex(0);
                setSelectedProject(null);
                carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
            >
              {group}
            </button>
          ))}
        </div>
        <div className={styles.carouselShell}>
          <div
            className={styles.mobileChrome}
            aria-label="Project carousel controls"
          >
            <span>{activeProjectIndex + 1}</span>
            <div>
              {visibleProjects.map((project, index) => (
                <button
                  className={
                    index === activeProjectIndex ? styles.activeDot : ""
                  }
                  key={project.title}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  onClick={() => scrollToProject(index)}
                />
              ))}
            </div>
            <span>{visibleProjects.length}</span>
          </div>
          <div
            className={styles.grid}
            ref={carouselRef}
            onScroll={updateActiveProject}
          >
            {visibleProjects.map((project) => {
              const hasDetails =
                project.highlights?.length || project.responsibilities?.length;

              return (
                <article className={styles.card} key={project.title}>
                  <div className={styles.cardTop}>
                    <span>{project.category}</span>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    ) : null}
                  </div>
                  <div>
                    <small>{project.date}</small>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <p className={styles.stack}>{project.stack}</p>
                    <div className={styles.actions}>
                      {hasDetails ? (
                        <button
                          className={styles.readButton}
                          type="button"
                          onClick={() => setSelectedProject(project)}
                        >
                          Read details
                        </button>
                      ) : null}
                      {project.href ? (
                        <a
                          className={styles.textLink}
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Project
                          <ExternalLink size={17} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {selectedProject
        ? createPortal(
            <div
              className={styles.modalOverlay}
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedProject(null);
                }
              }}
            >
              <article
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-detail-title"
              >
                <div className={styles.modalHeader}>
                  <div>
                    <span>{selectedProject.category}</span>
                    <small>{selectedProject.date}</small>
                    <h3 id="project-detail-title">{selectedProject.title}</h3>
                  </div>
                  <button
                    className={styles.closeButton}
                    type="button"
                    aria-label="Close project details"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className={styles.modalDescription}>
                  {selectedProject.description}
                </p>
                <div className={styles.details}>
                  {selectedProject.highlights?.length ? (
                    <div className={styles.detailGroup}>
                      <strong>Technical Highlights</strong>
                      <ul className={styles.highlights}>
                        {selectedProject.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {selectedProject.responsibilities?.length ? (
                    <div className={styles.detailGroup}>
                      <strong>Responsibilities</strong>
                      <ul className={styles.highlights}>
                        {selectedProject.responsibilities.map(
                          (responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className={styles.modalFooter}>
                  <p className={styles.stack}>{selectedProject.stack}</p>
                  {selectedProject.href ? (
                    <a
                      className={styles.textLink}
                      href={selectedProject.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                      <ExternalLink size={17} />
                    </a>
                  ) : null}
                </div>
              </article>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

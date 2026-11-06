import { Project } from "@/lib/data";
import Image from "next/image";

export interface Props {
  project: Project;
  index: number;
  SelectedProject: string | null;
  onMouseEnter: (slug: string) => void;
}

export default function ProjectDetails({
  project,
  index,
  SelectedProject,
  onMouseEnter,
}: Props) {
  return (
    <div
      className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none"
      onMouseEnter={() => onMouseEnter(project.slug)}
    >
      {SelectedProject === null && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={300}
          height={200}
          className="w-full object-cover mb-6 aspect-[3/2] object-top"
        />
      )}
      <div className="flex gap-2 md:gap-5">
        <div className="font-anton text-muted-foreground">
          {(index + 1).toString().padStart(2, "0")}
        </div>
        <div>
          <h4 className="text-4xl xs:text-6xl font-anton">{project.title}</h4>
          <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

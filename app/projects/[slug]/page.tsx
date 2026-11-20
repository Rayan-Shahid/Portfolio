// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { PROJECTS } from "@/lib/data";

// export function generateStaticParams() {
//   return PROJECTS.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export default async function ProjectDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = PROJECTS.find((item) => item.slug === slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen py-20">
//       <div className="container max-w-4xl">
//         <Link
//           href="/#selected-projects"
//           className="inline-block text-sm text-muted-foreground hover:text-foreground mb-8"
//         >
//           &larr; Back to Projects
//         </Link>

//         <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
//           <h1 className="text-4xl md:text-6xl font-anton uppercase">
//             {project.title}
//           </h1>
//           <span className="text-sm text-muted-foreground">{project.year}</span>
//         </div>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {project.techStack.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {project.thumbnail && (
//           <div className="overflow-hidden rounded-lg border border-border mb-10">
//             <Image
//               src={project.thumbnail}
//               alt={project.title}
//               width={900}
//               height={600}
//               className="w-full aspect-[3/2] object-cover object-top"
//               priority
//             />
//           </div>
//         )}

//         <div className="flex flex-wrap gap-4 mb-12">
//           {project.liveurl && (
//             <a
//               href={project.liveurl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium"
//             >
//               View Live / Repo
//             </a>
//           )}
//           {project.reportUrl && (
//             <a
//               href={project.reportUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-muted"
//             >
//               View Report
//             </a>
//           )}
//         </div>

//         <div className="space-y-10">
//           <section>
//             <h2 className="text-xl font-anton uppercase mb-3">Overview</h2>
//             <div
//               className="prose prose-invert max-w-none text-muted-foreground leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: project.description }}
//             />
//           </section>

//           <section>
//             <h2 className="text-xl font-anton uppercase mb-3">
//               Role &amp; Contributions
//             </h2>
//             <div
//               className="prose prose-invert max-w-none text-muted-foreground leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: project.role }}
//             />
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }import { Suspense } from "react";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProjectDetails from "./_components/ProjectDetails";
import { PROJECTS } from "@/lib/data";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
  return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.techStack.slice(0, 3).join(", ")}`,
    description: project.description.replace(/<[^>]*>/g, "").trim(),
  } as Metadata;
};

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-poppins text-sm text-muted-foreground">
          Loading project...
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

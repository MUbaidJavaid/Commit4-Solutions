import ProjectDetail from "@/pages/ProjectDetail";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return <ProjectDetail slug={params.slug} />;
}


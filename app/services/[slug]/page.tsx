import ServiceDetail from "@/pages/ServiceDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}


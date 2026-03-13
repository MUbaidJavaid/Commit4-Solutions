import ServiceDetail from "@/pages/ServiceDetail";

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  return <ServiceDetail slug={params.slug} />;
}


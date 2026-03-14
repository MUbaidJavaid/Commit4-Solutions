import HireDevDetail from "@/pages/HireDevDetail";

interface Props {
  params: Promise<{ role: string }>;
}

export default async function Page({ params }: Props) {
  const { role } = await params;
  return <HireDevDetail slug={role} />;
}


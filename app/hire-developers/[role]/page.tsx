import HireDevDetail from "@/pages/HireDevDetail";

interface Props {
  params: { role: string };
}

export default function Page({ params }: Props) {
  return <HireDevDetail slug={params.role} />;
}


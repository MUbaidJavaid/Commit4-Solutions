import ProjectDetail from '@/modules/pages/ProjectDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page ({ params }: Props) {
  const { slug } = await params
  return <ProjectDetail slug={slug} />
}

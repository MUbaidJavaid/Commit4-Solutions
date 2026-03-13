interface Props {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-accent" />
      <span className="text-xs font-body font-semibold tracking-widest uppercase text-accent">{children}</span>
    </div>
  );
}

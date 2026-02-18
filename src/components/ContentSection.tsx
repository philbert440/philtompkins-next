interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-emerald">{title}</h2>
      <div className="text-muted leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

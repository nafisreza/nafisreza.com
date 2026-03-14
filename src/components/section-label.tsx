interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
      {children}
    </div>
  );
}

export default function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-md bg-muted text-muted-foreground text-sm px-4 py-3 mb-6">
      {children}
    </p>
  );
}

export function ToolHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
    </div>
  );
}

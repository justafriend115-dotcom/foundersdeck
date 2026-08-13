import { Logo } from "@/components/logo";
import { Card } from "@/components/ui/card";

export function AuthCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8 lg:hidden">
        <Logo />
      </div>
      <Card className="border-border bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">{title}</h1>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
        <div className="mt-6">{children}</div>
      </Card>
      {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
    </div>
  );
}

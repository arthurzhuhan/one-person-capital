import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  description?: ReactNode;
  to?: string;
  onClick?: () => void;
}

export function MetricCard({ icon: Icon, value, label, description, to, onClick }: MetricCardProps) {
  const isClickable = !!(to || onClick);

  const inner = (
    <Card className={cn(
      "h-full transition-colors overflow-hidden border-border/50",
      isClickable && "hover:bg-accent/50 cursor-pointer"
    )}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums">
              {value}
            </p>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              {label}
            </p>
            {description && (
              <div className="text-xs text-muted-foreground/70 mt-1.5 hidden sm:block">{description}</div>
            )}
          </div>
          <Icon className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-1.5" />
        </div>
      </CardContent>
    </Card>
  );

  if (to) {
    return (
      <Link to={to} className="no-underline text-inherit h-full block" onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div className="h-full" onClick={onClick}>
        {inner}
      </div>
    );
  }

  return inner;
}

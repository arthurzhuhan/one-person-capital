import { Badge } from "@/components/ui/badge";
import { cn } from "../lib/utils";
import { statusBadge, statusBadgeDefault } from "../lib/status-colors";

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium border shadow-none",
        statusBadge[status] ?? statusBadgeDefault,
        className
      )}
    >
      {status.replace("_", " ")}
    </Badge>
  );
}

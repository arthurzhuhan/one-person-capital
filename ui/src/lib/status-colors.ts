/**
 * Canonical status & priority color definitions.
 *
 * Every component that renders a status indicator (StatusIcon, StatusBadge,
 * agent status dots, etc.) should import from here so colors stay consistent.
 */

// ---------------------------------------------------------------------------
// Issue status colors
// ---------------------------------------------------------------------------

/** StatusIcon circle: text + border classes */
export const issueStatusIcon: Record<string, string> = {
  backlog: "text-muted-foreground/60 border-muted-foreground/30",
  todo: "text-blue-500 border-blue-500/50 dark:text-blue-400 dark:border-blue-400/40",
  in_progress: "text-amber-500 border-amber-500/50 dark:text-amber-400 dark:border-amber-400/40",
  in_review: "text-indigo-500 border-indigo-500/50 dark:text-indigo-400 dark:border-indigo-400/40",
  done: "text-emerald-500 border-emerald-500/50 dark:text-emerald-400 dark:border-emerald-400/40",
  cancelled: "text-muted-foreground/50 border-muted-foreground/30",
  blocked: "text-rose-500 border-rose-500/50 dark:text-rose-400 dark:border-rose-400/40",
};

export const issueStatusIconDefault = "text-muted-foreground/60 border-muted-foreground/30";

/** Text-only color for issue statuses (dropdowns, labels) */
export const issueStatusText: Record<string, string> = {
  backlog: "text-muted-foreground",
  todo: "text-blue-600 dark:text-blue-400",
  in_progress: "text-amber-600 dark:text-amber-400",
  in_review: "text-indigo-600 dark:text-indigo-400",
  done: "text-emerald-600 dark:text-emerald-400",
  cancelled: "text-muted-foreground",
  blocked: "text-rose-600 dark:text-rose-400",
};

export const issueStatusTextDefault = "text-muted-foreground";

// ---------------------------------------------------------------------------
// Badge colors — used by StatusBadge for all entity types
// ---------------------------------------------------------------------------

export const statusBadge: Record<string, string> = {
  // Agent statuses
  active: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  running: "bg-sky-50 text-sky-700 border-sky-200/50 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  paused: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  idle: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  archived: "bg-muted text-muted-foreground border-transparent",

  // Goal statuses
  planned: "bg-muted text-muted-foreground border-transparent",
  achieved: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",

  // Run statuses
  failed: "bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  timed_out: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  succeeded: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  error: "bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  terminated: "bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  pending: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",

  // Approval statuses
  pending_approval: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  revision_requested: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  rejected: "bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",

  // Issue statuses — consistent hues with issueStatusIcon above
  backlog: "bg-muted text-muted-foreground border-transparent",
  todo: "bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
  in_progress: "bg-amber-50 text-amber-700 border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  in_review: "bg-indigo-50 text-indigo-700 border-indigo-200/50 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
  blocked: "bg-rose-50 text-rose-700 border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  done: "bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  cancelled: "bg-muted text-muted-foreground border-transparent",
};

export const statusBadgeDefault = "bg-muted text-muted-foreground border-transparent";

// ---------------------------------------------------------------------------
// Agent status dot — solid background for small indicator dots
// ---------------------------------------------------------------------------

export const agentStatusDot: Record<string, string> = {
  running: "bg-sky-500 animate-pulse",
  active: "bg-emerald-500",
  paused: "bg-amber-500",
  idle: "bg-amber-500",
  pending_approval: "bg-amber-500",
  error: "bg-rose-500",
  archived: "bg-neutral-400",
};

export const agentStatusDotDefault = "bg-neutral-400";

// ---------------------------------------------------------------------------
// Priority colors
// ---------------------------------------------------------------------------

export const priorityColor: Record<string, string> = {
  critical: "text-rose-600 dark:text-rose-400",
  high: "text-amber-600 dark:text-amber-400",
  medium: "text-amber-500 dark:text-amber-400",
  low: "text-blue-600 dark:text-blue-400",
};

export const priorityColorDefault = "text-amber-500 dark:text-amber-400";

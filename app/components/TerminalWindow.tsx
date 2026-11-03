import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <span className="terminal-dot bg-[#f85149]" />
        <span className="terminal-dot bg-[#d29922]" />
        <span className="terminal-dot bg-[#3fb950]" />
        <span className="ml-3 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
}

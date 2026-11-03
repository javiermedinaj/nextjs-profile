"use client";

import { useEffect, useState } from "react";

const COMMANDS = [
  "whoami",
  "cat stack.json",
  "ls ~/projects",
  "aws s3 ls",
  "npm run build",
];

const TYPE_MS = 70;
const HOLD_MS = 1400;

export function TerminalTyping() {
  const [text, setText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setText(COMMANDS[0]);
      return undefined;
    }

    const command = COMMANDS[commandIndex];
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    if (text.length < command.length) {
      timer = setTimeout(() => {
        if (!cancelled) setText(command.slice(0, text.length + 1));
      }, TYPE_MS);
    } else {
      timer = setTimeout(() => {
        if (cancelled) return;
        setText("");
        setCommandIndex((current) => (current + 1) % COMMANDS.length);
      }, HOLD_MS);
    }

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [commandIndex, text]);

  return (
    <span className="text-foreground">
      {text}
      <span className="typing-effect ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px]" />
    </span>
  );
}

import type { SVGProps } from "react";

const base = "h-6 w-6";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export type IconName =
  | "palette"
  | "video"
  | "code"
  | "globe"
  | "tag"
  | "play"
  | "mail"
  | "message"
  | "github"
  | "facebook"
  | "arrowDown"
  | "arrowRight"
  | "sparkles"
  | "user"
  | "external";

export function Icon({ name, className = base, ...props }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "palette":
      return <svg {...common}><path d="M12 3.5c-4.7 0-8.5 3.25-8.5 7.75 0 3.48 2.57 6.75 6.16 6.75h1.14c.86 0 1.42.88 1.06 1.66-.36.78.21 1.64 1.07 1.54 4.1-.49 7.57-3.78 7.57-8.2 0-5.25-3.85-9.5-8.5-9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.8 11.1h.01M10.2 7.8h.01M14.2 7.8h.01M16.7 11.1h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>;
    case "video":
      return <svg {...common}><path d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h6A2.75 2.75 0 0 1 16.25 6.75v10.5A2.75 2.75 0 0 1 13.5 20h-6a2.75 2.75 0 0 1-2.75-2.75V6.75Z" stroke="currentColor" strokeWidth="1.8"/><path d="m16.25 9 3.4-2.1a1 1 0 0 1 1.53.85v8.5a1 1 0 0 1-1.53.85l-3.4-2.1V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 8h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "code":
      return <svg {...common}><path d="m8.25 8-4 4 4 4M15.75 8l4 4-4 4M13.25 5.75l-2.5 12.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "globe":
      return <svg {...common}><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.1 3.2 5 3.2 9s-1 6.9-3.2 9c-2.2-2.1-3.2-5-3.2-9S9.8 5.1 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "tag":
      return <svg {...common}><path d="M4 12.2V5.75A1.75 1.75 0 0 1 5.75 4h6.45c.47 0 .91.19 1.24.51l6.05 6.05a1.75 1.75 0 0 1 0 2.48l-6.45 6.45a1.75 1.75 0 0 1-2.48 0L4.51 13.44A1.75 1.75 0 0 1 4 12.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 8h.01" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/></svg>;
    case "play":
      return <svg {...common} fill="currentColor"><path d="M8 5.7c0-.8.88-1.28 1.55-.84l9.15 6.3a1 1 0 0 1 0 1.68l-9.15 6.3A1 1 0 0 1 8 18.3V5.7Z"/></svg>;
    case "mail":
      return <svg {...common}><path d="M4.75 6.5h14.5A1.75 1.75 0 0 1 21 8.25v7.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 15.75v-7.5A1.75 1.75 0 0 1 4.75 6.5Z" stroke="currentColor" strokeWidth="1.8"/><path d="m4 8 8 5.5L20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "message":
      return <svg {...common}><path d="M5.5 18.5 4 21l3.1-1.15c1.33.73 2.98 1.15 4.9 1.15 5 0 9-3.58 9-8s-4-8-9-8-9 3.58-9 8c0 2.1.9 4.02 2.5 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/></svg>;
    case "github":
      return <svg {...common} fill="currentColor"><path fillRule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.6c-2.56.56-3.1-1.1-3.1-1.1-.42-1.07-1.02-1.35-1.02-1.35-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.82 1.41 2.16 1 2.68.77.08-.6.32-1 .58-1.23-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.55.94A8.8 8.8 0 0 1 12 7.44c.79 0 1.56.1 2.3.31 1.77-1.19 2.55-.94 2.55-.94.5 1.26.19 2.2.09 2.43.6.64.95 1.46.95 2.46 0 3.53-2.15 4.3-4.2 4.53.33.29.63.85.63 1.72v2.39c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z" clipRule="evenodd"/></svg>;
    case "facebook":
      return <svg {...common} fill="currentColor"><path d="M14.2 8.3h2.1V4.8c-.36-.05-1.6-.16-3.04-.16-3 0-5.06 1.83-5.06 5.2v3.02H4.8v3.9h3.4v6h4.15v-6h3.25l.52-3.9h-3.77v-2.64c0-1.13.3-1.92 1.85-1.92Z"/></svg>;
    case "arrowDown":
      return <svg {...common}><path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "arrowRight":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "sparkles":
      return <svg {...common}><path d="M12 3l1.3 4.1L17.4 8.4l-4.1 1.3L12 13.8l-1.3-4.1-4.1-1.3 4.1-1.3L12 3ZM18.5 13l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2ZM5.8 14.5l.65 1.85 1.85.65-1.85.65-.65 1.85-.65-1.85-1.85-.65 1.85-.65.65-1.85Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
    case "user":
      return <svg {...common}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.2c.9-3.25 3.73-5.2 7.5-5.2s6.6 1.95 7.5 5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "external":
      return <svg {...common}><path d="M8 7h9v9M17 7 7 17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
}

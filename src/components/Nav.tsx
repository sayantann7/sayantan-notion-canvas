import { cn } from "@/lib/utils";

type NavItem = { id: string; label: string; emoji: string };

const navItems: NavItem[] = [
  { id: "home", label: "Home", emoji: "🏠" },
  { id: "about", label: "About", emoji: "🧭" },
  { id: "projects", label: "Projects", emoji: "🛠️" },
  { id: "experience", label: "Experience", emoji: "🎓" },
  { id: "certifications", label: "Certs", emoji: "💰" },
  { id: "blog", label: "Blog", emoji: "📝" },
  { id: "testimonials", label: "Testimonials", emoji: "💬" },
  { id: "contact", label: "Contact", emoji: "🚀" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FloatingSideNav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-30",
        className
      )}
      aria-label="Section navigation"
    >
      <div className="flex flex-col gap-3 p-2 rounded-3xl bg-background border border-white/10 shadow-2xl backdrop-blur-xl">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(item.id);
            }}
            className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-md hover:bg-white/20 transition-colors"
            title={item.label}
          >
            <span className="text-xl leading-none select-none">{item.emoji}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export function MobileTopBar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "md:hidden mx-2 bg-white/5 border bg-background rounded-2xl shadow-lg backdrop-blur-xl px-2 py-2",
        className
      )}
      aria-label="Section navigation"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(item.id);
            }}
            className="shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shadow-md hover:bg-white/20 transition-colors"
            title={item.label}
          >
            <span className="text-lg leading-none select-none">{item.emoji}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

import { IconDownload } from "@/components/icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header
      className="fixed left-1/2 top-10 z-250 -translate-x-1/2 transition-all duration-300"
      id="header"
    >
      <div className="glass-bg glass-border px-6 py-4 rounded-[20px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)] flex flex-row items-center justify-between gap-20 w-[50vw] max-w-[700px]">
        <div>
          {/* Logo and Name */}
          <a
            href="#home"
            className="flex flex-row items-center gap-3"
            aria-label="Go to home"
          >
            <Avatar>
              <AvatarImage src="/profile.jpeg" alt="Rajat Goel" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <span className="font-medium text-[24px] text-[#eeeeee] -tracking-[1px]">
              Rajat Goel
            </span>
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-row items-center gap-6">
          <Button variant="link" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <Button
            variant="secondary"
            className="bg-accent hover:bg-accent/80"
            asChild
          >
            <a
              href="/CV-Rajat-Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <IconDownload className="h-4 w-4 text-white" />
              <span className="font-inter text-[14px] font-medium leading-[24px] text-white">
                Resume
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

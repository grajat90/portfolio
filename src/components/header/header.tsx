import { IconDownload } from "@/components/icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Button from "@/components/ui/button";

export function Header() {
  return (
    <header
      className="fixed left-1/2 top-6 md:top-10 z-250 -translate-x-1/2 transition-all duration-300"
      id="header"
    >
      <div className="glass-bg glass-border px-4 md:px-6 py-3 md:py-4 rounded-[16px] md:rounded-[20px] shadow-[0px_0px_10px_4px_rgba(0,0,0,0.25)] flex flex-row items-center justify-between gap-2 md:gap-20 w-[92vw] md:w-[50vw] max-w-[700px]">
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
            <span className="font-medium text-[16px] md:text-[24px] text-[#eeeeee] -tracking-[1px]">
              Rajat Goel
            </span>
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-row items-center gap-2 md:gap-6">
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
              <span className="font-inter text-[12px] md:text-[14px] font-medium leading-[20px] md:leading-[24px] text-white">
                Resume
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

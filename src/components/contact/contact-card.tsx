import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import TelegramIcon from "@/assets/telegram.svg";

export function ContactCard() {
  return (
    <footer
      id="contact"
      className="w-full px-6 lg:px-[250px] py-12 lg:py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-[900px] glass-bg glass-border rounded-[20px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-6 p-6 md:p-10">
          <div className="text-[24px] md:text-[34px] font-medium -tracking-[1px]">
            You can reach me at
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-10">
            {/* Left column: Direct */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:grajat90@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                aria-label="Send me an email"
              >
                <MailIcon className="w-5 h-5 text-muted-foreground transition group-hover:text-accent" />
                <span className="text-[14px] md:text-[16px]">
                  grajat90@gmail.com
                </span>
              </a>
              <a
                href="https://t.me/rajatgoel1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                aria-label="Message me on Telegram"
              >
                <img
                  src={TelegramIcon}
                  alt="Telegram"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[14px] md:text-[16px]">@rajatgoel1</span>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-full bg-white/10" />

            {/* Right column: Socials */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/-rajatgoel/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                aria-label="Visit my LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-muted-foreground transition group-hover:text-accent" />
                <span className="text-[14px] md:text-[16px]">LinkedIn</span>
              </a>
              <a
                href="https://github.com/grajat90"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                aria-label="Visit my GitHub"
              >
                <GithubIcon className="w-5 h-5 text-muted-foreground transition group-hover:text-accent" />
                <span className="text-[14px] md:text-[16px]">GitHub</span>
              </a>
              <a
                href="https://x.com/grajat90"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ring/50 outline-none"
                aria-label="Visit my Twitter/X"
              >
                <TwitterIcon className="w-5 h-5 text-muted-foreground transition group-hover:text-accent" />
                <span className="text-[14px] md:text-[16px]">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

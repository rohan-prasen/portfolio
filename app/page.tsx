import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            This page will be online{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              soon!
            </code>
          </h1>
        </div>
        <footer className="flex w-full justify-center sm:justify-start">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid border-transparent bg-foreground text-background transition-colors flex items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Resume
          </a>
        </footer>
      </main>
    </div>
  );
}

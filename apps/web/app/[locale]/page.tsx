import { Hero, Home } from "@/components/Home";
import { AboutMe } from "@/components/AboutMe";
import { AppHeader } from "@/components/Navbar";

export default function Page() {
  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <AppHeader />
      </div>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4 mt-20">
          <Home />
          <AboutMe />
        </div>
      </div>
    </>
  );
}

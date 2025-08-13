import { Home } from "@/components/Home";
import { AppHeader } from "@/components/Navbar";

export default function Page() {
  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-2 z-50">
        <AppHeader />
      </div>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Konten lainnya */}
          <Home />
        </div>
      </div>
    </>
  );
}

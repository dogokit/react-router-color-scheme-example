import { href, Outlet } from "react-router";
import { ColorSchemeToggle } from "~/components/shared/color-scheme-toggle";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <header className="flex items-center justify-between p-4">
        <ColorSchemeToggle action={href("/actions/color-scheme")} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "React Router Color Scheme" }];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>React Router Color Scheme</h1>
    </div>
  );
}

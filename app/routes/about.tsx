import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About - React Router Color Scheme" }];
}

export default function AboutRoute() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

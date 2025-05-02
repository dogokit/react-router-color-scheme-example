import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // UI
  layout("layouts/main.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
  ]),

  // Actions
  route("actions/color-scheme", "actions/color-scheme.ts"),
] satisfies RouteConfig;

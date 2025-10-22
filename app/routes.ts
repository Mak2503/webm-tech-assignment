import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about.tsx"),
  route("contact-us", "routes/contact.tsx")
] satisfies RouteConfig;

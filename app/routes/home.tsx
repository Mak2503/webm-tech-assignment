import App from "@/components/App";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admirals Clone" },
    { name: "description", content: "A stock market exchange" },
  ];
}

export default function Home() {
  if (typeof window === "undefined") {
    // Code running on the server
    console.log("Running on server");
  } else {
    // Code running on the client (browser)
    console.log("Running on client", window);
  }
  return <App />;
}

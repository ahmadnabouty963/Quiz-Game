import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute("/")({
  component: indexComponent,
});

function indexComponent() {
  return <Home />;
}

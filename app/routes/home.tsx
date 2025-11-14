import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MDG Web Application" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    // <div style={app.css}></div>
    <div className="screenContainer">MDG Web Application</div>
  );
  // return <Welcome />;
}

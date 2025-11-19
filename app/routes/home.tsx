import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import logo from "../assets/logo-lab3-white.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LAB<3 Development" },
    { name: "description", content: "Development Environment" },
  ];
}

export default function Home() {
  const title = "Lab<3 Development";
  return (
    <div className="screenContainer">
      <div className="bannerContainer" />
      <div className="formContainer">
        <form onSubmit={() => {}}>
          <h1>{"First Name"}</h1>
          <input
            className="field"
            type="text"
            name="query"
            placeholder="Enter first name"
          />
          <h1>{"Last Name"}</h1>
          <input
            className="field"
            type="text"
            name="query"
            placeholder="Enter last name"
          />
        </form>
        <button type="submit" className="button">
          {"Submit"}
        </button>
      </div>
    </div>
  );
}

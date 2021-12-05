import "./App.css";
import UserForm from "./components/UserForm";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>To-do app</h1>
      <UserForm />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">All Items</Link> |{" "}
        <Link to="/completed">Completed Items</Link> |{" "}
        <Link to="/incomplete">Incomplete Items</Link> |{" "}
        <Link to="/app-info">App info</Link>
      </nav>
      <Outlet />
    </div>
    //Outlet is a placeholder for the the content of the child components
  );
}

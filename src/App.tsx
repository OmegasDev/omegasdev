import React from "react";
import { Router } from "./components/Router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/services", component: ServicesPage, title: "Services" },
  { path: "/portfolio", component: PortfolioPage, title: "Portfolio" },
  { path: "/about", component: () => <div>About Page Coming Soon</div>, title: "About" },
  { path: "/contact", component: () => <div>Contact Page Coming Soon</div>, title: "Contact" }
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Router routes={routes} defaultRoute="/" />
    </div>
  );
}
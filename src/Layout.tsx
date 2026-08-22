import Footer from "./sections/footer/footer";
import { Nav } from "./components/nav/nav";
import "./Layout.scss";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <div className="app-content" id="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

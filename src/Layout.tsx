
import Footer from "./sections/footer/footer";
import Header from "./sections/header/header";
import "./Layout.css";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
    </div>
  );
}

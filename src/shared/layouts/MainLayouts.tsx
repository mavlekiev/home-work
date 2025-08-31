import { type FC, type ReactNode } from "react";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import './MainLayouts.css';
import { useTheme } from "../lib/theme/useTheme";

interface MainLayoutsProps {
  children: ReactNode;
}

export const MainLayouts: FC<MainLayoutsProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`wrapper main-layout theme-${theme}`}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}  
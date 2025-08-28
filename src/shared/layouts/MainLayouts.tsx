import { type FC, type ReactNode } from "react";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";

interface MainLayoutsProps {
  children: ReactNode;
}

export const MainLayouts: FC<MainLayoutsProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}  
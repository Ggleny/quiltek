import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

const ApplicationLayout: React.FC<ComponentProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div>
      {header ? header : <Header hasBorderBottom />}
      {children}
      {footer ? footer : <Footer />}
    </div>
  );
};

export { ApplicationLayout };

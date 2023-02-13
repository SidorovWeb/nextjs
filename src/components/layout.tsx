import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

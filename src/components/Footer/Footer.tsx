import React from "react";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <footer className={s.footer}>Footer</footer>;
};

export default Footer;

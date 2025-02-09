import { HTMLAttributes } from "react";
import { IMenuItemAsButton, IMenuItemAsLink } from "./interfaces";

export const Header = () => (
  <header style={{ background: "red", height: "100px", width: "100%" }} />
);

export const Main = () => (
  <main style={{ background: "blue", height: "1000px", width: "100%" }} />
);

export const Footer = () => (
  <footer style={{ background: "green", height: "100px", width: "100%" }} />
);

export const menuItemAsLink: IMenuItemAsLink = {
  children: "About",
  href: "/about",
};

export const menuItemAsButton: IMenuItemAsButton = {
  children: "Alert",
  onClick: () => alert("Button clicked"),
};

export const PanelTitle = () => (
  <h1 style={{ font: 'bold 1.2rem' }}>System under test</h1>
)

export const PanelText = () => (
  <p style={{ font: 'normal 1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque alias quia maxime iure? Assumenda provident ipsam corrupti tempora numquam expedita odio! Doloremque numquam aspernatur, eius ad sapiente et suscipit!</p>
)

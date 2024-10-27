import { IMenuItem, IMenuItemAsButton, IMenuItemAsLink } from "./interfaces"

export const Header = () => <header style={{ background: 'red', height: '100px', width: '100%' }} />

export const Main = () => <main style={{ background: 'blue', height: '1000px', width: '100%' }} />

export const Footer = () => <footer style={{ background: 'green', height: '100px', width: '100%' }} />

export const menuItemAsLink: IMenuItemAsLink = {
  children: 'About',
  href: '/about',
}

export const menuItemAsButton: IMenuItemAsButton = {
  children: 'Alert',
  onClick: () => alert('Button clicked')
}

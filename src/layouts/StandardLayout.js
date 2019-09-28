import React from 'react';
import '../styles/vendor/normalize.css';
import DesktopBackground from "../components/DesktopBackground"

export default function StandardLayout({ children }) {
  return <DesktopBackground>{children}</DesktopBackground>;
}
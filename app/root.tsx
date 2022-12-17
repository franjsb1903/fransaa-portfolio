import type { ReactElement } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";

import styles from "./styles/app.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fran Saa - FullStack Engineer",
  viewport: "width=device-width,initial-scale=1",
  description: "Portfolio Francisco Javier Saa Besteiro, FullStack Engineer",
  keywords: [
    "fullstack",
    "engineer",
    "developer",
    "reactjs",
    "javascript",
    "typescript",
    "portfolio",
    "nodejs",
    "python",
  ],
});

const Document = ({ children }: { children: ReactElement }) => (
  <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body className="bg-black">
      {children}
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

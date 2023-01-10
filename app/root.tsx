import type { ReactElement } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
} from "@remix-run/react";
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

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <div className="bg-white min-h-screen flex flex-col items-center px-20 md:px-40 py-20 gap-10">
        <p className="text-4xl font-extrabold text-violet-600">
          {error.status}
        </p>
        <p className="text-center text-black text-2xl">{error.statusText}</p>
        <a
          href="mailto:fjsbesteiro@outlook.es"
          className="text-violet-600 underline text-xl"
        >
          Enviar email
        </a>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <Document>
      <div className="bg-white min-h-screen flex flex-col items-center p-20 gap-10">
        <p className="text-4xl font-extrabold text-violet-600">
          {error.status}
        </p>
        <p className="text-center dark:text-white text-black text-2xl">
          {error.statusText}
        </p>
        <a
          href="mailto:fjsbesteiro@outlook.es"
          className="text-violet-600 underline text-xl"
        >
          Enviar email
        </a>
      </div>
    </Document>
  );
}

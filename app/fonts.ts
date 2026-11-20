import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

const InstrumentSerif = localFont({
  src: [
    { path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", style: "normal", weight: "400" },
    { path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", style: "italic", weight: "400" }
  ],
  variable: "--font-instrument-serif",
  display: "swap"
});

export const fontVariables = `${GeistSans.variable} ${GeistMono.variable} ${InstrumentSerif.variable}`;

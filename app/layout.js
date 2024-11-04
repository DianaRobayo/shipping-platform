import localFont from "next/font/local";
import "./globals.css";
import DataProvider from "@/context/DataProvider";
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: "Coordinadora",
  description: "Plataforma de envíos",
  manifest: '/manifest.json',
  icons: {
    apple: "/icon.png"
  },
  // themeColor: "#000000"
};

async function getTerminals() {
  const res = await fetch(`https://apiv2-test.coordinadora.com/cm-maestros-territorios-ms/api/v1/terminales`)
  return res.json();
}

export default async function RootLayout({ children }) {
  //Terminales
  const dataTerminal = await getTerminals();

  return (

    <html lang="es">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <DataProvider dataTerminal={dataTerminal}>
        <body className={` ${roboto.className}`} >
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </body>
      </DataProvider>
    </html>
  );
}


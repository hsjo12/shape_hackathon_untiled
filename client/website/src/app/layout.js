import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/texts.css";
import "../styles/buttons.css";
import "../styles/boxes.css";
import "../styles/animation.css";
import Web3Modal from "../utils/reown/web3Modal";
import { LatchContextAPI } from "../utils/contextAPI/latchContextAPI";
import { ToastContainer } from "react-toastify";
import {
  Bebas_Neue,
  Roboto,
  Cinzel,
  Cinzel_Decorative,
} from "next/font/google";
import Layout from "@/components/layout/layout";
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas_neue",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--roboto",
});
const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--cinzel_decorative",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--cinzel",
});
const cls = (...className) => {
  return className.join(" ");
};

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cls(
          bebas_neue.variable,
          roboto.variable,
          cinzel_decorative.variable,
          cinzel.variable
        )}
      >
        <Web3Modal>
          <LatchContextAPI>
            <ToastContainer
              theme="dark"
              style={{
                zIndex: 9999,
                fontSize: "17px",
              }}
            />
            <Layout>{children}</Layout>
          </LatchContextAPI>
        </Web3Modal>
      </body>
    </html>
  );
}

import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "../styles/global.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

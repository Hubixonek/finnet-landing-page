import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${plusJakartaSans.style.fontFamily};
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

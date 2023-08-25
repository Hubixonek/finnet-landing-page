import type { AppProps } from "next/app";
import { REM } from "next/font/google";
const rem = REM({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rem.style.fontFamily};
        }
        body {
          margin: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

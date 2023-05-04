import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import { domainName } from "../const/yourDetails";

const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
        <Head>
          <title>CKS - Kiwi Beta</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Kiwi creado por Cryptonikas"
          />
        </Head>

        <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

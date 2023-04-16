import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import { domainName } from "../const/yourDetails";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} authConfig={{
      domain: domainName,
      authUrl: "/api/auth",
    }}>
        <Head>
        <title>Welcome to CKS Private Area</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
         <script src="//embed.typeform.com/next/embed.js" async></script>

      </Head>
     
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

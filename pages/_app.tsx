import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { DemoPlayer } from "./dashboard/DemoPlayer";


const activeChain = "ethereum";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY || '',
  }),
});
 
const theme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};



function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThirdwebProvider activeChain={activeChain} authConfig={{
      domain: domainName,
      authUrl: "/api/auth",
    }}>
      <LivepeerConfig  client={livepeerClient} theme={theme}>
        
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
      </LivepeerConfig>

    </ThirdwebProvider>
    
  );
}

export default MyApp;

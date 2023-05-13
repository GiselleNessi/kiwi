import React, { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import { useRouter } from "next/router";
import checkBalance from "../utils/checkBalance";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  const { isLoggedIn, isLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return <Dashboard>{/* children */}</Dashboard>;
}

// This gets called on every request
export async function getServerSideProps(context: {
  req:
    | NextApiRequest
    | NextRequest
    | (IncomingMessage & { cookies: Partial<{ [key: string]: string }> });
}) {
  const user = await getUser(context.req);
  //console.log('user:', user)
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const privateKey = process.env.THIRDWEB_AUTH_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error(
      "THIRDWEB_AUTH_PRIVATE_KEY environment variable is missing"
    );
  }

  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "polygon");

  /* // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login?missingNft=true",
        permanent: false,
      },
    };
  } */

  // Finally, return the props
  return {
    props: {},
  };
}

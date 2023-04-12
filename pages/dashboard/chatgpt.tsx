import React, { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../../auth.config";
import { useRouter } from "next/router";
import checkBalance from "../../utils/checkBalance";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import Dashboard from "./dashboard";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

const pages = [
  {
    subtitle: "Introduction",
    title:
      "¿Quieres aprender cómo ser un ninja en la redacción de prompts para Chat GPT?",
    body: "¡Entonces tienes que hacer este curso! 🎉 ¡No te preocupes, te enseñaremos todo lo que necesitas saber para dominar esta tecnología impresionante! 🚀 Con nuestro curso, aprenderás a escribir prompts claros y eficaces como un verdadero ninja de la inteligencia artificial. 👨‍💻 Te enseñaremos cómo hablar con Chat GPT para obtener las respuestas que necesitas y cómo hacer que tu IA favorita trabaje para ti. 💬 ¡Así que saca tu libreta 📝, prepara tus dedos 👌 y comencemos a crear prompts increíbles juntos! 💪",
    secondTitle: "¿Por qué tomar este curso? 🧐",
    text: ""
  },
  {
    title: "Page 2",
    body: "This is the second page...",
  },
  {
    title: "Page 3",
    body: "This is the third page...",
  },
];

export default function ChatGPT() {
  const [currentPage, setCurrentPage] = useState(0);

  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    console.log("Logged out");
    router.push("/login");
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <Dashboard>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
          {pages[currentPage].subtitle}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {pages[currentPage].title}
          </h1>
          <p className="mt-6 text-xl leading-8">
          {pages[currentPage].body}
          </p>
           <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {pages[currentPage].secondTitle}
          </h1>

        </div>
      </div>


      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          onClick={() => setCurrentPage(currentPage - 1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </a>
      </div>
     
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          onClick={() => setCurrentPage(currentPage + 1)}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
    </Dashboard>
  );
}

// This gets called on every request
export async function getServerSideProps(context: {
  req:
    | NextApiRequest
    | NextRequest
    | (IncomingMessage & { cookies: Partial<{ [key: string]: string }> });
}) {
  const user = await getUser(context.req);

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

  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "ethereum");

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}

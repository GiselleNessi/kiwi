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
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

interface PageProps {
  subtitle: string;
  title: string;
  body: string;
  text: string;
}

const pages = [
  {
    subtitle: "Introduction",
    title:
      "¿Quieres aprender cómo ser un ninja en la redacción de prompts para Chat GPT?",
  },
  {
    title: "¿Por qué tomar este curso? 🧐",
  },
  {
    title: "1.¡Bienvenidos! 🤩",
  },
  {
    title: "2.Introducción 📖",
  },
];

export default function ChatGPT({ subtitle, title, body, text }: PageProps) {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);

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
          <br />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pages[currentPage].title}
          </h1>
          <br />
          {currentPage === 0 ? (
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AYq76B_7Irk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <br />
              <p className="mt-6 text-xl leading-8">
                ¿Quieres aprender cómo ser un ninja en la redacción de prompts
                para Chat GPT? 🤖 ¡Entonces tienes que hacer este curso! 🎉 ¡No
                te preocupes, te enseñaremos todo lo que necesitas saber para
                dominar esta tecnología impresionante! 🚀 Con nuestro curso,
                aprenderás a escribir prompts claros y eficaces como un
                verdadero ninja de la inteligencia artificial. 👨‍💻 Te enseñaremos
                cómo hablar con Chat GPT para obtener las respuestas que
                necesitas y cómo hacer que tu IA favorita trabaje para ti. 💬
                ¡Así que saca tu libreta 📝, prepara tus dedos 👌 y comencemos a
                crear prompts increíbles juntos! 💪
              </p>
              <br />
            </div>
          ) : null}

          {currentPage === 1 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Al aprender a utilizar ChatGPT de manera efectiva, puedes
                automatizar tareas, personalizar interacciones y manejar grandes
                volúmenes de usuarios con facilidad. Además, puedes obtener
                información valiosa de análisis para mejorar el rendimiento de
                tu negocio y aumentar tus beneficios. 💰💻
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                No subestimes el poder de un buen prompt de ChatGPT. Con la
                ayuda de este curso, podrás mejorar significativamente la
                eficacia de tus interacciones con los usuarios y ofrecer una
                experiencia increíblemente satisfactoria. ¡Tus clientes te lo
                agradecerán y tu proyecto lo notará! 🙌
              </p>
            </>
          ) : null}

          {currentPage === 2 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                ¡Bienvenido tripulante! Ya vemos que quieres ser el ninja máximo
                de ChatGPT e impresionar a tus amigos con tus habilidades en la
                creación de prompts en esta maravillosa herramienta.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                No importa si eres un novato o un maestro en el uso de ChatGPT,
                este curso tiene todo lo que necesitas para mejorar tus
                habilidades en la comunicación con IA. Aprenderás desde los
                principios más básicos hasta las técnicas avanzadas para crear
                prompts increíbles. Te enseñaremos todo lo que necesitas saber
                para llevar tu contenido a un nivel completamente nuevo.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                En las próximas lecciones, cubriremos todos los aspectos, desde
                la A hasta la Z, ¡e incluso te proporcionaremos ejemplos del
                mundo real y consejos para que puedas convertirte en un ninja de
                los prompts de ChatGPT!
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                ¡Así que empecemos! 🤖💬💻📚
              </p>
            </>
          ) : null}

          {currentPage === 3 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                ¡Hola tripulante! 👋 Cuando usamos ChatGPT por primera vez, ¡nos
                enamoramos como un adolescente en una cita a ciegas! 😍
                Estuvimos jugando con la herramienta de todas las formas
                posibles, y cada vez nos sorprendía más y más. Vimos cómo otros
                usuarios utilizaban la IA de forma creativa y descubrimos
                algunos trucos para mejorar la eficacia de los prompts: usar un
                lenguaje claro y específico 🗣️, definir objetivos claros y
                centrar la conversación 🎯.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Sabiendo esto, estuvimos trabajando con ChatGPT y aprendimos a
                interactuar con él de manera productiva para traerte los mejores
                tips y le saques el jugo a esta maravilla de la tecnología. 🚀
              </p>
            </>
          ) : null}
        </div>
      </div>

      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a
            onClick={() => setCurrentPage(currentPage - 1)}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </a>
        </div>

        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            onClick={() => setCurrentPage(currentPage + 1)}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
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

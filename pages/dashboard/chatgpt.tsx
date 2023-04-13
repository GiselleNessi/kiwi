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
  {
    title: "3.¿Qué es ChatGPT y cómo funciona? 🤖",
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
            {pages[currentPage]?.subtitle || ""}
          </p>
          <br />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pages[currentPage]?.title ?? ""}
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
              <p className="mt-6 text-xl leading-8">
                Antes de empezar, ¿sabes qué es ChatGPT? No te preocupes si no
                lo tienes muy claro, te lo contamos: ChatGPT (Generative
                Pre-trained Transformer) es un chatbot lanzado por OpenAI en
                noviembre de 2022 🗓️. Está construido sobre la familia GPT-3.5
                de OpenAI de grandes modelos de lenguaje y se ajusta con
                técnicas de aprendizaje supervisado y de refuerzo.
              </p>
              <p className="mt-6 text-xl leading-8">
                Desde su lanzamiento como prototipo, ChatGPT ha sido muy popular
                por sus respuestas detalladas y articuladas en muchos campos del
                conocimiento. Sin embargo, también ha sido criticado por su
                escasa precisión en los hechos. 🫤
              </p>
              <p className="mt-6 text-xl leading-8">
                Pero no te preocupes, ¡nosotros te enseñaremos cómo sacarle el
                máximo provecho! 🤩
              </p>
              <p className="mt-6 text-xl leading-8">
                Para tener conversaciones exitosas con ChatGPT, es clave
                utilizar prompts de alta calidad que guíen la conversación en la
                dirección correcta y cubran los temas de interés para el
                usuario. Unos prompts bien definidos pueden hacer la diferencia
                entre una conversación informativa y atractiva, y una
                conversación aburrida y desenfocada.
              </p>
              <p className="mt-6 text-xl leading-8">
                Pero ¿qué es un prompt? 🤔
              </p>
              <p className="mt-6 text-xl leading-8">
                Un prompt es básicamente una sugerencia o instrucción que le das
                a una IA como ChatGPT para que te proporcione una respuesta o te
                genere un texto. Es como darle una tarea a tu asistente virtual,
                pero en lugar de pedirle que te traiga un café ☕, le pides que
                escriba un ensayo sobre la importancia del café en la vida
                moderna. ¡Sí, es así de poderoso! 💪 Es como tener un robot con
                un cerebro gigante 🤖 que puede ayudarte a crear contenido,
                responder preguntas o incluso a jugar a juegos de rol 🎲.
              </p>
              <p className="mt-6 text-xl leading-8">
                Además de su capacidad para comprender y responder al lenguaje
                natural, ChatGPT también tiene muchas otras características que
                lo convierten en una herramienta poderosa para conducir
                conversaciones. Por ejemplo, puede personalizarse para adaptarse
                a las necesidades y preferencias del usuario, y puede utilizar
                algoritmos de aprendizaje automático para personalizar sus
                respuestas basándose en las interacciones y preferencias
                anteriores del usuario. ¡Increíble! 😍
              </p>
              <p className="mt-6 text-xl leading-8">
                Y eso no es todo, ChatGPT también es capaz de entender y
                responder a entradas en varios idiomas y puede manejar grandes
                volúmenes de tráfico. ¡Es la herramienta perfecta para el
                servicio de atención al cliente o las comunidades en línea! 🌎💬
              </p>
              <p className="mt-6 text-xl leading-8">
                En este curso, aprenderás los principios de la comunicación
                clara y cómo aplicarlos a los prompts de ChatGPT. También te
                daremos una guía paso a paso sobre cómo hacerlos más eficaces
                para que conduzcan a conversaciones atractivas e informativas. Y
                si ya eres un usuario experimentado, te enseñaremos algunos
                trucos para llevar tus habilidades al siguiente nivel. 🚀
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Estás listo para empezar? ¡Vamos! 💪
              </p>
              <p className="mt-6 text-xl leading-8">
                Tarea 1: Entra a la plataforma de ChatGPT. Dale clic a este link
                👉 https://chat.openai.com/chat
              </p>
            </>
          ) : null}

          {currentPage === 4 ? (
            <>
              <p className="mt-6 text-xl leading-8">
              Ahora que ya tienes una idea general de ChatGPT y sus posibilidades, vamos a profundizar un poco más en qué es ChatGPT y cómo funciona.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Sabiendo esto, estuvimos trabajando con ChatGPT y aprendimos a
                interactuar con él de manera productiva para traerte los mejores
                tips y le saques el jugo a esta maravilla de la tecnología. 🚀
              </p>
              <p className="mt-6 text-xl leading-8">
                Antes de empezar, ¿sabes qué es ChatGPT? No te preocupes si no
                lo tienes muy claro, te lo contamos: ChatGPT (Generative
                Pre-trained Transformer) es un chatbot lanzado por OpenAI en
                noviembre de 2022 🗓️. Está construido sobre la familia GPT-3.5
                de OpenAI de grandes modelos de lenguaje y se ajusta con
                técnicas de aprendizaje supervisado y de refuerzo.
              </p>
              <p className="mt-6 text-xl leading-8">
                Desde su lanzamiento como prototipo, ChatGPT ha sido muy popular
                por sus respuestas detalladas y articuladas en muchos campos del
                conocimiento. Sin embargo, también ha sido criticado por su
                escasa precisión en los hechos. 🫤
              </p>
              <p className="mt-6 text-xl leading-8">
                Pero no te preocupes, ¡nosotros te enseñaremos cómo sacarle el
                máximo provecho! 🤩
              </p>
              <p className="mt-6 text-xl leading-8">
                Para tener conversaciones exitosas con ChatGPT, es clave
                utilizar prompts de alta calidad que guíen la conversación en la
                dirección correcta y cubran los temas de interés para el
                usuario. Unos prompts bien definidos pueden hacer la diferencia
                entre una conversación informativa y atractiva, y una
                conversación aburrida y desenfocada.
              </p>
              <p className="mt-6 text-xl leading-8">
                Pero ¿qué es un prompt? 🤔
              </p>
              <p className="mt-6 text-xl leading-8">
                Un prompt es básicamente una sugerencia o instrucción que le das
                a una IA como ChatGPT para que te proporcione una respuesta o te
                genere un texto. Es como darle una tarea a tu asistente virtual,
                pero en lugar de pedirle que te traiga un café ☕, le pides que
                escriba un ensayo sobre la importancia del café en la vida
                moderna. ¡Sí, es así de poderoso! 💪 Es como tener un robot con
                un cerebro gigante 🤖 que puede ayudarte a crear contenido,
                responder preguntas o incluso a jugar a juegos de rol 🎲.
              </p>
              <p className="mt-6 text-xl leading-8">
                Además de su capacidad para comprender y responder al lenguaje
                natural, ChatGPT también tiene muchas otras características que
                lo convierten en una herramienta poderosa para conducir
                conversaciones. Por ejemplo, puede personalizarse para adaptarse
                a las necesidades y preferencias del usuario, y puede utilizar
                algoritmos de aprendizaje automático para personalizar sus
                respuestas basándose en las interacciones y preferencias
                anteriores del usuario. ¡Increíble! 😍
              </p>
              <p className="mt-6 text-xl leading-8">
                Y eso no es todo, ChatGPT también es capaz de entender y
                responder a entradas en varios idiomas y puede manejar grandes
                volúmenes de tráfico. ¡Es la herramienta perfecta para el
                servicio de atención al cliente o las comunidades en línea! 🌎💬
              </p>
              <p className="mt-6 text-xl leading-8">
                En este curso, aprenderás los principios de la comunicación
                clara y cómo aplicarlos a los prompts de ChatGPT. También te
                daremos una guía paso a paso sobre cómo hacerlos más eficaces
                para que conduzcan a conversaciones atractivas e informativas. Y
                si ya eres un usuario experimentado, te enseñaremos algunos
                trucos para llevar tus habilidades al siguiente nivel. 🚀
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Estás listo para empezar? ¡Vamos! 💪
              </p>
              <p className="mt-6 text-xl leading-8">
                Tarea 1: Entra a la plataforma de ChatGPT. Dale clic a este link
                👉 https://chat.openai.com/chat
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

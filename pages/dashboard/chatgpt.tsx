import React, { useEffect, useState } from "react";
import {
  ThirdwebNftMedia,
  Web3Button,
  useContract,
  useNFT,
  useUser,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import chatgptOne from "../../public/1.png";
import chatgptTwo from "../../public/2.png";
import chatgptThree from "../../public/3.png";
import chatgptFour from "../../public/4.png";
import Image from "next/image";

interface PageProps {
  subtitle: string;
  title: string;
  body: string;
  text: string;
}

const pages = [
  {
    subtitle: "Introducción",
    title:
      "¿Quieres aprender cómo ser un ninja en la redacción de prompts para Chat GPT?",
  },
  {
    title: "1. ¡Bienvenidos! 🤩",
  },
  {
    title: "2. Introducción 📖",
  },
  {
    title: "3. ¿Qué es ChatGPT y cómo funciona? 🤖",
  },
  {
    title: "4. ¿Cómo los prompts impulsan tus chats con Chat GPT? 🚀💬",
  },
  {
    title:
      "5. Consejos para evitar la confusión y el lenguaje técnico en ChatGPT",
  },
  {
    title:
      "6. ¡Haz que ChatGPT te entienda! Aprende a crear mensajes efectivos con estos consejos 🤖💬",
  },
  {
    title:
      "7. ¡No te equivoques! Evita estos errores al crear mensajes con ChatGPT 🚫🤖 ",
  },
  {
    title: "8. ¿Algo no funciona en ChatGPT? 🤖🕵️‍♂️💻",
  },
  {
    title: "9. Ejercicios",
  },
  {
    title: "10. ¡Felicidades, completaste el curso! 🥳",
  },
  {
    title: "11. Tarea final 🤓",
  },
  {
    title: "¡Felicidades! Has terminado el curso de ChatGPT.",
  },
];


export default function ChatGPT() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 13; // replace with the total number of pages
  //console.log(currentPage);

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  //web3button
  const tokenId = 0; // the id of the NFT you want to claim
  const quantity = 1; // how many NFTs you want to claim

  const { contract } = useContract(
    "0x47DA47429F0127EDd178cc36ebDEc58874310220"
  );
  const { data: nft, error } = useNFT(contract, "0");

  const { isLoggedIn, isLoading, user } = useUser();
  
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (error || !nft) return <div>Loading...</div>;

  return (
    <Dashboard>
      {/* Progress Bar */}
      <div>
        <div className="w-full bg-gray-200 h-1 mt-2">
          <div
            className="bg-green-500 h-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {Math.round(progressPercentage)}% Completado
        </p>
      </div>
      <div className="bg-white px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-green-500">
            {pages[currentPage]?.subtitle || ""}
          </p>
          <br />
          {currentPage === 0 ? (
            <div
              className="relative mt-6 mb-6"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src="https://lvpr.tv?v=bb696iluhg7rdync"
                allowFullScreen
                allow="encrypted-media; picture-in-picture"
                sandbox="allow-scripts"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          ) : null}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pages[currentPage]?.title ?? ""}
          </h1>
          <br />
          {currentPage === 0 ? (
            <div>
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Por qué tomar este curso? 🧐
              </h1>
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
              <br />
            </div>
          ) : null}

          {currentPage === 1 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                ¡Bienvenido Cosmonauta! 🧑‍🚀👩‍🚀 Ya vemos que quieres ser el ninja
                máximo de ChatGPT e impresionar a tus amigos con tus habilidades
                en la creación de prompts en esta maravillosa herramienta.
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

          {currentPage === 2 ? (
            <>
              <Image
                src={chatgptOne}
                alt="Logo"
                width={600}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />

              <p className="text-xl leading-8 mt-6">
                ¡Hola Cosmonauta! 👋 Cuando usamos ChatGPT por primera vez, ¡nos
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

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=f96c3fqqjz5iqll3"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

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
                <strong>
                  Tarea 1: Entra a la plataforma de ChatGPT. Dale clic a este
                  link 👉{" "}
                  <a
                    href="https://chat.openai.com/chat"
                    target="_blank"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    https://chat.openai.com/chat
                  </a>
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 3 ? (
            <>
              <p className="mt-6 text-xl leading-8 mt-6">
                Ahora que ya tienes una idea general de ChatGPT y sus
                posibilidades, vamos a profundizar un poco más en qué es ChatGPT
                y cómo funciona.
              </p>
              <p className="mt-6 text-xl leading-8">
                Para empezar, ChatGPT es una herramienta súper chévere que
                utiliza algoritmos de aprendizaje automático para generar
                respuestas a partir de texto introducido por el usuario. 🤖
              </p>
              <p className="mt-6 text-xl leading-8">
                El proceso es muy sencillo: tú introduces tu texto, ChatGPT lo
                analiza, genera una respuesta y te la devuelve en forma de
                texto. Y si tú quieres seguir conversando, puedes introducir más
                texto y ChatGPT te seguirá respondiendo. 🤗
              </p>
              <p className="mt-6 text-xl leading-8">
                Pero ojo, no todo depende del chatbot. También es importante que
                las indicaciones que uses para iniciar y guiar la conversación
                sean claras y efectivas. ¡Así nos aseguramos de que la
                conversación sea interesante y útil! 😎
              </p>
              <p className="mt-6 text-xl leading-8">
                Ahora bien, ¿en qué se diferencia ChatGPT de otros chatbots?
                ¡Aquí viene lo bueno! 😏 ChatGPT tiene una capacidad de
                aprendizaje súper impresionante gracias a los algoritmos de
                aprendizaje automático. Esto significa que puede mejorar sus
                respuestas basándose en conversaciones anteriores, ¡como si
                fuera un humano! 💪
              </p>
              <p className="mt-6 text-xl leading-8">
                Además, puede entender el contexto y responder a conversaciones
                más complejas o abiertas, lo que lo hace una herramienta súper
                poderosa para mantener conversaciones interesantes e
                informativas. 💬
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>¿Para qué puedes usar ChatGPT?</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Te contamos algunos de los usos más divertidos y útiles de esta
                herramienta 🔍🤖
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=5470w5nt8fr31mii"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                📞 Atención al cliente: ¿Necesitas ayuda para comprar esos
                zapatos que tanto quieres en la tienda en línea a altas horas de
                la noche? ¡No hay problema! ChatGPT está disponible las 24 horas
                del día, los 7 días de la semana para ayudarte a resolver
                cualquier problema que tengas.
              </p>
              <p className="mt-6 text-xl leading-8">
                🎓Educación: ¿No entiendes un tema en la escuela o necesitas
                ayuda para estudiar para un examen? ¡ChatGPT es tu tutor
                personal! Pregúntale lo que quieras sobre matemáticas, historia
                o cualquier otra materia y te ayudará a comprender todo.
              </p>
              <p className="mt-6 text-xl leading-8">
                📺 Suministro de información: ¿Necesitas definir una teoría o
                saber las estadísticas de población de un país? ¡Pregúntale a
                ChatGPT! Él siempre está listo para darte la información que
                necesitas. 🌞🌎 Sólo ten en cuenta que ChatGPT ha sido
                alimentado con hechos hasta el año 2021. Así que si necesitas
                saber lo que pasó ayer, mejor ve a Google.
              </p>
              <p className="mt-6 text-xl leading-8">
                📅 Asistente personal: ¿Te sientes abrumado/a con tu lista de
                tareas pendientes? ¡No te preocupes! ChatGPT puede ayudarte a
                organizar tus citas, recordarte tus reuniones importantes y más.
                Es como tener un asistente personal a tu disposición.
              </p>
              <p className="mt-6 text-xl leading-8">
                🗣 Interacción social: ¿Te sientes solo/a y necesitas alguien con
                quien hablar? ChatGPT está aquí para hacer que tu día sea más
                entretenido y emocionante. Puedes preguntarle sobre películas,
                chistes o simplemente charlar sobre la vida. ¡Seguro que no te
                aburrirás! 😊
              </p>
              <p className="mt-6 text-xl leading-8">
                Así que, ¿estás listo para sacarle el máximo provecho a ChatGPT?
                ¡En los próximos capítulos exploraremos cómo elaborar mensajes
                claros y eficaces para tener las mejores conversaciones! 😎
              </p>
            </>
          ) : null}

          {currentPage === 4 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                💬 Como ya hemos explicado, los prompts son la clave para tener
                una conversación exitosa con Chat GPT. Si les das una buena
                indicación, el chat fluirá como la seda y tendrás una
                experiencia divertida y súper informativa. Pero, ¿qué es un buen
                prompt de ChatGPT y cómo se pueden crear indicaciones efectivas
                que conduzcan a conversaciones interesantes?
              </p>
              <br />

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=f02543829ml8u8zz"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                Pues bien, hay algunos principios clave que debes tener en
                cuenta. Primero, ¡la claridad es fundamental! Asegúrate de que
                tus indicaciones sean claras y concisas para que ChatGPT
                entienda lo que quieres. No uses lenguaje complejo o ambiguo y
                sé específico en tus preguntas.{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                En segundo lugar, ¡enfócate! Tu pregunta debe tener un propósito
                claro que guíe la conversación en la dirección correcta. Evita
                las preguntas demasiado amplias o abiertas que puedan llevarte
                por un camino sin rumbo fijo.
              </p>
              <p className="mt-6 text-xl leading-8">
                Y por último, ¡asegúrate de que tus preguntas sean relevantes!
                No te salgas del tema y evita hablar de cosas que no tienen nada
                que ver con la conversación. ¡No queremos distraer a ChatGPT de
                lo importante!{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Descubre ejemplos de mensajes de ChatGPT que funcionan 👍 (y
                  los que no 👎)
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Vamos a empezar con los buenos. ¿Quieres conocer algunos
                mensajes que funcionan como un cohete 🚀? Aquí tienes algunos
                ejemplos:
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  &rdquo;¿Puedes resumir los beneficios del yoga para la
                  salud?&rdquo;
                </strong>{" "}
                - Una pregunta específica y centrada que permite al ChatGPT
                proporcionar una respuesta útil y precisa.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  &rdquo;¿Cómo puedo mejorar mi habilidad para hacer
                  malabares?&rdquo;{" "}
                </strong>{" "}
                - Una pregunta bien definida y relevante que permite al ChatGPT
                ofrecer consejos y técnicas útiles para mejorar la habilidad en
                esta divertida actividad.
              </p>

              <p className="mt-6 text-xl leading-8">
                ¡Pero cuidado! 👀 No todos los mensajes son iguales de
                efectivos. Aquí tienes algunos ejemplos de mensajes ineficaces:
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  &rdquo;¿Qué me puedes decir sobre el universo?&rdquo;{" "}
                </strong>{" "}
                - Una pregunta demasiado amplia y abierta que dificulta al
                ChatGPT proporcionar una respuesta útil y específica.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>&rdquo;¿Puedes ayudarme con mi tarea?&rdquo;</strong> -
                Una pregunta demasiado abierta que no especifica qué tarea es,
                lo que dificulta al ChatGPT proporcionar una respuesta precisa y
                útil. Una mejor pregunta sería especificar el tema o la tarea en
                cuestión.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>&rdquo;¿Cómo estás?&rdquo;</strong> - Aunque es una
                pregunta amable, no tiene un propósito claro y no ofrece una
                dirección específica para la conversación.
              </p>
              <p className="mt-6 text-xl leading-8 mb-6">
                Con estos ejemplos, puedes ver claramente cómo los principios de
                claridad, enfoque y relevancia son importantes para crear
                mensajes de ChatGPT eficaces. Si sigues estos principios, podrás
                crear prompts efectivos que lleven a conversaciones divertidas e
                informativas. En los próximos capítulos, profundizaremos más
                sobre este tema y exploraremos técnicas específicas para crear
                prompts claros y concisos. ¡A chatear se ha dicho! 💬💪{" "}
              </p>
              <Image
                src={chatgptTwo}
                alt="Logo"
                width={600}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />

              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea 2: Escribe 2 preguntas a ChatGPT siguiendo los
                  principios de claridad, enfoque y relevancia. Sé creativo y
                  original 🤪, queremos que te diviertas haciéndolo. Cuando
                  termines, haz un screenshot a tu pantalla y súbelo a Twitter
                  etiquetando a @CryptonikasDAO y poniendo el hashtag
                  #Kiwitonikas. Haremos un ranking con las mejores respuestas,
                  ¿listx para conquistar el primer lugar? 🏆.
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 5 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Como ya vimos en la lección anterior, si quieres crear mensajes
                para ChatGPT que causen impacto y generen conversaciones
                interesantes e informativas, tienes que conocer estos principios
                de comunicación clara: Claridad, Enfoque y Relevancia.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                En esta lección te enseñaremos técnicas que te ayudarán a
                aplicar estos principios para crear prompts efectivos y lograr
                tus objetivos.
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=a508pzq661okvwmp"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                🎯 Define el propósito y el enfoque de la conversación. ¿Quieres
                responder una pregunta, proporcionar información o simplemente
                charlar? ¡Define tu objetivo y enfoque antes de empezar a
                escribir para que tu prompt sea específico y relevante!
              </p>
              <p className="mt-6 text-xl leading-8">
                💬 Utiliza un lenguaje claro y coherente. Usa palabras que
                ChatGPT pueda entender fácilmente y evita el lenguaje ambiguo o
                la jerga que puedan causar confusiones o malentendidos. Sé claro
                y conciso en tu mensaje.
              </p>
              <p className="mt-6 text-xl leading-8">
                ❌ Evita preguntas abiertas o demasiado amplias. Aunque puedes
                sentir la tentación de hacer preguntas abiertas para obtener
                respuestas más completas, esto puede desencadenar conversaciones
                caóticas y sin rumbo. En cambio, trata de ser lo más específico
                posible en tus preguntas, definiendo claramente un objetivo y
                centro de atención para la conversación.
              </p>
              <p className="mt-6 text-xl leading-8">
                🧵 Mantén el hilo de la conversación. Evita introducir temas no
                relacionados y enfócate en el tema principal de la conversación.
                Si sigues el hilo de la conversación, estarás seguro de cubrir
                los temas que interesan al usuario y brindar información útil y
                relevante.
              </p>

              <Image
                src={chatgptThree}
                alt="Logo"
                width={600}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <p className="mt-6 text-xl leading-8 mt-6">
                <strong>
                  Consejos para evitar la confusión y el lenguaje técnico en
                  ChatGPT
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Si quieres que tus mensajes ChatGPT sean tan claros como el
                agua, evita la jerga y la ambigüedad. La jerga puede ser como un
                enigma para algunos usuarios, mientras que la ambigüedad puede
                desatar una tormenta de malentendidos.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Aquí te van unos consejos para que tus mensajes sean tan
                  nítidos como la imagen en un día soleado:
                </strong>
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=4b78phhz6cp1ac96"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                👉 Define la jerga o términos técnicos que necesitas utilizar.
                ¡No des por hecho que todos saben lo que significan tus palabras
                &rdquo;fancy&rdquo;! Proporciona definiciones claras y
                explicaciones para que nuestro amigo robótico y tu estén en la
                misma página.
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 Evita el lenguaje ambiguo. Si tus palabras pueden ser
                interpretadas de varias maneras, es mejor que las reescribas
                para evitar confusiones. Sé lo más específico posible y evita
                las palabras o frases que tengan múltiples significados.
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 Habla claro y conciso. No te andes con rodeos y ve al grano.
                Usa palabras y frases sencillas y fáciles de entender para que
                tus mensajes sean claros y no se desvíen del tema principal.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Ojo! Si no sigues estos consejos, puedes terminar con un
                mensaje como este:
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  &rdquo;Hey ChatGPT, ¿me puedes explicar los últimos chismes de
                  la web? Estoy tratando de estar al día con el
                  &rdquo;hype&rdquo;.{" "}
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Este mensaje es una mezcla de jerga y ambigüedad. Palabras como
                &rdquo;hype&rdquo; o &rdquo;chismes de la web&rdquo; pueden ser
                confusas, y el término &rdquo;últimos chismes&rdquo; es
                demasiado vago. Así que, ¡a reescribir!
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Por ejemplo, qué tal si dices algo como: </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  &rdquo;¡Hola ChatGPT! ¿Podrías decirme cuál es el último
                  gadget tecnológico que ha causado revuelo en la web? ¡Estoy
                  emocionado por conocer las novedades!&rdquo;{" "}
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Este mensaje es claro y conciso, sin jerga ni ambigüedad. Se
                solicita una información específica y se usa un lenguaje
                sencillo y fácil de entender. Recuerda que la claridad en tus
                mensajes es fundamental para que tus ideas lleguen de forma
                efectiva a tus interlocutores y se eviten confusiones o
                malentendidos.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea 3: Pongámonos filosóficos. Escribe una pregunta más
                  compleja a ChatGPT, algo que lo ponga a reflexionar. Recuerda
                  usar palabras que el bot entienda, guarda tu vocabulario
                  lujoso para la cena con tus suegros 🤣. ¡Sé creativo!. Cuando
                  termines, haz un screenshot a tu pantalla y súbelo a Twitter
                  etiquetando a @CryptonikasDAO y poniendo el hashtag
                  #Kiwitonikas. Recuerda que haremos un ranking con las mejores
                  respuestas, ¿será que tus respuestas son lo suficientemente
                  divertidas para estar el top?.
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 6 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Ya que hemos explorado los principios de la elaboración de
                mensajes de ChatGPT claros y concisos y la importancia de evitar
                la jerga y la ambigüedad, vamos a profundizar en un proceso
                específico para la elaboración de mensajes eficaces.
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                <strong>Un ejemplo:</strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Define el propósito y el enfoque de la conversación:{" "}
                <strong>
                  ¡Quiero hacer una fiesta épica de cumpleaños virtual para mi
                  mejor amiga! ¿Qué puedo hacer para que sea la mejor fiesta
                  virtual de todos los tiempos?
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Elige un lenguaje específico y pertinente:{" "}
                <strong>
                  &rdquo;Hola, ChatGPT, necesito ayuda para planear una fiesta
                  virtual increíble de cumpleaños para mi mejor amiga. ¿Podrías
                  recomendarme algunas ideas divertidas para juegos en línea,
                  decoraciones virtuales y actividades para hacer con amigos de
                  forma remota?&rdquo;.
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Evita preguntas abiertas o demasiado amplias: Esta pregunta es
                específica y limita el tema de la conversación a una fiesta
                virtual de cumpleaños. De esta manera, se evita cualquier
                conversación aleatoria o desenfocada.
              </p>
              <p className="mt-6 text-xl leading-8">
                Repasa y revisa tu pregunta: Una vez revisada, si la pregunta es
                clara y fácil de entender, y se centra en el tema específico de
                la fiesta virtual de cumpleaños, ¡Está lista para ser enviada a
                ChatGPT!
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea 4: Con estos pasos, estamos seguros de que podrás crear
                  mensajes efectivos y obtener la respuesta que necesitas de
                  ChatGPT. ¡Es hora de planear una fiesta increíble! 🥳🎉. Usa
                  el prompt del ejemplo para que veas las respuestas increíbles
                  que te dará nuestro amigo inteligente. No es necesario que
                  tomes un screenshot, sólo diviértete.
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Aprende cómo dirigir tus conversaciones en la dirección
                  correcta con estas buenas prácticas 🗣️💬{" "}
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Te presentamos las mejores prácticas para llevar tus charlas con
                CahtGPT al siguiente nivel para que tengas conversaciones
                épicas:
              </p>
              <p className="mt-6 text-xl leading-8">
                Comencemos con una pregunta clara y sencilla. ¡Nada de rodeos!
                Una buena pregunta es la clave para que la conversación se
                mantenga en el camino correcto. No queremos que ChatGPT se
                desvíe y empiece a hablar de la vida extraterrestre, ¿verdad? 👽
              </p>
              <p className="mt-6 text-xl leading-8">
                Anima a ChatGPT a que nos cuente más. Aunque él ya sabe mucho,
                nunca está de más preguntarle por detalles específicos.
                Pregúntale cosas como &rdquo;¿y luego qué pasó?&rdquo; o
                &rdquo;¿me lo puedes explicar más detalladamente?&rdquo;. Seguro
                que su respuesta será ¡increíble! 🤩
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Cuidado con el tono y el lenguaje! No queremos ofender a
                ChatGPT con un lenguaje vulgar o despectivo. Tampoco queremos
                que se aburra con un lenguaje muy formal. ¡Mantengamos el
                equilibrio perfecto! 🤝
              </p>
              <p className="mt-6 text-xl leading-8">
                Si la conversación se va por las ramas, no hay problema.
                ¡Estamos aquí para solucionarlo! Si ChatGPT se sale del tema,
                podemos utilizar preguntas de seguimiento o ejemplos para que
                vuelva al camino correcto. ¡El rumbo lo marcamos nosotros! 🙌
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>El truco &rdquo;Actúa como...&rdquo; </strong>
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=9fealiajlt0dxsd6"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                ¡Aquí te presento un truco que te encantará! Se llama
                &rdquo;Actúa como&rdquo; y te permite indicar al ChatGPT que
                asuma un papel o personaje específico en la conversación. ¿No es
                eso genial? 🤩
              </p>
              <p className="mt-6 text-xl leading-8">
                Por ejemplo, ¿quieres que el ChatGPT actúe como un agente de
                viajes y te recomiende algunos destinos de vacaciones
                impresionantes? ¡Solo díselo! ¿O prefieres que actúe como un
                detective y resuelva un crimen ficticio contigo? ¡Las
                posibilidades son infinitas! 🕵️‍♀️🌴
              </p>
              <p className="mt-6 text-xl leading-8">
                Para usar este truco, solo necesitas incluir la frase
                &rdquo;actuar como&rdquo; seguida de una descripción del papel o
                personaje que quieres que el ChatGPT asuma en la conversación.
              </p>
              <p className="mt-6 text-xl leading-8">
                Por ejemplo:{" "}
                <strong>
                  &rdquo;Actúa como una consola javascript. Yo te escribiré
                  comandos y tú responderás con lo que la consola javascript
                  debería mostrar. ¡Solo quiero ver la salida del terminal
                  dentro de un bloque de código único, nada de explicaciones ni
                  comandos extras!&rdquo;
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                En este ejemplo,{" "}
                <strong>
                  &rdquo;actuar como una consola javascript&rdquo;
                </strong>{" "}
                indica al ChatGPT que asuma el papel de una consola javascript
                en la conversación. Luego, las instrucciones indican que el
                usuario escribirá comandos y el ChatGPT responderá con la salida
                del terminal en un bloque de código único, sin explicaciones ni
                comandos adicionales. ¡Así de fácil! 👌
              </p>
              <p className="mt-6 text-xl leading-8">
                Te damos otro ejemplo para que prepares una rica comida:{" "}
                <strong>
                  &rdquo;Quiero que actúes como un chef de cocina. Quiero que me
                  des una receta original de un plato que tenga como ingrediente
                  principal el 🥦. Asegúrate de incluir todos los pasos
                  necesarios y los ingredientes adicionales que sean necesarios.
                  No te olvides de decorar el plato para que sea vistoso. Cuando
                  necesites que te proporcione una cantidad específica de un
                  ingrediente, simplemente dímelo. ¡A cocinar se ha dicho!
                  👨‍🍳🍴&rdquo;
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Ahora, te explicamos cada instrucción de forma detallada:
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;Quiero que actúes como un chef de cocina&rdquo;: Esta es
                la instrucción principal que indica al ChatGPT que asuma el
                papel de un chef de cocina en la conversación.
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;Quiero que me des una receta original de un plato que
                tenga como ingrediente principal el 🥦&rdquo;: Esta instrucción
                especifica que el usuario desea recibir una receta de cocina
                original que contenga el 🥦 como ingrediente principal. La
                inclusión de emojis agrega un toque divertido y visual a la
                conversación.
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;Asegúrate de incluir todos los pasos necesarios y los
                ingredientes adicionales que sean necesarios&rdquo;: Esta
                instrucción proporciona una guía para el ChatGPT de lo que se
                espera en la respuesta, que es una receta completa que incluya
                todos los pasos necesarios y los ingredientes adicionales
                necesarios para el plato.
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;No te olvides de decorar el plato para que sea
                vistoso&rdquo;: Esta instrucción indica que el usuario desea que
                el ChatGPT proporcione instrucciones sobre cómo decorar el plato
                para que sea visualmente atractivo.
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;Cuando necesites que te proporcione una cantidad
                específica de un ingrediente, simplemente dímelo&rdquo;: Esta
                instrucción proporciona al ChatGPT la libertad de solicitar más
                información al usuario en caso de que sea necesario, en caso de
                que se necesite una cantidad específica de un ingrediente y no
                esté explícitamente indicado en la pregunta original.
              </p>
              <p className="mt-6 text-xl leading-8">
                &rdquo;¡A cocinar se ha dicho! 👨‍🍳🍴&rdquo;: Esta es una
                declaración divertida y animada que transmite entusiasmo y
                energía para comenzar a cocinar.
              </p>
              <p className="mt-6 text-xl leading-8">
                Recuerda que también puedes usar el truco{" "}
                <strong>
                  &rdquo;Actúa como&rdquo; en combinación con otros trucos y
                  técnicas para hacer que tus conversaciones en ChatGPT sean aún
                  más divertidas y efectivas. ¡Atrévete a probarlo y diviértete!
                  🤗.
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                En los siguientes capítulos, exploraremos algunas técnicas
                avanzadas para crear mensajes eficaces y solucionar problemas
                comunes.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea 5: Usa el truco &rdquo;actúa como&rdquo; en ChatGPT.
                  Puedes pedirle que te responda como un personaje ficticio o
                  que te responda como un profesional en cualquier área. Las
                  posibilidades son infinitas, pero queremos ver qué tan
                  creativo puedes ser. Cuando termines, haz un screenshot a tu
                  pantalla y súbelo a Twitter etiquetando a @CryptonikasDAO y
                  poniendo el hashtag #Kiwitonikas. Estamos acercándonos al
                  final del curso, si aún no has entrado en el top del ranking,
                  éste es tu momento.
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 7 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Sabemos que no es fácil crear prompts efectivos en ChatGPT,
                después de todo, estamos hablando de enseñar a una inteligencia
                artificial cómo comunicarse con los humanos. Aunque es una
                herramienta poderosa, hay algunos errores comunes que debes
                evitar para asegurarte de que tus prompts sean claros, concisos
                y efectivos. ¡No te preocupes! En esta clase, te daremos algunos
                consejos para que logres este objetivo.
              </p>
              <br />

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=cb79lhw05qt06cn3"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <ul className="list-disc">
                <li className="mt-6 text-xl leading-8">
                  No te emociones y no te pases con la información. Proporciona
                  la cantidad justa de detalles para que ChatGPT comprenda el
                  contexto y propósito de la conversación. ¡No lo satures! 😵
                </li>
                <li className="mt-6 text-xl leading-8">
                  Usa un lenguaje claro y fácil de entender, ¡no seas un pesado
                  usando jerga o lenguaje ambiguo! 💬😒
                </li>
                <li className="mt-6 text-xl leading-8">
                  ¡Nada de vaguedades! Si quieres respuestas concretas,
                  asegúrate de proporcionar suficiente contexto y orientación
                  para que ChatGPT no se pierda en la conversación. 🤔🔍
                </li>
                <li className="mt-6 text-xl leading-8">
                  No olvides ser consciente de las capacidades y limitaciones de
                  ChatGPT. No le pidas que haga cosas fuera de su alcance y
                  prepárate para ajustar tus indicaciones si es necesario.
                </li>
                <li className="mt-6 text-xl leading-8">
                  No te olvides de dar instrucciones claras y especificar las
                  restricciones si las hay. Si quieres que ChatGPT interprete un
                  personaje específico, ¡díselo de una vez! 🎭📚
                </li>
                <li className="mt-6 text-xl leading-8">
                  Por último, prueba y depura tus instrucciones para asegurarte
                  de que sean claras y eficaces 🧹. Si algo no funciona,
                  reinicia el hilo y empieza de nuevo.
                </li>
              </ul>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  ¿Cómo evitar las preguntas abiertas y la sobrecarga de
                  información en ChatGPT? 🤔🙅‍♀️
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡No te sientas abrumado al crear preguntas para ChatGPT! Sabemos
                que es fácil perderse en los detalles y terminar con una
                pregunta demasiado larga o compleja, ¡pero no temas! Aquí te
                dejamos algunas técnicas divertidas para evitar preguntas
                abiertas y proporcionar la información necesaria de manera clara
                y concisa. 🤖👌
              </p>
              <p className="mt-6 text-xl leading-8">
                En lugar de preguntar &rdquo;¿Qué piensas de los
                unicornios?&rdquo;, intenta ser más específico y preguntar
                &rdquo;¿Crees que los unicornios podrían ser una buena
                mascota?&rdquo;. De esta manera, obtendrás una respuesta más
                concreta y podrás seguir avanzando en la conversación.
              </p>
              <p className="mt-6 text-xl leading-8">
                Además, no te pierdas en la información superflua y cíñete a lo
                esencial. A nadie le gusta un discurso interminable, ¡ni
                siquiera a ChatGPT! 😅
              </p>
              <p className="mt-6 text-xl leading-8">
                Finalmente, utiliza un lenguaje claro y sencillo. ¡Evita la
                jerga y los tecnicismos! Piensa en ChatGPT como tu amigo más
                joven o tu abuelita, a quienes siempre debes explicar las cosas
                de manera simple y fácil de entender.🧑👵
              </p>
              <p className="mt-6 text-xl leading-8">
                Con estos consejos no perderás el hilo de tus conversaciones con
                esta increíble herramienta.
              </p>
            </>
          ) : null}

          {currentPage === 8 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>Problemas más comunes</strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Es normal que surjan problemas con esta herramienta, por eso te
                dejamos una lista de los problemas más comunes y cómo evitarlos
                para que tu conversación fluya de manera natural y sin problemas
                👍
              </p>
              <br />

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=7ddddoszmu8yfmrs"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <ul className="list-disc">
                <li className="mt-6 text-xl leading-8">
                  El ChatGPT no entiende tu solicitud o te da una respuesta poco
                  relacionada o inapropiada 🤷‍♂️- Esto puede suceder si no eres
                  claro en tu solicitud, usas jerga o lenguaje que ChatGPT no
                  conoce o no proporcionas suficiente contexto. ¡Recuerda que
                  ChatGPT no es adivino!
                </li>
                <li className="mt-6 text-xl leading-8">
                  El ChatGPT te da una respuesta genérica o poco informativa 😕-
                  Esto puede suceder si tu pregunta es demasiado amplia o no
                  proporcionas suficiente información sobre el tema. ¡Sé
                  específico y detallado en tu solicitud!
                </li>
                <li className="mt-6 text-xl leading-8">
                  El ChatGPT no sigue las instrucciones o restricciones de tu
                  solicitud 🤔- Esto puede suceder si no eres claro en tus
                  instrucciones o si son inconsistentes con la conversación en
                  general. ¡Asegúrate de ser claro y consistente!
                </li>
                <li className="mt-6 text-xl leading-8">
                  El ChatGPT te da respuestas repetitivas o poco relacionadas
                  🤯- Esto puede suceder si la conversación carece de dirección
                  o si no le das suficiente orientación a ChatGPT. ¡Ayuda a
                  guiar la conversación y a mantener el enfoque!
                </li>
              </ul>

              <p className="mt-6 text-xl leading-8">
                <strong>Problemas técnicos</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                A veces pueden surgir problemas técnicos al usar ChatGPT, ¡pero
                no te preocupes! Aquí te dejamos algunos consejos para
                solucionarlos. 🤖💻👨‍💻
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Tu dispositivo o navegador no están cooperando? 🤔📱🖥️
                Asegúrate de que ChatGPT sea compatible con tu dispositivo y
                navegador y de que tengas una conexión a Internet estable. ¡No
                te quedes sin conexión en medio de una conversación interesante!
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Sigue sin funcionar? 🤷‍♂ Prueba el modelo ChatGPT con una
                variedad de indicaciones para ver si el problema persiste.
                ¡Intenta ser creativo con tus preguntas y sorprende al bot! ¡A
                lo mejor descubres algo nuevo y divertido!
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Aún sin suerte? 🤯 Echa un vistazo a los registros o mensajes
                de error. A menudo pueden proporcionar pistas sobre la causa del
                problema. ¡Investiga un poco y conviértete en un detective de la
                tecnología!
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Necesitas más ayuda? 🤔 Busca consejos o ayuda en foros o
                comunidades en línea. Es posible que haya otras personas que
                hayan tenido problemas similares y hayan encontrado soluciones.{" "}
                <strong>¡Nunca subestimes el poder de la comunidad!</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Siguiendo estos consejos, ¡podrás solucionar problemas técnicos
                con ChatGPT en línea y hacer que vuelva a funcionar sin
                problemas en un santiamén! 🚀👨‍🚀
              </p>
            </>
          ) : null}

          {currentPage === 9 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>Ya terminamos toda la teoría 🥳</strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                En este capítulo vamos a hacer algunos ejercicios para que
                puedas entrenarte usando ChatGPT de manera efectiva, úsalos para
                ver cómo funcionan 🤺.
              </p>
              <p className="mt-6 text-xl leading-8">
                Es importante que cada ejercicio lo hagas en un chat diferente
                para que no responda en base a las respuestas anteriores, o si
                quieres usar el mismo chat puedes escribir &rdquo;Olvida todo lo
                que escribimos en este chat&rdquo; seguido del ejercicio, esto
                hará que se reinicie el chat.
              </p>
              <p className="mt-6 text-xl leading-8">¡Empecemos!</p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ejercicio 1: Uso de ChatGPT para mejorar las competencias
                  lingüísticas 🗣️🌍
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Quieres aprender un nuevo idioma o mejorar tus habilidades
                lingüísticas? ¡ChatGPT puede ser tu nuevo mejor amigo!. Te
                dejamos varios prompts que puedes usar para pulir tu nuevo
                idioma:
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como traductor, corrector ortográfico y
                perfeccionista de inglés. Te hablaré en cualquier idioma y tú
                detectarás el idioma, lo traducirás y responderás con la versión
                corregida y mejorada de mi texto, en inglés. Quiero que
                sustituyas mis palabras y frases simplificadas de nivel A0 por
                palabras y frases inglesas de nivel superior, más bellas y
                elegantes. Mantén el mismo significado, pero hazlas más
                literarias. Quiero que sólo respondas a la corrección, a las
                mejoras y nada más, no escribas explicaciones. Mi primera frase
                es &rdquo;Quiero comer McDonald&rdquo;s&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                &rdquo;Quiero que actúes como ayudante de pronunciación en
                inglés para personas de habla hispana. Te escribiré frases y tú
                sólo responderás a sus pronunciaciones, y nada más. Las
                respuestas no deben ser traducciones de mi frase, sino sólo
                pronunciaciones. Las pronunciaciones deben utilizar letras
                latinas hispanas para la fonética. No escribas explicaciones en
                las respuestas. Mi primera frase es &rdquo;¿What is the weather
                in Fort Lauderdale?&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ejercicio 2: Uso de ChatGPT para generar contenido 🤳📱
                </strong>
                E
              </p>
              <p className="mt-6 text-xl leading-8">
                ¿Estás buscando una forma divertida y eficaz de generar
                contenidos de calidad? En este ejercicio vamos a mostrar cómo
                puedes utilizar ChatGPT para crear contenidos sorprendentes para
                tus publicaciones en redes sociales, artículos de blog o
                materiales de marketing.
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como influencer en las redes sociales. Crearás
                contenido para varias plataformas, como Instagram, Twitter o
                YouTube, y te relacionarás con tus seguidores para aumentar el
                conocimiento de la marca y promocionar productos o servicios. Mi
                primera solicitud de sugerencia es &rdquo;Necesito ayuda para
                crear una campaña atractiva en Instagram para promocionar una
                nueva línea de ropa deportiva&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como publicista. Crearás una campaña para
                promocionar un producto o servicio de tu elección. Elegirás un
                público objetivo, desarrollarás mensajes clave y slogans,
                seleccionarás los canales de comunicación para la promoción y
                decidirás las actividades adicionales necesarias para alcanzar
                tus objetivos. Mi primera solicitud de sugerencia es
                &rdquo;Necesito ayuda para crear una campaña publicitaria para
                un nuevo tipo de bebida energética dirigida a adultos jóvenes de
                entre 18 y 30 años&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ejercicio 3: Uso de ChatGPT para crear historias de ficción
                  👽🥷
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                En este ejercicio, veremos cómo se puede utilizar ChatGPT para
                crear historias de ficción. Al proporcionar indicaciones claras
                y específicas, ésta herramienta puede ser eficaz para estimular
                la creatividad y generar tramas interesantes y únicas.
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como cuentacuentos. Idearás historias
                entretenidas, atractivas, imaginativas y cautivadoras para el
                público. Pueden ser cuentos de hadas, historias educativas o
                cualquier otro tipo de historias que tengan el potencial de
                captar la atención y la imaginación de la gente. Dependiendo del
                público al que te dirijas, puedes elegir temas o asuntos
                específicos para tu sesión de cuentacuentos; por ejemplo, si son
                niños, puedes hablarles de animales; si son adultos, los cuentos
                basados en la historia podrían engancharles mejor, etc. Mi
                primera petición es: &rdquo;Necesito un cuento interesante sobre
                los ninjas que aprender a usar prompts para chatGPT&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ejercicio 4: Uso de ChatGPT como entrevistador 🧑‍💼💻
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Con este ejercicio puedes hacer todas las preguntas que quieras
                sin tener que preocuparte por la ansiedad de la entrevista, y lo
                mejor de todo, no tendrás que preocuparte por las respuestas
                equivocadas porque, hey, eres el que controla todo el proceso.
                Además, si tienes un sentido del humor un poco peculiar, puedes
                incluso hacer preguntas divertidas y ver cómo responde el
                chatbot. ¡Incluso podrías conseguir una risa o dos!
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como un entrevistador. Yo seré el candidato y
                tú me harás las preguntas de la entrevista para el puesto.
                Quiero que sólo respondas como el entrevistador. No escribas
                toda la conservación a la vez. Quiero que sólo hagas la
                entrevista conmigo. Hazme las preguntas y espera mis respuestas.
                No escribas explicaciones. Hazme las preguntas una a una como
                hace un entrevistador y espera mis respuestas. Mi primera frase
                es &rdquo;Hola&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ejercicio 5: Uso de ChatGPT como consola JavaScript
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Con este ejercicio puedes programar todo lo que puedas imaginar,
                desde juegos hasta aplicaciones web completas. Es como tener un
                amigo programador siempre disponible para darte una mano. ¡Así
                que siéntete como un verdadero ninja de la programación y
                diviértete experimentando con este ejercicio!
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como una consola javascript. Yo escribiré los
                comandos y tú responderás con lo que debería mostrar la consola
                javascript. Quiero que sólo respondas con la salida del terminal
                dentro de un único bloque de código, y nada más. no escribas
                explicaciones. no escribas comandos a menos que yo te lo
                indique. cuando necesite decirte algo en español, lo haré
                poniendo texto dentro de llaves {"{"}como esto{"}"}. mi primer
                comando es console.log (&rdquo;Hola Mundo&rdquo;);
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Ejercicio 6: Hoja de Excel</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Nunca volverás a tener que preocuparte por esas tediosas y
                aburridas hojas de cálculo de nuevo! Con este ejercicio podrás
                hacer todos tus cálculos y analizar tus datos con una
                herramienta que no solo es increíblemente eficiente, ¡sino que
                también es divertida de usar! ¡Es como tener un compañero de
                oficina que nunca se quejará del aburrimiento o de que el café
                está frío!
              </p>
              <p className="mt-6 text-xl leading-8 italic">
                Quiero que actúes como un Excel basado en texto. Sólo me
                responderás la hoja Excel basada en texto de 10 filas con
                números de fila y letras de celda como columnas (A a L). El
                encabezado de la primera columna debe estar vacío para hacer
                referencia al número de fila. Te diré lo que tienes que escribir
                en las celdas y me contestarás sólo con el resultado de la tabla
                excel como texto, y nada más. No escribas explicaciones. Yo te
                escribiré fórmulas y tú ejecutarás las fórmulas y sólo
                responderás el resultado de la tabla de Excel como texto.
                Primero, respóndeme la hoja vacía.
              </p>
            </>
          ) : null}

          {currentPage === 10 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  ¡Llegaste al final de este curso lleno de consejos y trucos
                  para sacar el máximo provecho de ChatGPT! Como habrás notado,
                  la clave para el éxito es escribir instrucciones claras y
                  precisas. Si logras hacerlo, podrás guiar a ChatGPT en la
                  dirección correcta para obtener resultados significativos y
                  útiles. 🤖👍
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                ¿Recuerdas la técnica del &rdquo;actuar como&rdquo;? Es una
                herramienta poderosa que te permite definir claramente el papel
                que deseas que ChatGPT desempeñe en la conversación. ¡No te
                quedes atrás y ponla en práctica! 🤖💬
              </p>
              <p className="mt-6 text-xl leading-8">
                Otro consejo importante es evitar la jerga y la ambigüedad en
                las instrucciones. Usa un lenguaje sencillo y directo, así como
                preguntas específicas, para que ChatGPT pueda darte respuestas
                precisas. Y recuerda, ChatGPT es una herramienta poderosa, pero
                su eficacia depende de cómo la uses. 🧑‍💻💭
              </p>
              <p className="mt-6 text-xl leading-8 mb-6">
                Para redactar instrucciones efectivas para ChatGPT, debes tener
                en cuenta la comunicación clara, la especificidad y las
                capacidades y limitaciones de la herramienta. Con los consejos y
                prácticas recomendadas que se encuentran en este libro
                electrónico, podrás crear instrucciones efectivas que te
                ayudarán a lograr tus objetivos. Así que ¡adelante, pon manos a
                la obra y haz que ChatGPT trabaje para ti! 🤖💪
              </p>
              <Image
                src={chatgptFour}
                alt="Logo"
                width={600}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <p className="mt-6 text-xl leading-8 mt-6">
                <strong>
                  ¿Listo para dominar el arte de los prompts en ChatGPT? Aquí
                  están los próximos pasos que necesitas tomar! 🚀🤖
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Te dejamos los próximos pasos que debes seguir para seguir
                mejorando tus habilidades:
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=b368bgk0x37a13tv"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                Primero y más importante, ¡practica! Cuanto más uses ChatGPT y
                experimentes con diferentes tipos de mensajes, más fácil será
                crear mensajes efectivos y geniales.
              </p>
              <p className="mt-6 text-xl leading-8">
                Pide a tus amigos y compañeros que revisen tus mensajes y te den
                sus opiniones. Sus críticas constructivas te ayudarán a
                identificar áreas de mejora y a perfeccionar tus habilidades.
              </p>
              <p className="mt-6 text-xl leading-8">
                No te quedes atrás, aprende de los demás. Investiga en línea
                ejemplos de mensajes de ChatGPT que hayan tenido éxito o únete a
                comunidades y foros en línea dedicados a ChatGPT para aprender
                de los expertos y compartir tus propias experiencias.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Experimenta con diferentes estilos y enfoques! No tengas miedo
                de probar cosas nuevas y ver qué es lo que funciona mejor. Puede
                que descubras que ciertas técnicas o enfoques son más eficaces
                para diferentes tipos de conversaciones.
              </p>
              <p className="mt-6 text-xl leading-8">
                Mantente actualizado con los últimos avances en ChatGPT e
                inteligencia artificial. A medida que la tecnología siga
                avanzando, también lo harán las capacidades de ChatGPT. Al
                mantenerte al día con las últimas noticias, puedes estar seguro
                de estar utilizando las mejores técnicas y enfoques para tus
                mensajes ChatGPT.
              </p>
            </>
          ) : null}

          {currentPage === 11 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ahora te dejaremos una pequeña tarea para poder aprobar el
                  curso y tener tu certificado, ¡no te asustes, con todo lo que
                  has aprendido estamos seguras que lo obtendrás! 🎉
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                <strong>
                  1. Escribe un hilo de tweet sobre un tema de actualidad.
                </strong>
              </p>
              <ul className="list-disc">
                <li className="mt-6 text-xl leading-8">
                  Comienza con una pregunta clara y sencilla para ChatGPT, como
                  &rdquo;¿Puedes decirme cuál es el tema de actualidad más
                  importante de hoy?&rdquo; (recuerda que ChatGPT está
                  alimentado hasta el 2021)
                </li>
                <li className="mt-6 text-xl leading-8">
                  Utiliza preguntas de seguimiento para obtener detalles
                  específicos sobre el tema, como &rdquo;¿Cuáles son los
                  principales aspectos de este tema que la gente necesita
                  saber?&rdquo;, o &rdquo;¿Cuál es la postura oficial de los
                  líderes en relación a este tema?&rdquo;
                </li>
                <li className="mt-6 text-xl leading-8">
                  Mantén un tono respetuoso y coherente en todo momento para
                  asegurarte de que ChatGPT no se desvíe de la conversación. Si
                  se desvía, usa preguntas de seguimiento para que vuelva al
                  tema original.
                </li>
                <li className="mt-6 text-xl leading-8">
                  Utiliza el truco &rdquo;actúa como&rdquo; para hacer que
                  ChatGPT se comporte como un periodista o experto en el tema.
                  Por ejemplo, puedes preguntar: &rdquo;¿Qué crees que las
                  personas deben hacer para abordar este problema?&rdquo; o
                  &rdquo;¿Puedes compartir algún recurso útil para que las
                  personas puedan profundizar en este tema?&rdquo;.
                </li>
                <li className="mt-6 text-xl leading-8">
                  Utiliza la limitación de caracteres de Twitter para ayudar a
                  los estudiantes a ser precisos y concisos en su escritura. Usa
                  un hilo de 3 o 4 tweets sobre el tema y utiliza preguntas y
                  respuestas para hacer que la conversación fluya de manera
                  natural.
                </li>
                <li className="mt-6 text-xl leading-8">
                  Cuando termines la tarea haz un screenshot a tu pantalla y
                  súbelo a Twitter etiquetando a @CryptonikasDAO y poniendo el
                  hashtag #Kiwitonikas. ¡Esta es tu última oportunidad de poder
                  estar en el top del ranking!
                </li>
              </ul>
            </>
          ) : null}

          {currentPage === 12 ? (
            <>
              <p className="mt-6 text-xl leading-8 mb-4">
               
               
                Para graduarte de Ninja de prompts en ChatGPT debes mintear tu
                certificado  el costo es de 1 MATIC de Polygon (aprox 1$).

                Al mintear tu certificando estas apoyando al creador de contenido, así que asegúrate de
                seguirla en las redes sociales y etiquétala en Twitter junto a tu nuevo certificado.
                
                
              </p>

              
              <p>
              👇
               <br></br>
                <strong>@Genializa_</strong>
                <br></br>
                #Kiwitonikas 🥝
              </p>

              <div className="mt-6 flex flex-col items-center">
                <div className="mb-6">
                  <ThirdwebNftMedia metadata={nft.metadata} />
                </div>

                <div className="w-600">
                  <div className="mb-6 mt-6">
                    <Web3Button
                      contractAddress={
                        "0x47DA47429F0127EDd178cc36ebDEc58874310220"
                      }
                      action={(contract) =>
                        contract.erc1155.claim(tokenId, quantity)
                      }
                      onSuccess={() =>
                        alert("¡Felicidades, ya tienes tu NFT certificado!")
                      }
                      onError={() =>
                        alert(
                          "Oops, hubo un error :( Verifica tu saldo, es posible que necesites Matic"
                        )
                      }
                      className="mx-auto"
                    >
                      Certifícate
                    </Web3Button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
                scrollToTop();
              }
            }}
            className="hover:cursor-pointer inline-flex items-center border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <a
                key={pageNumber}
                href="#"
                onClick={() => {
                  setCurrentPage(pageNumber - 1);
                  scrollToTop();
                }}
                className={`inline-flex items-center ${
                  currentPage === pageNumber - 1
                    ? "text-green-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                } px-4 pt-4 text-sm font-medium`}
              >
                {pageNumber}
              </a>
            )
          )}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            onClick={
              currentPage === totalPages - 1
                ? undefined
                : () => {
                    setCurrentPage(currentPage + 1);
                    scrollToTop();
                  }
            }
            className={`inline-flex items-center border-transparent pl-1 pt-4 text-sm font-medium ${
              currentPage === totalPages - 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            }`}
          >
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
    </Dashboard>
  );
}

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
import Image from "next/image";
import mamasitas from "../../public/mamasitas.jpeg";

interface PageProps {
  subtitle: string;
  title: string;
  body: string;
  text: string;
}

const pages = [
  {
    subtitle: "Introducción",
    title: "Rostros Estilizados por Chama Candela 🔥",
  },
  {
    title: "1. Ilustración de perfil de lado 🗣️",
  },
  {
    title: "2. Ilustración de perfil de frente 👤",
  },
  {
    title: "3. Siguiente paso del sketch…las líneas limpias 🧼",
  },
  {
    title: "4. La vida real 🤭",
  },
  {
    title: "5. BONUS",
  },
  {
    title: "FELICIDADES 🎉",
  },
];

export default function ChatGPT() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 7; // replace with the total number of pages
  //console.log(currentPage);

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;


  //web3button
  const tokenId = 1; // the id of the NFT you want to claim
  const quantity = 1; // how many NFTs you want to claim

  const { contract } = useContract(
    "0x47DA47429F0127EDd178cc36ebDEc58874310220"
  );
  const { data: nft, error } = useNFT(contract, "1");

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
          <h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pages[currentPage]?.title ?? ""}
          </h1>
          <div>
            <Image
              src={mamasitas}
              alt="Logo"
              height={600}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
              }}
            />
          </div>
          {currentPage === 0 ? (
            <div
              className="relative mt-6 mb-6"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src="https://lvpr.tv?v=987f9391d3lnhgoa"
                allowFullScreen
                allow="encrypted-media; picture-in-picture"
                sandbox="allow-scripts"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          ) : null}

          <br />
          {currentPage === 0 ? (
            <div>
              <p className="mt-6 text-xl leading-8">
                Les presentamos a Chama Candela ❤️‍🔥
              </p>
              <p className="mt-6 text-xl leading-8">
                Para quien no la conozca, es un artista audiovisual de Venezuela
                con más de 20 años de experiencia que ha revolucionado el arte
                de los NFT. Junto a Ava, otra mujer espectacular, es la creadora
                de Cariberse 🌴, un metaverso con una comunidad que busca que la
                gente reconozca, conecte y entienda el CARIBE a través de
                experiencias audiovisuales.
              </p>

              <p className="mt-6 text-xl leading-8">
                Ha sido diseñadora en televisión, directora de arte en una de
                las primeras agencias de diseño interactivo que hubo en
                Venezuela, también ha trabajado con ropa. Ha sido freelance y ha
                añadido el baile a sus redes sociales porque siempre ha estado
                rodeada de músicos, lo que la ha llevado a trabajar con
                cantantes de reggaetón como J Balvin.
              </p>

              <p className="mt-6 text-xl leading-8">
                ¿Por qué nos emociona tanto ofrecerles este material? A lo largo
                del curso, se darán cuenta de la magia que tiene Chama, lo
                inspiradora que es, y lo mucho que ama su profesión. Vas a poder
                aprender cómo transmitir la buena energía a través de tus
                ilustraciones así como ella nos lo transmite a todos.
              </p>

              <p className="mt-6 text-xl leading-8">
                Pueden apoyarla y seguirla en sus redes sociales como{" "}
                <a
                  href="https://twitter.com/uhCaribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong> @uhCaribe </strong>
                </a>
                , a Ava como
                <a
                  href="https://twitter.com/AVAuniverse111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong> @AVAuniverse111 </strong>
                </a>
                y al Cariberse como
                <a
                  href="https://twitter.com/cariberse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong> @Cariberse </strong>
                </a>
                para que gocen y bailen al ritmo del Caribe 🌴
              </p>
              <br />
            </div>
          ) : null}

          {currentPage === 1 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=f742qaupkweanjim"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  En este módulo tendremos como modelo a Zendaya y Chama tocará
                  los siguientes puntos:
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 ¿Por qué debemos hacer exageraciones a la hora de ilustrar?
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 Conoce los detalles de cada persona que te pide una
                ilustración y concéntrate en las líneas que más te gustan
              </p>

              <p className="mt-6 text-xl leading-8">👉 ¿Qué es el canon?</p>
              <p className="mt-6 text-xl leading-8">👉 ¿Qué debemos evitar?</p>
              <p className="mt-6 text-xl leading-8">
                👉 Abstrae las líneas más importantes
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea: Muéstranos en un tweet tu sketch de Zendaya etiquetando
                  a Chama Candela @uhCaribe y Cryptonikas @cryptonikasDAO
                  #Caribetonikas
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 2 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=61d1tm0u0pr17sp5"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  Usaremos a Michael B. Jordan como modelo mientras Chama nos
                  explica lo siguiente:
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 ¿Cómo ubicar la nariz, ojos y boca?
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 ¿Cómo no hacer bocas terrifiantes?
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 ¿Siempre te sale un ojo mejor que el otro?
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 Lo mejor es construir el sketch a la par
              </p>
              <p className="mt-6 text-xl leading-8">👉 Técnica de tramado</p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea: Muéstranos en un tweet tu sketch de Michael B. Jordan
                  etiquetando a Chama Candela @uhCaribe y Cryptonikas
                  @cryptonikasDAO #Caribetonikas{" "}
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 3 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=f27af1oe2dqtbiif"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ya lograste tu sketch, ¡ahora empieza lo bueno!. ¿Qué nos
                  cuenta Chama en este módulo?:
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 Usar el sketch de base para modificar la ilustración final
              </p>

              <p className="mt-6 text-xl leading-8">👉 Hacer definiciones</p>

              <p className="mt-6 text-xl leading-8">
                👉 Ahora podemos darle nuestro estilo
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 Dibujar las sombras y hacer brillos con color
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 Definir las líneas de expresión
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea: Muéstranos en un tweet tu versión de Zendaya final
                  etiquetando a Chama Candela @uhCaribe y Cryptonikas
                  @cryptonikasDAO #Caribetonikas
                </strong>{" "}
              </p>
            </>
          ) : null}

          {currentPage === 4 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=4ba58cryzbwcr14j"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                Vayamos con personas del mundo real, que no sean artistas
                viéndose maravillosamente. En este módulo tendremos algunas
                fotos extras donde Chama nos enseña a ilustrar a personas
                comunes y cómo hacer las líneas de expresión que son más
                marcadas. También nos dará un truco para dibujar manos y dedos
                que siempre son muy difíciles de hacer.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Tarea: Escoge cualquier foto para mostrarnos tu ilustración.
                  Sé original y muéstranos tu talento.{" "}
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 5 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=0e7fccvq3ac0khs4"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  En éste módulo Chama nos deja un bonus de cómo dibujar codos y
                  cuál es su técnica para hacerlo.
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Luego estará respondiendo las siguientes preguntas:
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">👉 Gestión del tiempo</p>

              <p className="mt-6 text-xl leading-8">
                👉 ¿Cómo aprendió Chama a ilustrar?
              </p>

              <p className="mt-6 text-xl leading-8">
                👉 Tips para practicar ilustración
              </p>
              <p className="mt-6 text-xl leading-8">
                👉 La presión en las RRSS
              </p>
            </>
          ) : null}

          {currentPage === 6 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Estamos súper orgullosas que hayas participado en este curso y
                  que aprendas de la mejor chamita con sabor caribeño.
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8 mb-4">
               
               
               Para graduarte debes mintear tu
               certificado  el costo es de 1 MATIC de Polygon (aprox 1$).

               Al mintear tu certificando estas apoyando al creador de contenido, así que asegúrate de
               seguirla en las redes sociales y etiquétala en Twitter junto a tu nuevo certificado.
               
               
             </p>

             
             <p>
             👇
              <br></br>
               <strong>@uhCaribe
</strong>
               <br></br>
               #Kiwitonikas 🥝
             </p>
              <div className="mt-6 flex flex-col items-center">
                <h1>Apoya a Chama Candela y el arte Latino</h1>
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
            className="hover:cursor-pointer inline-flex items-center  border-transparent pr-1 pt-4 text-sm font-medium text-gray-500  hover:text-gray-700"
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
                className={`inline-flex items-center  ${
                  currentPage === pageNumber - 1
                    ? "text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 "
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
            className={`inline-flex items-center  border-transparent pl-1 pt-4 text-sm font-medium ${
              currentPage === totalPages - 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-500  hover:text-gray-700 hover:cursor-pointer"
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

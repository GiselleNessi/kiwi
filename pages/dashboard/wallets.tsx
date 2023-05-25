import React, { useEffect, useState } from "react";
import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
  useLogout,
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
import wallet1 from "../../public/wallet1.png";
import wallet2 from "../../public/wallet2.png";
import wallet3 from "../../public/wallet3.png";
import wallet4 from "../../public/wallet4.png";
import wallet5 from "../../public/wallet5.png";
import wallet6 from "../../public/wallet6.png";

import enviar1 from "../../public/enviar1.png";
import enviar2 from "../../public/enviar2.png";
import enviar3 from "../../public/enviar3.png";
import enviar4 from "../../public/enviar4.png";
import enviar5 from "../../public/enviar5.png";
import enviar6 from "../../public/enviar6.png";

import sitios2 from "../../public/sitios2.png";
import sitios3 from "../../public/sitios3.png";

interface PageProps {
  subtitle: string;
  title: string;
  body: string;
  text: string;
}

const pages = [
  {
    subtitle: "Billeteras Digitales 🔐",
    title:
      "Domina La Seguridad De Tus Criptomonedas Con Nuestro Divertido Curso De Billeteras Digitales",
  },
  {
    title: "¿Cómo funciona una wallet de criptomonedas? 🧐",
  },
  {
    title: "1.👉 ¿Qué es Metamask?",
  },
  {
    title: "👉 ¿Cómo instalar Metamask en tu dispositivo móvil Iphone/Android?",
  },
  {
    title: "👉 ¿Cómo abrir una cuenta en Etherscan?",
  },
  {
    title:
      "¿Listos para aprender sobre las operaciones principales que puedes realizar con tu billetera? ¡Vamos allá! 🚀",
  },
  {
    title:
      "Ahora que estás listo para hacer malabares con tu billetera MetaMask, es importante que tomes medidas de seguridad para proteger tus activos criptográficos. 🛡️",
  },
  {
    title: "Desconectar sitios conectados en la aplicación móvil MetaMask! 📱",
  },
  {
    title: "¿Cuál es la diferencia entre Mainnet y Testnets? 🤔",
  },
  {
    title:
      "2. 🎉 Aquí te presentamos a Phantom, la billetera digital estrella de la red Solana que no te defraudará. 💪",
  },
  {
    title:
      "👉 ¿Cómo abrir tu propia billetera digital en Phantom? ¡Te guiaremos paso a paso para que lo hagas sin esfuerzo!",
  },
  {
    title: "3. ¡Exodus, la billetera digital que lo tiene todo!",
  },
  {
    title: "¡Felicidades! Has terminado el curso de Wallets Digitales.",
  },
];

export default function Wallets({ subtitle, title, body, text }: PageProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 13; // replace with the total number of pages
  //console.log(currentPage);

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;


  //web3button
  const tokenId = 2; // the id of the NFT you want to claim
  const quantity = 1; // how many NFTs you want to claim

  const address = useAddress(); // Get the user's address
  const { contract } = useContract(
    "0x47DA47429F0127EDd178cc36ebDEc58874310220"
  );

  const { data: nft, error } = useNFT(contract, "2");

  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
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
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pages[currentPage]?.title ?? ""}
          </h1>
          <br />
          {currentPage === 0 ? (
            <div>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=a4feb6zlwhmhstek"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <br />
              <p className="mt-6 text-xl leading-8">
                Las billeteras de criptomonedas son la clave para desbloquear el
                mundo de las monedas digitales. Son una forma segura de
                almacenar, enviar y recibir criptomonedas como por ejemplo:
                <strong> Bitcoin y Ethereum.</strong> Hay diferentes tipos de
                billeteras de criptomonedas disponibles en la actualidad, cada
                una con sus propias características y beneficios únicos.
              </p>
              <p className="mt-6 text-xl leading-8">
                Si tienes criptomonedas, seguramente has oído hablar de ellas,
                pero si eres nuevo en el mundo de las criptomonedas, es posible
                que te preguntes: ¿Qué son las wallets? Las wallets son
                dispositivos diseñados para almacenar y gestionar tus
                criptomonedas. A diferencia de las monedas físicas, que llevamos
                en nuestro bolsillo, las criptomonedas no tienen una forma
                física, por lo que necesitamos un lugar seguro para
                almacenarlas.
              </p>
              <p className="mt-6 text-xl leading-8">
                Aquí es donde entran las wallets. Es importante destacar que las
                wallets son una pieza fundamental de la seguridad en el mundo de
                las criptomonedas. Algunas te permiten configurar medidas de
                seguridad adicionales, como la autenticación de dos factores,
                que te protegen aún más contra el riesgo de robo de tus activos.
              </p>
              <br />
            </div>
          ) : null}

          {currentPage === 1 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                - En primer lugar <strong>La Dirección:</strong>
              </p>

              <div className="mt-2 mb-2 flex flex-col items-center">
                <Image
                  src={wallet1}
                  alt="Logo"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              <p className="mt-6 text-xl leading-8">
                Como toda cuenta bancaria, cada wallet de criptomonedas tiene
                una dirección única que identifica el lugar de almacenamiento de
                tus activos digitales. Si quieres recibir una transacción de
                criptomonedas o tokens, deberás enviar tu dirección al
                remitente. Y si quieres enviar dinero a otro usuario, deberás
                utilizar la dirección del destinatario.
              </p>
              <p className="mt-6 text-xl leading-8">
                - En segundo lugar La <strong>llave pública</strong> y la{" "}
                <strong>llave privada</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                La <strong>llave pública</strong> permite la creación de la
                dirección y sirve para verificar que efectivamente tú has
                firmado una transacción como propietario de tus activos. La{" "}
                <strong>llave privada </strong>es el código criptográfico que te
                permite gastar, transferir, retirar, cambiar o enviar tus
                criptomonedas y esta es fundamental para garantizar la seguridad
                de tus activos. Además de estas claves, existen otros elementos
                que te serán útiles, como el <strong>PIN</strong> o{" "}
                <strong>contraseña</strong>.
              </p>
              <p className="mt-6 text-xl leading-8">
                - Por último, está la{" "}
                <strong>frase de recuperación o semilla</strong>. Este es un
                conjunto de palabras que respaldan tu monedero de criptomonedas,
                y que te permiten recuperar tus activos en caso de pérdida de
                acceso al dispositivo en el que tienes instalada tu wallet.
              </p>
              <div className="mt-2 mb-2 flex flex-col items-center">
                <Image
                  src={wallet2}
                  alt="Logo"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </>
          ) : null}

          {currentPage === 2 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Metamask es el todopoderoso monedero digital que te permite
                interactuar con aplicaciones descentralizadas en la red
                Ethereum. Pero no te preocupes, no necesitas ser un genio de la
                tecnología para entender cómo funciona 🤓💃
              </p>

              <p className="mt-6 text-xl leading-8">
                👉{" "}
                <strong>
                  ¿Cómo abrir tu propia billetera digital en Metamask?
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">¡Te lo explicamos todo!</p>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  Abre tu navegador Chrome y busca la extensión de Metamask en
                  la Chrome Web Store.
                </strong>
                <p className="mt-6 text-xl leading-8">
                  <strong>1-</strong> Haz clic en{" "}
                  <strong>&rdquo;Agregar a Chrome</strong> y confirma que deseas
                  agregar la extensión.
                </p>
                <p className="mt-6 text-xl leading-8">
                  <strong>2-</strong> Haz clic en el icono de Metamask que
                  aparecerá en la esquina superior derecha de tu navegador y
                  sigue las instrucciones para crear una nueva cuenta o importar
                  una existente.
                </p>
                <div
                  className="relative mt-6 mb-6"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src="https://lvpr.tv?v=489a50svo9ukvq7j"
                    allowFullScreen
                    allow="encrypted-media; picture-in-picture"
                    sandbox="allow-scripts"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="mt-6 text-xl leading-8">
                  <strong>
                    👉 ¿Cómo asegurar tu billetera digital en Metamask?
                  </strong>
                </p>
                <p className="mt-6 text-xl leading-8">
                  Una vez que hayas creado tu cuenta, asegúrate de guardar bien
                  la frase de recuperación que te proporciona Metamask. ¡Es tu
                  llave maestra para acceder a tus criptomonedas!
                </p>
                <p className="mt-6 text-xl leading-8">
                  <strong>-SI NO SON TUS LLAVES, NO ES TU CRIPTO-</strong>
                </p>
                <p className="mt-6 text-xl leading-8">
                  Primero, asegúrate de tener una contraseña segura y única para
                  tu billetera. ¡Nada de usar &rdquo;123456&rdquo; o
                  &rdquo;contraseña&rdquo;! 🤨 Utiliza una combinación de
                  letras, números y símbolos para crear una clave que sea
                  difícil de adivinar. Otro consejo importante es realizar
                  copias de seguridad de tu billetera. Guarda tu semilla (seed
                  phrase) en un lugar seguro (Un screenshot no es seguro) y
                  nunca compartas esta información con nadie. ¡Es la llave
                  maestra para acceder a tu billetera! 🔑
                </p>

                <div className="mt-2 mb-2 flex flex-col items-center">
                  <Image
                    src={wallet3}
                    alt="Logo"
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                <p className="mt-6 text-xl leading-8">
                  Además, es importante tener en cuenta que nunca debes
                  compartir tu información personal o tus claves privadas en
                  línea. Las estafas de phishing son comunes en el mundo cripto,
                  así que siempre verifica que estás en la página correcta antes
                  de ingresar tus datos. Por último, mantén tu software
                  actualizado y utiliza extensiones de seguridad como MetaMask
                  Defender para proteger tu billetera de posibles ataques.{" "}
                </p>
                <p className="mt-6 text-xl leading-8">
                  <strong>¡Tu seguridad es lo primero! 🔒</strong>
                </p>
              </p>
            </>
          ) : null}

          {currentPage === 3 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Descarga la aplicación móvil desde Play Store o AppStore
                </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Después de descargar la aplicación y hojear la pantalla, se le
                presentan dos opciones:
              </p>

              <ul className="list-decimal ml-6 mt-6 text-xl leading-8">
                <li>Importar usando la frase de recuperación secreta</li>

                <li>Crea una nueva billetera</li>
              </ul>

              <p className="mt-6 text-xl leading-8">
                <strong>Crear una billetera nueva</strong> desde tu teléfono
                móvil es idéntico al proceso que detallamos anteriormente, en
                lugar de repetir los mismos pasos te ilustraremos las dos formas
                de importar su billetera MetaMask en su dispositivo.
              </p>

              <p className="mt-6 text-xl leading-8">
                <strong>
                  Importar usando la frase de recuperación secreta
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Muy bien! La mejor manera de importar tu billetera es usando la
                frase secreta de recuperación de 12 palabras y haciendo clic en
                el botón <strong>IMPORTAR</strong> en la parte inferior. 💻💥👍
              </p>
              <div className="mt-2 mb-2 flex flex-col items-center">
                <Image
                  src={wallet4}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="mt-6 text-xl leading-8">
                Sé que puede ser un dolor de cabeza recordar otra contraseña,
                pero hey, ¿qué son unas pocas contraseñas más en tu vida? 😂
                Pero si quieres simplificar las cosas, te recomiendo usar un
                administrador de contraseñas o usar la misma contraseña para
                MetaMask en todas las plataformas. Además, esto demuestra que
                MetaMask es una billetera sin custodia, lo que significa que
                todo está almacenado en tu dispositivo local y no en la nube.
                🔒📱
              </p>
              <div className="mt-2 mb-2 flex flex-col items-center">
                <Image
                  src={wallet5}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="mt-6 text-xl leading-8">
                ¡Tenemos una gran noticia! ¡Ya tenemos una billetera! 🎉 Pero
                espera, no es solo una billetera, es una billetera MetaMask, y
                eso significa que podemos hacer mucho más que simplemente
                guardar nuestros activos digitales. 👀
              </p>
              <p className="mt-6 text-xl leading-8">
                Con MetaMask, podemos tener{" "}
                <strong>varias cuentas dentro de una sola cuenta</strong>. ¿Por
                qué querríamos hacer eso? ¡Porque podemos tener cuentas
                separadas para diferentes casos de uso! Podríamos tener una
                cuenta NFT para todas nuestras obras de arte digitales, y una
                cuenta comercial separada para nuestros negocios. ¿No es genial?
                😎
              </p>
              <p className="mt-6 text-xl leading-8">
                Cada cuenta tiene su propio par de claves público-privadas,
                ¡pero aquí viene lo divertido! La frase de recuperación secreta
                es como la clave maestra de todas tus cuentas. Puedes usarla
                para acceder a todas tus cuentas al mismo tiempo, lo cual es muy
                práctico. Pero asegúrate de mantenerla segura, ¡es la clave para
                todas tus cuentas! 🔑
              </p>
              <p className="mt-6 text-xl leading-8">
                Si quieres agregar una nueva cuenta, simplemente haz clic en tu
                avatar en la ventana emergente de MetaMask y selecciona{" "}
                <strong>&rdquo;Crear cuenta&rdquo;</strong>.
              </p>

              <p className="mt-6 text-xl leading-8">
                <strong>Asígnele un nombre, y ¡listo! 🙌</strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Ah, y una cosa importante que debes saber: cada cuenta es un
                registro en la cadena de bloques, lo que significa que{" "}
                <strong>no se puede borrar completamente</strong>. Pero no te
                preocupes, puedes hacer que una cuenta no sea visible en
                MetaMask si sigues unos pasos especiales. Solo asegúrate de
                tener tu frase de recuperación secreta segura,
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡porque sin ella, no podrás volver a instalar la cuenta! 😉
              </p>
              <p className="mt-6 text-xl leading-8">Pasos especiales 👇</p>

              <div className="mt-2 mb-2 flex flex-col items-center">
                <Image
                  src={wallet6}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </>
          ) : null}

          {currentPage === 4 ? (
            <>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=4288gw914x4io3em"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </>
          ) : null}

          {currentPage === 5 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Primero, tenemos el botón <strong>&rdquo;Comprar&rdquo;</strong>{" "}
                que te conecta con proveedores de servicios que MetaMask
                considera los mejores en tu área. ¡Así que no te preocupes por
                buscar dónde comprar tus tokens y criptomonedas favoritas! 💰
                Aunque, sin ofender a MetaMask, podríamos recomendarte usar una
                plataforma de exchange para depositar tus fondos.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  ¡Ojo! Que todo depende de tu ubicación geográfica, así que
                  asegúrate de investigar bien tus opciones.🔍
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                ¡Pero eso no es todo! También puedes{" "}
                <strong>&rdquo;Enviar&rdquo;</strong> tus criptomonedas con
                MetaMask. Solo necesitas tener la clave pública del destinatario
                y ¡listo! 👉💰👈
              </p>
              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={enviar1}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <Image
                  src={enviar2}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    marginLeft: "10px",
                  }}
                />
              </div>

              <p className="mt-6 text-xl leading-8">
                Aunque debes tener en cuenta que las transacciones con propinas
                para los mineros pueden retrasarse o incluso fallar según las
                condiciones de la red. Pero no te preocupes si eres nuevo en
                esto, deja el botón de &rdquo;<strong>mercado</strong>&rdquo;
                intacto y ¡confirma tu transacción! ✅
              </p>
              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={enviar3}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="mt-6 text-xl leading-8">
                Después de verificar la transacción, puedes ver el historial en
                el área de actividad. Y si alguna vez necesitas practicar,
                recuerda que puedes hacerlo con los activos de las redes de
                prueba, que no valen ni un centavo.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Genial para experimentar sin preocupaciones! 🧪
              </p>
              <p className="mt-6 text-xl leading-8">
                En particular, solicitamos 0.1 ETH en Goerli Test Network
                (arriba a la derecha )
              </p>
              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={enviar6}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="mt-6 text-xl leading-8">
                Los activos de{" "}
                <strong>las redes de prueba no valen un centavo</strong>. Estas
                redes de prueba se utilizan para las pruebas de los
                desarrolladores antes de lanzar sus productos en la red
                principal de Ethereum.
              </p>
              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={enviar4}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </>
          ) : null}

          {currentPage === 6 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Aunque MetaMask es una billetera caliente, lo que significa que
                no es la forma más confiable de almacenar tus criptomonedas, ¡no
                te preocupes! ¡Tenemos algunos consejos para mantener tu
                billetera a salvo! 🤗
              </p>
              <br />
              <ul className="list-disc ml-6 mt-6 text-xl leading-8">
                <li>
                  Primero, ¡asegúrate de que MetaMask sea la única pestaña
                  abierta en tu navegador y ciérrala después de usarla!
                </li>
                <li>
                  Nunca compartas tu frase secreta de recuperación, claves
                  privadas y contraseña con nadie
                </li>
                <li>
                  Si no puedes dedicar un navegador separado solo para MetaMask,
                  entonces no uses las redes sociales o cuentas de Google en el
                  mismo navegador. 🔒
                </li>
              </ul>

              <p className="mt-6 text-xl leading-8">
                Si tienes criptomonedas valiosas, considera obtener una
                billetera de hardware <strong>(billeteras frías)</strong> para
                mayor seguridad.{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                Y recuerda, ¡manténte al día con las mejores prácticas para
                almacenar tus activos de forma segura!
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡La lista de consejos de seguridad puede continuar, así que
                manténte informado! 📚{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  ¿Cómo ver y desconectar sitios conectados en MetaMask?
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Vamos a aprender cómo ver y desconectar sitios conectados en
                nuestra billetera MetaMask. No queremos que esos sitios web
                malintencionados husmeen en nuestra billetera, ¿verdad? 😱
              </p>
              <p className="mt-6 text-xl leading-8">
                La verdad es que desconectar MetaMask de las dApps es tan
                importante como conectarlas. Pero, ¡oh no!, muchos usuarios no
                lo hacen porque no es una tarea fácil. La mayoría de las dApps
                no tienen el botón mágico de{" "}
                <strong> &rdquo;Desconectar&rdquo; </strong> que necesitamos.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>¿Qué hacer entonces?</strong>{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                Primero, recordemos que conectarse a una dApp solo permite que
                ese sitio web vea la dirección y el saldo de nuestra billetera
                MetaMask y envíe solicitudes de aprobación de transacciones.
                Pero, ¡cuidado! Algunos contratos inteligentes utilizados por
                dApps tienen control total sobre nuestra billetera MetaMask sin
                nuestra autorización. 😱
              </p>

              <p className="mt-6 text-xl leading-8">
                Pero no se preocupen, tenemos la solución. Para ver y
                desconectar sitios conectados en MetaMask, solo necesitamos
                hacer clic en los tres puntos verticales (Sí, esos puntitos
                curiosos en la esquina superior derecha)
              </p>

              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={sitios2}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              <p className="mt-6 text-xl leading-8">
                Luego seleccionamos{" "}
                <strong>&rdquo;Sitios conectados&rdquo;</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Y finalmente clic en <strong>&rdquo;Desconectar&rdquo;</strong>
              </p>

              <div className="mt-2 mb-2 flex flex-row items-center">
                <Image
                  src={sitios3}
                  alt="Logo"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Recuerda siempre estar atento y tomar medidas para mantener tu
                  billetera MetaMask segura. 🔒
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 7 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Primero, aterrizamos en el tablero y buscamos tres líneas
                paralelas en la esquina superior izquierda. ¡Tócalas! 👆
              </p>
              <br />
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=974fynkimqsbej6x"
                  allowFullScreen
                  allow=" encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="mt-6 text-xl leading-8">
                <strong>¡Haz limpiado la casa! 🧹</strong>
              </p>
            </>
          ) : null}

          {currentPage === 8 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Mainnet es donde los tokens tienen valor real. Testnets son
                lugares donde los desarrolladores prueben sus contratos
                inteligentes.{" "}
                <strong>El token de Testnet no tiene valor. 🚀</strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Los tokens de Testnet se entregan de forma gratuita a través de
                faucets. Sin embargo, se distribuyen en pequeñas cantidades para
                evitar la concentración en unas pocas personas, lo que limita su
                uso para probar el código de proyectos. 🧐
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Evita que te engañen pensando que tus tokens de testnet se
                convertirán en tokens de mainnet y pagar una tarifa! 😱
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Agregar una red personalizada a Metamask </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Para efectos de este tutorial, usaremos como ejemplo la red de
                CELO. 🤓
              </p>
              <p className="mt-6 text-xl leading-8">
                En primer lugar, selecciona el menú desplegable que dice{" "}
                <strong>Ethereum Main Network.</strong>{" "}
              </p>
              <p className="mt-6 text-xl leading-8">
                Aquí aparecerán las redes personalizadas más populares
                actualmente como:
              </p>

              <ul className="list-disc ml-6 mt-6 text-xl leading-8">
                <li>Polygon</li>
                <li>Binance smart Chain</li>
                <li>Avalanche</li>
                <li>xDAI</li>
              </ul>
              <p className="mt-6 text-xl leading-8">
                Estas redes puedes agregarla de forma automática en el buscador
              </p>
              <p className="mt-6 text-xl leading-8">
                A continuación, introduce la información en el formulario tal y
                como aparece aquí:
              </p>

              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=f75fu85y4vjiuos9"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <ul className="list-disc ml-6 mt-6 text-xl leading-8">
                <li>
                  Network Name: <strong>Celo (Mainnet)</strong>
                </li>
                <li>New RPC URL: https://forno.celo.org</li>
                <li>
                  ChainID: <strong>42220</strong>
                </li>
                <li>
                  Symbol: <strong>CELO</strong>
                </li>
                <li>Block Explorer URL: https://explorer.celo.org</li>
              </ul>
              <p className="mt-6 text-xl leading-8">
                Y con cuando esté, le damos a{" "}
                <strong>&rdquo;Guardar&rdquo;. 💾</strong>
              </p>
            </>
          ) : null}

          {currentPage === 9 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>👉 ¿Qué es Phantom? ¡Te lo contamos! </strong>
              </p>

              <p className="mt-6 text-xl leading-8">
                Con Phantom, puedes almacenar, enviar, recibir, apostar e
                intercambiar tokens en la cadena de bloques Solana. Además,
                puedes interactuar con aplicaciones de finanzas descentralizadas
                (DeFi), intercambios, plataformas de tokens no fungibles (NFT) y
                juegos en la cadena de bloques Solana. ¡Todo en una sola
                cartera! 😎 Y no te preocupes por la compatibilidad, Phantom
                está disponible como una extensión de navegador que puedes
                instalar en Firefox, Microsoft Edge, Google Chrome y Brave. Con
                una interfaz de usuario suave y moderna, que es muy similar a la
                alternativa Metamask de la cartera web3, puedes convertir
                cualquiera de tus navegadores favoritos en una cartera
                criptográfica habilitada para Web3. 🌐 ¿Y sabes qué? Al
                principio, Phantom solo estaba disponible como una extensión de
                navegador, pero ahora también está disponible para iPhone.
                ¡Descárgala en la App Store y lleva tus activos digitales
                contigo donde quiera que vayas! 📱
              </p>
            </>
          ) : null}

          {currentPage === 10 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  👉 ¿Cómo abrir tu propia billetera digital en Phantom? ¡Te
                  guiaremos paso a paso para que lo hagas sin esfuerzo!
                </strong>
              </p>
              <br />
              <ul className="list-disc ml-6 mt-6 text-xl leading-8">
                <li>
                  Visita https://www.phantom.app/download y sigue los sencillos
                  pasos de descarga e instalación. Ya sea que estés en Google
                  Chrome, Firefox, Microsoft Edge o Brave, ¡podrás tener acceso
                  a Phantom fácilmente!
                </li>
              </ul>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=7afei45vlmylnjq2"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  👉 ¿Cómo elimino un NFT de mi cartera de Phantom?
                </strong>
              </p>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=96f1e6ctvf5fufan"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </>
          ) : null}

          {currentPage === 11 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  👉 ¿Qué es Exodus? ¡Descubre las características que hacen de
                  esta billetera digital una de las mejores!
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Exodus está disponible de forma gratuita como una aplicación de
                escritorio para Linux, Windows y Mac OS, o como una aplicación
                móvil descargable en la Play Store de Google o en la App Store
                de Apple 📱.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  👉 ¿Cómo abrir tu propia billetera digital en Exodus? ¡Te
                  mostramos cómo hacerlo sin perder tiempo!
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Primero, cuando abras la aplicación móvil, serás guiado con un
                tutorial paso a paso, así que no te preocupes si eres un novato
                en criptomonedas 🤓. Una vez que hayas completado el tutorial,
                haz clic en <strong>&rdquo;Create a new wallet</strong>&rdquo; y
                asegúrate de activar la copia de seguridad de tu monedero para
                que puedas dormir tranquilo sabiendo que tus criptos están a
                salvo.
              </p>
              <p className="mt-6 text-xl leading-8">
                Luego, dirígete a la sección de seguridad y haz clic en{" "}
                <strong>&rdquo;Backup&rdquo; 🛡️</strong>.
              </p>
              <div
                className="relative mt-6 mb-6"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://lvpr.tv?v=ee5cdprwm6ay830f"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="mt-6 text-xl leading-8">
                Aquí te darán 12 palabras de seguridad que debes guardar como
                oro en paño. Te recomendamos que las escribas en un papel y las
                guardes en un lugar seguro, lejos de cualquier mirada indiscreta
                👀.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>¡Y voilà!</strong> Ya estás listo para empezar a guardar
                tus Bitcoin y más de 200 criptomonedas en una de las mejores
                billeteras del mercado.
              </p>
            </>
          ) : null}

          {currentPage === 12 ? (
            <>
              <p className="mt-6 mb-4 text-xl leading-8">
                Para graduarte como un maestro de Wallets Digitales debes
                mintear tu certificado el costo es de 1 MATIC de Polygon (aprox
                1$). Al mintear tu certificando estas apoyando al creador de
                contenido, así que asegúrate de seguirla en las redes sociales y
                etiquétala en Twitter junto a tu nuevo certificado.
              </p>
              <p>👇 <br></br><strong>@ms_nairobi</strong>  <br></br>#Kiwitonikas 🥝</p>

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

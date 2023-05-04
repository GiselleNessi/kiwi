import React, { useEffect, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAddress, useLogout, useUser } from "@thirdweb-dev/react";
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
import TypeformWidget from "../../components/TypeformWidget";

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
    title: "¡¿Cuál es la diferencia entre Mainnet y Testnets? 🤔",
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
    title: "9. Ejercicios",
  },
  {
    title: "10. ¡Felicidades, completaste el curso! 🥳",
  },
];

export default function Wallets({ subtitle, title, body, text }: PageProps) {
  const address = useAddress(); // Get the user's address
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
              <div>
                <iframe
                  src="https://lvpr.tv?v=ebafl18bf6o0pseo"
                  allowFullScreen
                  allow="autoplay; encrypted-media; picture-in-picture"
                  sandbox="allow-scripts"
                  width="600"
                  height="400"
                ></iframe>
              </div>
              <br />
              <p className="mt-6 text-xl leading-8">
                Las billeteras de criptomonedas son la clave para desbloquear el
                mundo de las monedas digitales. Son una forma segura de
                almacenar, enviar y recibir criptomonedas como por ejemplo:
                Bitcoin y Ethereum. Hay diferentes tipos de billeteras de
                criptomonedas disponibles en la actualidad, cada una con sus
                propias características y beneficios únicos. Si tienes
                criptomonedas, seguramente has oído hablar de ellas, pero si
                eres nuevo en el mundo de las criptomonedas, es posible que te
                preguntes: ¿Qué son las wallets? Las wallets son dispositivos
                diseñados para almacenar y gestionar tus criptomonedas. A
                diferencia de las monedas físicas, que llevamos en nuestro
                bolsillo, las criptomonedas no tienen una forma física, por lo
                que necesitamos un lugar seguro para almacenarlas. Aquí es donde
                entran las wallets. Es importante destacar que las wallets son
                una pieza fundamental de la seguridad en el mundo de las
                criptomonedas. Algunas te permiten configurar medidas de
                seguridad adicionales, como la autenticación de dos factores,
                que te protegen aún más contra el riesgo de robo de tus activos.
              </p>
              <br />
            </div>
          ) : null}

          {currentPage === 1 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                ¿Cómo funciona una wallet de criptomonedas? 🧐
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                - En primer lugar <strong>La Dirección:</strong>
              </p>
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
              <br />
              <p className="mt-6 text-xl leading-8">
                👉{" "}
                <strong>
                  ¿Cómo abrir tu propia billetera digital en Metamask?
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">¡Te lo explicamos todo!</p>
              <br />
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
              <br />
              <p className="mt-6 text-xl leading-8">
                Después de descargar la aplicación y hojear la pantalla, se le
                presentan tres opciones:
              </p>

              <ul className="list-decimal ml-6 mt-6 text-xl leading-8">
                <li>Al importar usando la frase de recuperación secreta</li>
                <li>Sincronizar con la extensión MetaMask</li>
                <li>Crea una nueva billetera</li>
              </ul>

              <p className="mt-6 text-xl leading-8">
                <strong>Crear una billetera nueva</strong> desde tu teléfono
                móvil es idéntico al proceso que detallamos anteriormente, en
                lugar de repetir los mismos pasos te ilustraremos las dos formas
                de importar su billetera MetaMask en su dispositivo.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Sincronizar con la extensión MetaMask</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Tenemos noticias:</strong>¡esta función ha sido
                temporalmente desactivada! 😱 Pero no te preocupes, ¡no todo
                está perdido!
              </p>
              <p className="mt-6 text-xl leading-8">
                Solo para tu información, si quisieras obtener el código QR
                necesario para sincronizar, simplemente tienes que hacer clic en
                tu avatar en la extensión MetaMask y selecciona
                &rdquo;Ajustes&rdquo;👤⚙️.
              </p>
              <p className="mt-6 text-xl leading-8">
                Desde allí, dirígete a &rdquo;Configuración&rdquo; y finalmente
                selecciona &rdquo;Sincronizar con el móvil&rdquo;. 📱💻
              </p>
              <p className="mt-6 text-xl leading-8">
                Y recibirá este mensaje de MetaMask deshabilitando esta función.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Importar usando la frase de recuperación secreta
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Muy bien! Así que si te has quedado sin opciones, la mejor
                manera de importar tu billetera es usando la frase secreta de
                recuperación de 12 palabras. Solo tienes que ingresar junto con
                una nueva contraseña y hacer clic en el botón{" "}
                <strong>IMPORTAR</strong> en la parte inferior. 💻💥👍
              </p>
              <p className="mt-6 text-xl leading-8">
                Sé que puede ser un dolor de cabeza recordar otra contraseña,
                pero hey, ¿qué son unas pocas contraseñas más en tu vida? 😂
                Pero si quieres simplificar las cosas, te recomiendo usar un
                administrador de contraseñas o usar la misma contraseña para
                MetaMask en todas las plataformas. Además, esto demuestra que
                MetaMask es una billetera sin custodia, lo que significa que
                todo está almacenado en tu dispositivo local y no en la nube.
                🔒📱 Una vez que hayas completado todo el proceso, verás la
                pantalla de felicitaciones y finalmente podrás tener tu panel de
                control de usuario móvil MetaMask.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Hora de hacer negocios! 💰💳💸
              </p>
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
                Asígnele un nombre, y ¡listo! 🙌
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
            </>
          ) : null}

          {currentPage === 4 ? (
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
              <p className="mt-6 text-xl leading-8">
                Aunque debes tener en cuenta que las transacciones con propinas
                para los mineros pueden retrasarse o incluso fallar según las
                condiciones de la red. Pero no te preocupes si eres nuevo en
                esto, deja el botón de &rdquo;<strong>edición</strong>&rdquo;
                intacto y ¡confirma tu transacción! ✅
              </p>
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
                En particular, solicitamos 5 ETH en Goerli Test Network (arriba
                a la derecha, además del avatar puedes ver la red) para ilustrar
                cómo enviar usando MetaMask.
              </p>
              <p className="mt-6 text-xl leading-8">
                Los activos de{" "}
                <strong>las redes de prueba no valen un centavo</strong>. Estas
                redes de prueba se utilizan para las pruebas de los
                desarrolladores antes de lanzar sus productos en la red
                principal de Ethereum.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  TAREA* Muestran que lograron obtener cripto de test GOERLI
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 5 ? (
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
                Pero no se preocupen, amigos, tenemos la solución. Para ver y
                desconectar sitios conectados en MetaMask, solo necesitamos
                hacer clic en los tres puntos verticales (Sí, esos puntitos
                curiosos en la esquina superior derecha)
              </p>
              <p className="mt-6 text-xl leading-8">
                Luego seleccionamos{" "}
                <strong>&rdquo;Sitios conectados&rdquo;</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Y finalmente clic en <strong>&rdquo;Desconectar&rdquo;</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Recuerda siempre estar atento y tomar medidas para mantener tu
                  billetera MetaMask segura. 🔒
                </strong>
              </p>
            </>
          ) : null}

          {currentPage === 6 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Primero, aterrizamos en el tablero y buscamos tres líneas
                paralelas en la esquina superior izquierda. ¡Tócalas! 👆
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Después, navegamos a{" "}
                <strong>&rdquo;Configuración&rdquo;</strong> y tocamos{" "}
                <strong>&rdquo;Seguridad y privacidad&rdquo;</strong>.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Mantengámoslo seguro! 🔒
              </p>
              <p className="mt-6 text-xl leading-8">
                Luego, desplácese hacia abajo hasta la sección{" "}
                <strong>&rdquo;Privacidad&rdquo;</strong> y toca &rdquo;
                <strong>Borrar datos de privacidad</strong>&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                Aparecerá una ventana emergente, ¡no te asustes! Sólo toca{" "}
                <strong>&rdquo;Borrar&rdquo;</strong> y estarás listo para
                desconectar sitios conectados en MetaMask. 💥
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>¡Haz limpiado la casa! 🧹</strong>
              </p>
            </>
          ) : null}

          {currentPage === 7 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                Mainnet es donde los tokens tienen valor real. Testnets son
                lugares donde los desarrolladores prueben sus contratos
                inteligentes.{" "}
                <strong>El token de Testnet no tiene valor. 🚀</strong>
              </p>
              <br />
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
              <br />
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
                Ahora, si quieres agregar otro selecciona{" "}
                <strong> Token personalizado. 📱 </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                ⚠️Hay <strong>redes que no son compatibles con Ethereum</strong>
                , como por ejemplo Bitcoin, Dogecoin o Cardano, por lo que no se
                pueden agregar a MetaMask y requieren su propia billetera⚠️
              </p>
              <p className="mt-6 text-xl leading-8">
                Y a continuación, introduce la información en el formulario tal
                y como aparece aquí:
              </p>
              <br />
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

          {currentPage === 8 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>👉 ¿Qué es Phantom? ¡Te lo contamos! </strong>
              </p>
              <br />
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

          {currentPage === 9 ? (
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
                  Haz clic en <strong>añadir a Chrome</strong> y añade la
                  extensión. Los pasos también son los mismos para otros
                  navegadores. Después de hacer clic en añadir extensión,
                  descarga el complemento en su PC y lo instalará en su
                  navegador. En este caso, es Chrome.
                </li>
                <li>
                  Después de que la extensión Phantom se instale en su
                  navegador, se abrirá automáticamente. Ahora, antes de crear
                  una nueva cartera, así es como puedes acceder a Phantom en tu
                  navegador. En la mayoría de los navegadores populares verás la
                  extensión en la esquina superior derecha.
                </li>
                <li>
                  También puede mirar en la barra de herramientas de su
                  navegador y en la sección de <strong>complementos</strong>. En
                  Chrome, en la esquina superior derecha, verás un icono de
                  rompecabezas.
                </li>
                <li>
                  Haz clic en él y verás la lista de extensiones instaladas.
                  Encuentra la extensión Phantom y haz clic en el &rdquo;icono de
                  pin&rdquo;. Se fijará la extensión en la parte superior y esto
                  debería facilitar la búsqueda y el acceso a Phantom en el
                  futuro. Ahora <strong>haz clic en el icono de Phantom</strong>{" "}
                  e inicia la configuración de la cartera.
                </li>
                <li>
                  La aplicación Phantom se iniciará en una nueva pestaña y
                  encontrarás dos opciones.
                  <strong>Crea una nueva billetera nueva</strong> y ya{" "}
                  <strong>tengo una billetera</strong>
                </li>
                <li>
                  Dado que estamos configurando una cartera nueva, elija{" "}
                  <strong>&rdquo;crear una cartera nueva</strong>&rdquo;. Si
                  usted es un usuario existente de Solana y anteriormente estaba
                  usando carteras como Sollet o Solflare, entonces puede usar su
                  frase de recuperación secreta para{" "}
                  <strong>
                    &rdquo;importar su billetera existente a Phantom&rdquo;
                  </strong>
                  , una billetera criptográfica reimaginada para DeFi y NFT e la
                  opción <strong>&rdquo;Ya tengo una billetera&rdquo;</strong>
                </li>
              </ul>
              <p className="mt-6 text-xl leading-8">
                <strong>NUEVA CARTERA</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Haz clic en <strong>crear una nueva cartera 🔑</strong> y en la
                siguiente pantalla la cartera te pedirá que{" "}
                <strong>crees una contraseña 🔒 </strong>que se utilizará para
                bloquear y desbloquear tu cartera.
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>🔐Establezca una contraseña segura 🔐.</strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                A continuación, lea y elija Acepto los{" "}
                <strong>Términos de Servicio 📜 </strong>y luego haga clic en{" "}
                <strong>Continuar ➡️</strong>.
              </p>
              <p className="mt-6 text-xl leading-8">
                Luego mostrará la frase de recuperación secreta 🔍 de 12
                palabras para usted. Para <strong>restaurar</strong> tu cartera
                Phantom en el futuro, necesitarás esta frase de recuperación. En
                caso de que alguien tenga acceso a esto o si lo pierdes,
                potencialmente perderás todos los fondos 💰 que tienes en tu
                Phantom.
              </p>
              <p className="mt-6 text-xl leading-8">
                Una vez que tengas las palabras iniciales aseguradas, haz clic
                en <strong>&rdquo;Continuar&rdquo; ➡️</strong>.
              </p>
              <p className="mt-6 text-xl leading-8">
                En la siguiente pantalla se te pedirá que crees una contraseña
                🔒 que se utilizará para bloquear y desbloquear tu cartera.
                Establezca una contraseña segura 🔐. A continuación, lea y elija{" "}
                <strong>Acepto los Términos de Servicio 📜</strong> y luego haga
                clic en <strong>Continuar ➡️</strong>.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡Todo ha terminado! Tu cartera Phantom está lista para usar.
                Haga clic en <strong>&rdquo;Terminar&rdquo;</strong> para
                completar la configuración de la cartera.
              </p>
            </>
          ) : null}

          {currentPage === 10 ? (
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
                Esta billetera no escatima en seguridad ¡Y eso es música para
                nuestros oídos criptográficos!
              </p>
              <p className="mt-6 text-xl leading-8">
                🔒 Con autenticación de doble factor, una frase-contraseña de
                doce palabras 🗝️, una función de bloqueo 🔐 y una copia de
                seguridad online 💾, podemos dormir tranquilos sabiendo que
                nuestras inversiones están seguras.
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
              <p className="mt-6 text-xl leading-8">
                Aquí te darán 12 palabras de seguridad que debes guardar como
                oro en paño. Te recomendamos que las escribas en un papel y las
                guardes en un lugar seguro, lejos de cualquier mirada indiscreta
                👀.
              </p>
              <p className="mt-6 text-xl leading-8">
                Te saldrá este aviso en donde te recomiendan resguardar bien las{" "}
                <strong>frases semillas</strong> que aparecerán a continuación
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>¡Y voilà!</strong> Ya estás listo para empezar a guardar
                tus Bitcoin y más de 200 criptomonedas en una de las mejores
                billeteras del mercado.
              </p>
              <p className="mt-6 text-xl leading-8">
                ¡No te preocupes por nada más, deja que Exodus se encargue del
                resto! 💰💻
              </p>
            </>
          ) : null}

          {currentPage === 11 ? (
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
              <p className="mt-6 text-xl leading-8">
                Para redactar instrucciones efectivas para ChatGPT, debes tener
                en cuenta la comunicación clara, la especificidad y las
                capacidades y limitaciones de la herramienta. Con los consejos y
                prácticas recomendadas que se encuentran en este libro
                electrónico, podrás crear instrucciones efectivas que te
                ayudarán a lograr tus objetivos. Así que ¡adelante, pon manos a
                la obra y haz que ChatGPT trabaje para ti! 🤖💪
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  ¿Listo para dominar el arte de los prompts en ChatGPT? Aquí
                  están los próximos pasos que necesitas tomar! 🚀🤖
                </strong>
              </p>
              <p className="mt-6 text-xl leading-8">
                Te dejamos los próximos pasos que debes seguir para seguir
                mejorando tus habilidades:
              </p>
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

          {currentPage === 12 ? (
            <>
              <p className="mt-6 text-xl leading-8">
                <strong>
                  Ahora te dejaremos dos pequeñas tareas para poder aprobar el
                  curso y tener tu certificado, ¡no te asustes, con todo lo que
                  has aprendido estamos seguras que lo obtendrás! 🎉
                </strong>
              </p>
              <br />
              <p className="mt-6 text-xl leading-8">
                Escribe un hilo de tweet sobre un tema de actualidad.
              </p>
              <p className="mt-6 text-xl leading-8">
                Comienza con una pregunta clara y sencilla para ChatGPT, como
                &rdquo;¿Puedes decirme cuál es el tema de actualidad más
                importante de hoy?&rdquo; (recuerda que ChatGPT está alimentado
                hasta el 2021)
              </p>
              <p className="mt-6 text-xl leading-8">
                Utiliza preguntas de seguimiento para obtener detalles
                específicos sobre el tema, como &rdquo;¿Cuáles son los
                principales aspectos de este tema que la gente necesita
                saber?&rdquo;, o &rdquo;¿Cuál es la postura oficial de los
                líderes en relación a este tema?&rdquo;
              </p>
              <p className="mt-6 text-xl leading-8">
                Mantén un tono respetuoso y coherente en todo momento para
                asegurarte de que ChatGPT no se desvíe de la conversación. Si se
                desvía, usa preguntas de seguimiento para que vuelva al tema
                original.
              </p>
              <p className="mt-6 text-xl leading-8">
                Utiliza el truco &rdquo;actúa como&rdquo; para hacer que ChatGPT
                se comporte como un periodista o experto en el tema. Por
                ejemplo, puedes preguntar: &rdquo;¿Qué crees que las personas
                deben hacer para abordar este problema?&rdquo; o &rdquo;¿Puedes
                compartir algún recurso útil para que las personas puedan
                profundizar en este tema?&rdquo;.
              </p>
              <p className="mt-6 text-xl leading-8">
                Utiliza la limitación de caracteres de Twitter para ayudar a los
                estudiantes a ser precisos y concisos en su escritura. Usa un
                hilo de 3 o 4 tweets sobre el tema y utiliza preguntas y
                respuestas para hacer que la conversación fluya de manera
                natural.
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

  const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "polygon");

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

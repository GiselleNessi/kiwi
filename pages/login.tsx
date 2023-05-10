import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Login() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const address = useAddress(); // Get the user's address

  const router = useRouter();
  const missingNft = router.query.missingNft === "true";

  useEffect(() => {
    // Check if the wallet is connected and the required NFT is not missing
    if (address && !missingNft) {
      // Store the user's address in local storage or set a cookie to indicate that they are logged in
      localStorage.setItem("userAddress", address);

      // Navigate to the Beta dApp automatically
      router.push("/");
    }
  }, [address, missingNft, router]);

  return (
    <section className="relative bg-black flex flex-col h-screen justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl text-white md:text-6xl font-extrabold mb-4"
              data-aos="zoom-y-out"
            >
              El futuro de la eduación
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-400 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Descubre, aprende y certifícate en la blockchain 🥝
              </p>
              <hr />
              <div className="flex text-center justify-center">
                <h2 className="text-white mt-6 text-xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
                    <a
                      href="https://www.cryptonikasdao.xyz/betapass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Mintea Kiwi betapass
                    </a>
                  </span>
                </h2>
                <ArrowUpRightIcon
                  className="mt-7 w-5 h-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-x-6">
                <ConnectWallet />
              </div>
              <br></br>

              <>
                {address ? (
                  <p className="text-white">
                    ¡Bievenidx, {address?.slice(0, 6)}...
                    {address?.slice(-4)}!
                  </p>
                ) : (
                  <p className="text-white">
                    Porfavor conecta tu wallet y luego haz sign in para
                    continuar.
                  </p>
                )}

                {missingNft && (
                  <p className="text-red-500 mt-2">
                    No tienes el NFT requerido. Por favor, asegúrate de tenerlo
                    en tu billetera.
                  </p>
                )}

                <p className="text-white mt-6 mb-10">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
                    Creado por{" "}
                    <a
                      href="https://www.cryptonikasdao.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Cryptonikas
                    </a>
                  </span>
                </p>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

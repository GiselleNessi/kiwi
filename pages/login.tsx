import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import logo from "../public/mientrastantologokiwi.png";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Login() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const address = useAddress(); // Get the user's address

  const router = useRouter();
  const missingNft = router.query.missingNft === "true";

  useEffect(() => {
    // Check if the wallet is connected and the required NFT is not missing
    if (address) {
      // Store the user's address in local storage or set a cookie to indicate that they are logged in
      localStorage.setItem("userAddress", address);

      // Navigate to the Beta dApp automatically
      router.push("/");
    }
  }, [address, router]);

  return (
    <>
      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className=""
                />
              </a>
            </div>
            

          </nav>
         
        </header>
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen" style={{ overflow: "hidden" }}>
          <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-26">
            
            <div className="text-center mt-20">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                El futuro de la educación
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Descubre, aprende y certifícate en la blockchain 🥝
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ConnectWallet
                  btnTitle="Log in"
                  auth={{
                    loginOptional: false,
                  }}
                />
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  ¿Eres creador? <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className=" sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full mt-10 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Creado por{" "}
                <a href="https://www.cryptonikasdao.xyz/"
                          target="_blank" className="font-semibold text-green-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Cryptonikas
                </a>
              </div>
            </div>

            <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-lime-200 to-lime-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          
            </div>
          </div>
          
        </div>
      </div>
    
    </>
  );
}

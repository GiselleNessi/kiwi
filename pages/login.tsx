import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { SVGProps, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import logo from "../public/mientrastantologokiwi.png";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



const navigation = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/CryptonikasDao',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
 
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCYsz3C6I6ilVhE0BmIVzDJA',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

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
            
            <div className="text-center">
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
                  href="https://calendly.com/cryptonikasdao/meeting-cks-founders"
                  target="_blank"
                  className="text-gray-300 hover:text-white border border-gray-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
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
              className="relative mt-6 mb-6 rounded-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src="https://lvpr.tv?v=7ed09qhe1r0cxivm"
                allowFullScreen
                allow="encrypted-media; picture-in-picture"
                sandbox="allow-scripts"
                className="absolute inset-0 w-full h-full rounded-lg"
              ></iframe>
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
        <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-300 hover:text-gray-400">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0 ">
          <p className="text-center text-xs leading-5 text-gray-300">
            &copy; 2023 Cryptonikas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      </div>
    
    </>
  );
}

import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/yourDetails";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

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
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                 Herramienta para creadores{' '}
                 <br></br>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
                “enseña-para-ganar”
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  A tool for hispanic creators, allow users to create,
                  share and learn, without worrying about their privacy.
                </p>
                <hr />
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <ConnectWallet />
                </div>
                <br></br>

                <>
                  {address ? (
                    <p className="text-white">
                      Bienvenidxs 🛸 , {address?.slice(0, 6)}...
                      {address?.slice(-4)}
                    </p>
                  ) : (
                    <p className="text-white">
                      Please connect your wallet and sign in to continue.
                    </p>
                  )}

                  {missingNft && address && (
                    <p className="text-red-500 mt-2">
                      No se encontró el NFT requerido. Por favor, asegúrese de
                      tener el NFT en su billetera.
                    </p>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

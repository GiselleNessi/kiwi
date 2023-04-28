import React, { ReactNode, useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAddress, useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../../auth.config";
import { useRouter } from "next/router";
import checkBalance from "../../utils/checkBalance";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import Layout from "../../components/Layout";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ChildProcess } from "child_process";
import Image from "next/image";
import profileImage from "../../public/favicon.ico"

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Comunidad",
    href: "https://discord.gg/d6Bp55mY",
    icon: UsersIcon,
    current: false,
    target: "_blank", 
  },
  
];
const teams = [
  {
    id: 1,
    name: "Chat GPT",
    href: "/dashboard/chatgpt",
    initial: "C",
    current: false,
  },
  {
    id: 2,
    name: "Wallets Digitales",
    href: "#",
    initial: "W",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();
  const address = useAddress(); // Get the user's address

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
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-950 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">🥝</div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Cursos
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-950 px-6">

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li className="mt-4">
                <a
                  href="#"
                  className="flex items-center gap-x-4 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                 
                   <Image
                src={profileImage}
                alt="Logo"
                width={8}
                height={8}
                className="h-8 w-8 rounded-full bg-gray-800"
              />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">
                  <p className="text-sm leading-8">
                Bienvenidxs
              
                  {" "}
                  {address?.slice(0, 6)}...{address?.slice(-4)}{" "}
              
              </p>
              </span>
                </a>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Cursos
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <ul role="list" className="-mx-6 mt-auto">
                {navigation.map((item) => (
                  <li key={item.name} className="ml-4 mt-2">
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                      target={item.target}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <li className="mb-6">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Menu
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <div>
            {children ? <div>{children}</div> : <><div className="text-center pt-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Móntate en la nave 🛸 comiendo Kiwi 🥝
                
              </h1>

            </div></>
            }
          </div>
        </div>
      </main>
    </div>
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

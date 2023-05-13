import React, { ReactNode, useEffect } from "react";
import { useAddress, useLogout, useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import profileImage from "../../public/favicon.ico";
import logo from "../../public/mientrastantologokiwi.png";
import homeImg from "../../public/coverhome.jpeg";
import Avatar, { genConfig } from "react-nice-avatar";

interface Feature {
  name: string;
  description: string[];
}

const navigation = [
  { name: "Inicio", href: "/", icon: HomeIcon, current: false },
  {
    name: "Comunidad",
    href: "https://t.me/+h34sjsoM2ZllNzZh",
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
    initial: "G",
    current: false,
  },
  {
    id: 2,
    name: "Ilustración Digital",
    href: "/dashboard/chama",
    initial: "C",
    current: false,
  },
];

const features: Feature[] = [
  {
    name: "Si eres un estudiante podrás:",
    description: [
      "👉 Aprender de manera simple y divertida",
      "👉 Recibir un certificado en forma de NFT",
      "👉 Conectar con otros estudiantes",
    ],
  },
  {
    name: "Si eres un creador de contenido educativo podrás:",
    description: [
      "👉 Subir tu contenido a la Blockchain",
      "👉 Tener la seguridad que tu contenido te pertenece",
      "👉 Crear un certificado en forma de NFT para tus estudiantes",
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  children: ReactNode;
};

const config = genConfig();

export default function Dashboard({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();
  const address = useAddress(); // Get the user's address
  //console.log('address:', address)
  const handleLogout = async () => {
    await logout();
    //console.log("Logged out");
    router.push("/login");
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  //console.log(isLoggedIn)

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
                  <Image
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="mt-6"
                  />

                  <div className="flex h-16 shrink-0 items-center">
                    <Avatar
                      style={{ width: "2rem", height: "2rem" }}
                      {...config}
                    />

                    <p className="ml-4 text-sm text-white leading-8">
                      {address?.slice(0, 6)}...{address?.slice(-4)}{" "}
                    </p>
                  </div>
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

                          {navigation.map((item) => (
                            <li key={item.name}>
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
                      </li>

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
            <ul role="list" className="flex flex-1 flex-col">
              <li className="flex justify-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mt-6"
                />
              </li>
              <li className="flex justify-center mt-4">
                <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
              </li>
              <li className=" flex justify-center mt-2">
                <p className="text-white ">Wallet address</p>
              </li>
              <li className="flex justify-center">
                <p className="text-sm leading-8 text-white">
                  {address?.slice(0, 6)}...{address?.slice(-4)}{" "}
                </p>
              </li>
              <li className="mt-6">
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

              <ul role="list" className="mt-auto mt-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
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

              <li className="mb-6 mt-6">
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

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-950 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
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
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <div>
            {children ? (
              <div>{children}</div>
            ) : (
              <>
                <div className="overflow-hidden bg-white">
                  <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                      <div className="px-6 md:px-0 lg:pr-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {" "}
                            Móntate en la nave 🛸
                            <br />
                            comiendo Kiwi 🥝
                          </p>
                          <p className="mt-6 text-lg leading-8 text-gray-600">
                            En Kiwi encontrarás varios cursos para poder
                            expandir tus conocimiento y habilidades. Nuestra
                            base de creadores de contenido sigue aumentanto, así
                            que revisa periodicamente la plataforma para que no
                            te pierdas sus cursos.
                          </p>
                          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            {features.map((feature) => (
                              <div key={feature.name} className="relative">
                                <dt className="inline font-semibold text-gray-900">
                                  {feature.name}
                                </dt>{" "}
                                <dd className="inline">
                                  <ul>
                                    {feature.description.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>

                      <div className="sm:px-6 lg:px-0 flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          <Image
                            src={homeImg}
                            alt="Logo"
                            width={600}
                            height={600}
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            className="w-full h-auto max-w-xl rounded-xl mt-2 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

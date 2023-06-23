import { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import { Disclosure, Menu, Transition } from "@headlessui/react";
import "../Style/Home.css";
// eslint-disable-next-line no-unused-vars
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { Dropdown } from "flowbite-react";
const logo = require("../img/logo.png");
const isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn")

const navigation = [
  { name: "Home", href: "/", current: false },
  // { name: "Fill out the AMRRI form", href: "/form", current: false },
  { name: "All the Researches", href: "/adminallresearch", current: false },
  { name: "Approved Researches", href: "/adminapproved", current: false },
  { name: "Rejected Researches", href: "/adminrejected", current: false },
//   { name: "Portal", href: "/user", current: false },
//   { name: "Update Profile", href: "/profile", current: false },
  { name: isUserLoggedIn ? "Logout" : "Login", href: isUserLoggedIn ? "/logout": "/login", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <Disclosure as="nav" className="fixed bg-gray-100 shadow-lg w-[100%]">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-24">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-rose-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="block w-auto h-20 lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden w-auto h-20 lg:block"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden mt-5 sm:ml-6 sm:block">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="amr">
                        <h1>AMRRI</h1>
                      </div>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-rose-900 hover:text-white",
                            "rounded-md px-3 py-2 text-l font-large"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* <div className="flex items-center flex-shrink-0" ml-9 mt-4>
                    <Dropdown label="Your Profile">
                      <Link to="/profile">
                        <Dropdown.Item>Update Profile</Dropdown.Item>
                      </Link>
                      <Link to="/profile">
                        <Dropdown.Item>Your Researches</Dropdown.Item>
                      </Link>
                      <Link to="/profile">
                        <Dropdown.Item>Research Status</Dropdown.Item>
                      </Link>
                    </Dropdown>
                  </div> */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-black-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-large"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

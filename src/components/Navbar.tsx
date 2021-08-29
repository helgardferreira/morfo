import React, { Fragment, FunctionComponent, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { MouseEventHandler } from "hoist-non-react-statics/node_modules/@types/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavLogo: FunctionComponent<{ src: [string, string]; alt: string }> = (
  props
) => {
  const {
    src: [srcSmall, srcLarge],
    alt,
  } = props;

  return (
    <div className="flex-shrink-0">
      <img className="block lg:hidden h-8 w-auto" src={srcSmall} alt={alt} />
      <img className="hidden lg:block h-8 w-auto" src={srcLarge} alt={alt} />
    </div>
  );
};

const NavLink: FunctionComponent<{
  href: string;
  active?: boolean;
  full?: boolean;
  onClick?: MouseEventHandler;
}> = (props) => {
  const { children, href, active, full, onClick } = props;

  return (
    <a
      href={href}
      className={classNames(
        active
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        full ? "block text-base" : "text-sm",
        "font-medium px-3 py-2 rounded-md"
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

interface ISearchProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const NavSearch = React.forwardRef<HTMLInputElement, ISearchProps>(
  ({ placeholder = "Search", name = "search", value, onChange }, ref) => {
    return (
      <div className="max-w-lg w-full lg:max-w-xs">
        <label htmlFor={name} className="sr-only">
          {placeholder}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={ref}
            id={name}
            name={name}
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
            placeholder={placeholder}
            type="search"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
);

const NavMobileButton: FunctionComponent<{ open: boolean }> = (props) => {
  const { open } = props;

  return (
    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

const NavNotificationButton: FunctionComponent<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  desc?: string;
}> = (props) => {
  const { onClick, desc = "Icon button" } = props;

  return (
    <button
      type="button"
      className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      onClick={onClick}
    >
      <span className="sr-only">{desc}</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

interface INavAvatarProps {
  desc?: string;
  src?: string;
  links?: { href: string; label: string }[];
}

const NavAvatarMenu: FunctionComponent<INavAvatarProps> = (props) => {
  const {
    desc = "Open user menu",
    src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    links = [],
  } = props;

  return (
    <Menu as="div" className="ml-4 relative flex-shrink-0">
      <div>
        <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">{desc}</span>
          <img className="h-8 w-8 rounded-full" src={src} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link) => (
            <Menu.Item key={link.label}>
              {({ active }) => (
                <a
                  href={link.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const NavAvatar: FunctionComponent<{
  email?: string;
  name?: string;
  src?: string;
}> = (props) => {
  const {
    email = "tom@example.com",
    name = "Tom Cook",
    src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  } = props;

  return (
    <>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={src} alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-white">{name}</div>
        <div className="text-sm font-medium text-gray-400">{email}</div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [currentLink, setCurrentLink] = useState("Dashboard");
  const [search, setSearch] = useState("");

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <NavLogo
                  src={[
                    "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                    "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
                  ]}
                  alt="Workflow"
                />
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      href="#"
                      onClick={() => setCurrentLink("Dashboard")}
                      active={currentLink === "Dashboard"}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      href="#"
                      onClick={() => setCurrentLink("Team")}
                      active={currentLink === "Team"}
                    >
                      Team
                    </NavLink>
                    <NavLink
                      href="#"
                      onClick={() => setCurrentLink("Projects")}
                      active={currentLink === "Projects"}
                    >
                      Projects
                    </NavLink>
                    <NavLink
                      href="#"
                      onClick={() => setCurrentLink("Calendar")}
                      active={currentLink === "Calendar"}
                    >
                      Calendar
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <NavSearch
                  name="search"
                  placeholder="Search"
                  value={search}
                  onChange={setSearch}
                />
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <NavMobileButton open={open} />
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <NavNotificationButton
                    desc="View notifications"
                    onClick={() => console.log("Notifications clicked")}
                  />

                  {/* Profile dropdown */}
                  <NavAvatarMenu
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    desc="Open user menu"
                    links={[
                      {
                        label: "Your Profile",
                        href: "#",
                      },

                      {
                        label: "Settings",
                        href: "#",
                      },

                      {
                        label: "Sign Out",
                        href: "#",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                href="#"
                onClick={() => setCurrentLink("Dashboard")}
                active={currentLink === "Dashboard"}
                full
              >
                Dashboard
              </NavLink>
              <NavLink
                href="#"
                onClick={() => setCurrentLink("Team")}
                active={currentLink === "Team"}
                full
              >
                Team
              </NavLink>
              <NavLink
                href="#"
                onClick={() => setCurrentLink("Projects")}
                active={currentLink === "Projects"}
                full
              >
                Projects
              </NavLink>
              <NavLink
                href="#"
                onClick={() => setCurrentLink("Calendar")}
                active={currentLink === "Calendar"}
                full
              >
                Calendar
              </NavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <NavAvatar
                  email="tom@example.com"
                  name="Tom Cook"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />

                <div className="ml-auto">
                  <NavNotificationButton
                    desc="View notifications"
                    onClick={() => console.log("Notifications clicked")}
                  />
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <NavLink href="#" full>
                  Your Profile
                </NavLink>
                <NavLink href="#" full>
                  Settings
                </NavLink>
                <NavLink href="#" full>
                  Sign Out
                </NavLink>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

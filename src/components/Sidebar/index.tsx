import { FunctionComponent, Fragment, useState } from "react";

// Components
import { Dialog, Transition } from "@headlessui/react";
import Logo from "./Logo";
import {
  NotificationButton,
  SidebarCloseButton,
  SidebarOpenButton,
} from "./Buttons";
import { MenuLink } from "./Links";
import UserMenu from "./UserMenu";
import SearchBar from "../formFields/SearchBar";

// Custom hooks
import useDarkMode from "../../hooks/useDarkMode";

// Typings
import { ILink } from "../../types";

interface IProps {
  menuLinks: ILink[];
  userLinks: ILink[];
}

const Sidebar: FunctionComponent<IProps> = (props) => {
  const { menuLinks, userLinks } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("Dashboard");

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  console.log({ isDarkMode });

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          {/* Mobile sidebar overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Clicking on the overlay will close the Dialog */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 max-w-xs w-full flex flex-col pt-5 pb-4 bg-white">
              {/* Mobile sidebar close button */}
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <SidebarCloseButton onClick={() => setSidebarOpen(false)} />
                </div>
              </Transition.Child>

              {/* Logo */}
              <Logo
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />

              {/* Mobile sidebar navigation */}
              <SidebarNavigation>
                {menuLinks.map((item) => (
                  <MenuLink
                    key={item.name}
                    active={item.name === currentLink}
                    small
                    href={item.href}
                    icon={item.icon}
                    name={item.name}
                    onClick={() => {
                      if (item.name === currentLink) setIsDarkMode(!isDarkMode);
                      setCurrentLink(item.name);
                    }}
                  />
                ))}
              </SidebarNavigation>
            </div>
          </Transition.Child>

          {/* Dummy element to force sidebar to shrink to fit close icon */}
          <div className="flex-shrink-0 w-14" aria-hidden="true" />
        </Dialog>
      </Transition.Root>

      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="w-64 overflow-y-auto border-r border-gray-200 flex-grow flex flex-col pt-5 pb-4 bg-white">
          {/* Logo */}
          <Logo
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />

          <SidebarNavigation>
            {menuLinks.map((item) => (
              <MenuLink
                key={item.name}
                active={item.name === currentLink}
                href={item.href}
                icon={item.icon}
                name={item.name}
                onClick={() => {
                  if (item.name === currentLink) setIsDarkMode(!isDarkMode);
                  setCurrentLink(item.name);
                }}
              />
            ))}
          </SidebarNavigation>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <SidebarOpenButton onClick={() => setSidebarOpen(true)} />
          <div className="flex-1 px-4 flex justify-between">
            <form className="flex flex-1">
              <SearchBar name="siteSearch" placeholder="Search" />
            </form>
            <div className="ml-4 flex items-center md:ml-6">
              <NotificationButton />

              {/* Profile dropdown */}
              <UserMenu
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                userLinks={userLinks}
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <MainContentBlock>
              {/* Page Heading */}
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </MainContentBlock>
            <MainContentBlock>
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
            </MainContentBlock>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarNavigation: FunctionComponent = ({ children }) => (
  <div className="mt-5 flex-1 h-0 overflow-y-auto">
    <nav className="px-2">{children}</nav>
  </div>
);

const MainContentBlock: FunctionComponent = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
);

export default Sidebar;

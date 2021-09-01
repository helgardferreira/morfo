import { FunctionComponent, Fragment } from "react";

// Components
import { Menu, Transition } from "@headlessui/react";
import { UserLink } from "./Links";

// Typings
import { ILink } from "../../types";

interface IUserMenuProps {
  userLinks: ILink[];
  src?: string;
}
const UserMenu: FunctionComponent<IUserMenuProps> = ({
  userLinks,
  src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}) => (
  <Menu as="div" className="ml-3 relative">
    <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="sr-only">Open user menu</span>
      <img className="h-8 w-8 rounded-full" src={src} alt="" />
    </Menu.Button>
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
        {userLinks.map((item) => (
          <UserLink key={item.name} name={item.name} href={item.href} />
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
);

export default UserMenu;

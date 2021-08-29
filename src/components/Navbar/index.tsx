import { useState, FunctionComponent } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavMobileButton from "./NavMobileButton";
import NavAvatarMenu from "./NavAvatarMenu";
import NavAvatar from "./NavAvatar";
import SearchField from "../SearchField";
import IconButton from "../IconButton";

interface ILink {
  label: string;
  href: string;
}

interface IUser {
  email: string;
  name: string;
}

interface IProps {
  menuLinks: ILink[];
  avatarLinks: ILink[];
  user: IUser;
}

const avatarSrc =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const smallLogo =
  "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg";
const largeLogo =
  "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg";

const Navbar: FunctionComponent<IProps> = (props) => {
  const { menuLinks, avatarLinks, user } = props;

  const [currentLink, setCurrentLink] = useState("Dashboard");
  const [search, setSearch] = useState("");

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Left navbar */}
              <div className="flex items-center px-2 lg:px-0">
                <NavLogo
                  srcSmall={smallLogo}
                  srcLarge={largeLogo}
                  alt="Workflow"
                />
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {menuLinks.map((link) => (
                      <NavLink
                        key={link.label}
                        href={link.href}
                        onClick={() => setCurrentLink(link.label)}
                        active={currentLink === link.label}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right navbar */}
              <>
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                  <SearchField
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={setSearch}
                  />
                </div>

                <div className="hidden lg:block lg:ml-4">
                  <div className="flex items-center">
                    <IconButton
                      desc="View notifications"
                      onClick={() => console.log("Notifications clicked")}
                      icon={<BellIcon className="h-6 w-6" aria-hidden="true" />}
                    />

                    <NavAvatarMenu
                      src={avatarSrc}
                      desc="Open user menu"
                      links={avatarLinks}
                    />
                  </div>
                </div>
              </>

              {/* Mobile nav button */}
              <div className="flex lg:hidden">
                <NavMobileButton open={open} />
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          <Disclosure.Panel className="lg:hidden">
            {/* Menu section */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuLinks.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setCurrentLink(link.label)}
                  active={currentLink === link.label}
                  full
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            {/* Avatar section */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <NavAvatar
                  email={user.email}
                  name={user.name}
                  src={avatarSrc}
                />

                <div className="ml-auto">
                  <IconButton
                    desc="View notifications"
                    onClick={() => console.log("Notifications clicked")}
                    icon={<BellIcon className="h-6 w-6" aria-hidden="true" />}
                  />
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {avatarLinks.map((link) => (
                  <NavLink key={link.label} href={link.href} full>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

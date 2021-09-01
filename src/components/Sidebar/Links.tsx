import { MouseEventHandler, FunctionComponent } from "react";

// Icon Components
import { Menu } from "@headlessui/react";

// Utils
import { classNames } from "../../utils/classNames";

// Typings
import { ILink } from "../../types";

interface IMenuLinkProps extends ILink {
  active: boolean;
  small?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const MenuLink: FunctionComponent<IMenuLinkProps> = (props) => {
  const { active, href, name, small, onClick } = props;

  return (
    <a
      href={href}
      className={classNames(
        active
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        small ? "text-sm" : "text-base",
        "group flex items-center px-2 py-2 font-medium rounded-md mt-1"
      )}
      onClick={onClick}
    >
      {props.icon && (
        <props.icon
          className={classNames(
            active
              ? "text-gray-500"
              : "text-gray-400 group-hover:text-gray-500",
            small ? "mr-3" : "mr-4",
            "flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
      )}
      {name}
    </a>
  );
};

export const UserLink: FunctionComponent<ILink> = ({ href, name }) => (
  <Menu.Item>
    {({ active }) => (
      <a
        href={href}
        className={classNames(
          active ? "bg-gray-100" : "",
          "block px-4 py-2 text-sm text-gray-700"
        )}
      >
        {name}
      </a>
    )}
  </Menu.Item>
);

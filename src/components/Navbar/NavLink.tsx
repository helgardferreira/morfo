import { FunctionComponent } from "react";
import { MouseEventHandler } from "hoist-non-react-statics/node_modules/@types/react";
import { classNames } from "../../utils/classNames";

interface IProps {
  href: string;
  active?: boolean;
  full?: boolean;
  onClick?: MouseEventHandler;
}

const NavLink: FunctionComponent<IProps> = (props) => {
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

export default NavLink;

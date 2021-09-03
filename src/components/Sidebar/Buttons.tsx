import { MouseEventHandler, FunctionComponent } from "react";

// Icon Components
import { XIcon, MenuAlt2Icon } from "@heroicons/react/outline";

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SidebarCloseButton: FunctionComponent<IButtonProps> = ({
  onClick,
}) => (
  <button
    type="button"
    className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    onClick={onClick}
  >
    <span className="sr-only">Close sidebar</span>
    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
  </button>
);

export const SidebarOpenButton: FunctionComponent<IButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={onClick}
    >
      <span className="sr-only">Open sidebar</span>
      <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

interface IHeaderButtonProps extends IButtonProps {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

export const HeaderButton: FunctionComponent<IHeaderButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={onClick}
    >
      <span className="sr-only">View notifications</span>

      <props.icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

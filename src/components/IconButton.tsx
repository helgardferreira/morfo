import { FunctionComponent } from "react";
import { MouseEventHandler } from "hoist-non-react-statics/node_modules/@types/react";

const IconButton: FunctionComponent<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  desc?: string;
  icon: JSX.Element;
}> = (props) => {
  const { onClick, desc = "Button", icon } = props;

  return (
    <button
      type="button"
      className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      onClick={onClick}
    >
      <span className="sr-only">{desc}</span>
      {icon}
    </button>
  );
};

export default IconButton;

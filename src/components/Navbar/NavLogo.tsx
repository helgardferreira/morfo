import { FunctionComponent } from "react";

interface IProps {
  srcSmall: string;
  srcLarge: string;
  alt: string;
}

const NavLogo: FunctionComponent<IProps> = (props) => {
  const { srcSmall, srcLarge, alt } = props;

  return (
    <div className="flex-shrink-0">
      <img className="block lg:hidden h-8 w-auto" src={srcSmall} alt={alt} />
      <img className="hidden lg:block h-8 w-auto" src={srcLarge} alt={alt} />
    </div>
  );
};

export default NavLogo;

import { FunctionComponent } from "react";

interface ILogoProps {
  src: string;
  alt: string;
}

const Logo: FunctionComponent<ILogoProps> = ({ src, alt }) => (
  <div className="flex items-center flex-shrink-0 px-4">
    <img className="h-8 w-auto" src={src} alt={alt} />
  </div>
);

export default Logo;

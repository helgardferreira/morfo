import { FunctionComponent } from "react";

interface ILogoProps {
  src: string;
  darkSrc: string;
  alt: string;
  isDark?: boolean;
}

const Logo: FunctionComponent<ILogoProps> = ({ darkSrc, src, alt, isDark }) => (
  <div className="flex items-center flex-shrink-0 px-4 h-16 dark:bg-gray-800">
    <img className="h-8 w-auto" src={isDark ? darkSrc : src} alt={alt} />
  </div>
);

export default Logo;

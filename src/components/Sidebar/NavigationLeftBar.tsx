import React, { FunctionComponent } from "react";
import { SidebarNavigation } from ".";
import { ILink } from "../../types";
import { MenuLink } from "./Links";
import Logo from "./Logo";

interface IProps {
  currentLink: string;
  isDarkMode: boolean;
  menuLinks: ILink[];
  onClick: (itemName: string) => void;
}

export const NavigationLeftBar: FunctionComponent<IProps> = (props) => {
  const { currentLink, isDarkMode, menuLinks, onClick } = props;
  return (
    <>
      <Logo
        darkSrc="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
        isDark={isDarkMode}
      />
      <SidebarNavigation>
        {menuLinks.map((item) => (
          <MenuLink
            key={item.name}
            active={item.name === currentLink}
            small
            href={item.href}
            icon={item.icon}
            name={item.name}
            onClick={() => onClick(item.name)}
          />
        ))}
      </SidebarNavigation>
    </>
  );
};

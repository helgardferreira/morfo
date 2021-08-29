import React from "react";

export interface ILink {
  name: string;
  href: string;
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
}

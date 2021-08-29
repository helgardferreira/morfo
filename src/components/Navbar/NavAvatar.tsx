import { FunctionComponent } from "react";

const NavAvatar: FunctionComponent<{
  email?: string;
  name?: string;
  src?: string;
}> = (props) => {
  const {
    email = "tom@example.com",
    name = "Tom Cook",
    src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  } = props;

  return (
    <>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={src} alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-white">{name}</div>
        <div className="text-sm font-medium text-gray-400">{email}</div>
      </div>
    </>
  );
};

export default NavAvatar;

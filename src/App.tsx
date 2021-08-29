// import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";

const menuLinks = [
  {
    label: "Dashboard",
    href: "#",
  },
  {
    label: "Team",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Calendar",
    href: "#",
  },
];

const avatarLinks = [
  {
    label: "Your Profile",
    href: "#",
  },

  {
    label: "Settings",
    href: "#",
  },

  {
    label: "Sign Out",
    href: "#",
  },
];

function App() {
  return (
    <div>
      <Navbar
        menuLinks={menuLinks}
        avatarLinks={avatarLinks}
        user={{
          email: "tom@example.com",
          name: "Tom Cook",
        }}
      />
      <header>{/* <Counter /> */}</header>
    </div>
  );
}

export default App;

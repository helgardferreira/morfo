import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/outline";

// import { Counter } from "./features/counter/Counter";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ILink } from "./types";

const menuLinks: ILink[] = [
  { name: "Dashboard", href: "#", icon: HomeIcon },
  { name: "Team", href: "#", icon: UsersIcon },
  { name: "Projects", href: "#", icon: FolderIcon },
  { name: "Calendar", href: "#", icon: CalendarIcon },
];
const userLinks: ILink[] = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function App() {
  return (
    <div>
      {/* <Navbar
        menuLinks={menuLinks}
        userLinks={userLinks}
        user={{
          email: "tom@example.com",
          name: "Tom Cook",
        }}
      /> */}
      <Sidebar menuLinks={menuLinks} userLinks={userLinks} />
      <header>{/* <Counter /> */}</header>
    </div>
  );
}

export default App;

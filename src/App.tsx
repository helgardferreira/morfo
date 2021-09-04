import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/outline";

// import { Counter } from "./features/counter/Counter";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
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
      <Sidebar menuLinks={menuLinks} userLinks={userLinks}>
        <div className="py-4">
          <Table />
        </div>
      </Sidebar>
    </div>
  );
}

export default App;

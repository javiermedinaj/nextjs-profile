import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";
import { Works } from "./components/Works";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4">
        <Profile />
        <Posts />
        <Works />
      </div>
    </div>
  );
}

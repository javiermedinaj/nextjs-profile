import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

export default function Home() {
  return (
    <Loader>
      <div className="min-h-screen bg-dark text-foreground noise-bg">
        <Profile />
        <Works />
        <Posts />
      </div>
    </Loader>
  );
}

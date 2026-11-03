import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";
import { Works } from "./components/Works";
import { Cloud } from "./components/Cloud";
import { Skills } from "./components/Skills";
import { Loader } from "./components/Loader";

export default function Home() {
  return (
    <Loader>
      <div className="mx-auto flex max-w-5xl flex-col gap-14 px-4 py-10 md:gap-16 md:py-16">
        <Profile />
        <Works />
        <Cloud />
        <Skills />
        <Posts />
      </div>
    </Loader>
  );
}

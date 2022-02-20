import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  const activeLink = router.query.genre;

  return (
    <nav className="relative">
      <div className="flex px-5 pb-2 space-x-10 overflow-x-scroll text-2xl whitespace-nowrap sm:px-20 sm:space-x-20 scrollbar-hide">
        {Object.entries(requests)?.map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className={`${
              activeLink === key && "text-green-500"
            } transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500`}
          >
            {title}
          </h2>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-slate-900" />
    </nav>
  );
};

export default Nav;

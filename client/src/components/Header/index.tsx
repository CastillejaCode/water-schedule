import { useDesktopWidth } from "@/hooks/useDesktopWidth";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [width] = useDesktopWidth();
  return (
    <header className="flex min-w-full items-center justify-between border-b border-gray-700 bg-gray-900/20 p-3 text-gray-900 shadow-sm">
      <Link
        className="pl-2 text-2xl font-medium xl:text-3xl"
        to="/home"
        aria-label="Navigate to home"
      >
        Hydration
      </Link>
      <nav className="flex gap-4 px-2">
        {!width && (
          <Link
            to="/plants"
            className={`text-xl font-medium xl:text-2xl ${
              location.pathname !== "/plants" && "text-gray-900/70"
            }`}
          >
            Plants
          </Link>
        )}
        <Link
          to="/user"
          className={`text-xl font-medium xl:text-2xl  ${
            location.pathname !== "/user" && "text-gray-900/70"
          }`}
        >
          User
        </Link>
      </nav>
    </header>
  );
};

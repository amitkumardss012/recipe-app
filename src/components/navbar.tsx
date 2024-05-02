import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Back Button */}
          <div className="flex-shrink-0">
            {location.pathname === "/" ? (
              <p className="text-white font-bold text-lg">Recipe Website</p>
            ) : (
              <i
                className="fa-solid fa-arrow-left font-extrabold text-2xl text-white cursor-pointer"
                onClick={handleGoBack}
              ></i>
            )}
          </div>
          {/* Navigation links */}
          <div>
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass font-bold text-white text-2xl cursor-pointer"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

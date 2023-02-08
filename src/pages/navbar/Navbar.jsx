import Link from "react-router-dom";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/">
          <MoneyRoundedIcon />
        </Link>
        <LightModeRoundedIcon />
      </div>
    </nav>
  );
};

export default Navbar;

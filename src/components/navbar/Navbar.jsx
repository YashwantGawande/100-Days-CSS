import Link from "react-router-dom";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/">
          <MoneyRoundedIcon />
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;

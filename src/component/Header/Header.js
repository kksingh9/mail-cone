//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ReorderIcon from "@mui/icons-material/Reorder";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch } from "react-redux";
import { IconButton, Avatar } from "@mui/material";
import { authSliceActions } from "../../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes["header-left"]}>
          {/* <AccessAlarmIcon /> */}
          <IconButton>
            <ReorderIcon />
          </IconButton>

          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/28f079101541375.5f213137aab68.jpg"
            alt="logo"
            height={51}
            width={81}
          ></img>
        </div>
        <div className={classes.search}>
          <div className={classes["search-email"]}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input type="text" placeholder="search email" />
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes["header-right"]}>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={logoutHandler}>
            <Avatar
              src="https://wallpaperaccess.com/full/841369.jpg"
              className={classes.width}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;

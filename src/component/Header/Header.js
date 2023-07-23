//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ReorderIcon from '@mui/icons-material/Reorder';
import classes from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

import { IconButton, Avatar } from '@mui/material';

const Header = () => {
    return (
        <>
        <div className={classes.header}>
            <div className={classes["header-left"]}>
            {/* <AccessAlarmIcon /> */}
            <IconButton>
            <ReorderIcon />
            </IconButton>
           
            <img src='https://duet-cdn.vox-cdn.com/thumbor/0x0:1320x880/640x427/filters:focal(660x440:661x441):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' alt='logo' height={51} width={51}  ></img>
            </div>
        <div className={classes.search}>
            <div className={classes["search-email"]}>
            <IconButton>
            <SearchIcon />
            </IconButton>
            <input type="text" placeholder='search email' />
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
            
            <Avatar src='https://wallpaperaccess.com/full/841369.jpg' className={classes.width} />
        </div>
        </div >
        </>
    )
};

export default Header;
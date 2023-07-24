import "./Emaildetail.css";
import { IconButton, Avatar} from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Emaildetail = () => {
    const navigate = useHistory();
    const emaildetail = useSelector(state => state.inboxmail.emaildetail)
    const backHandler = () => {
        navigate.push("/")
    }
    return (
        <div>
              <div className='emaillist__settings'>
        <div className='setting__left'>
            <IconButton onClick={backHandler}>
                <ArrowBackIcon  />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
           
           
        </div>
        <div className='setting__right'>
        <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <p>1-50 of 100</p>
            <IconButton>
                <ChevronRightIcon/>
            </IconButton>
        </div>
    </div>
    <div className="emaildetails__message">
    <div className="emaildetails__header">
        <div className="emaildetails__headerLeft">
            <h4>{emaildetail.subject}</h4>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>
        <div className="emaildetails__headerRight">
            
            <IconButton>
                <PrintIcon />
            </IconButton>
            <IconButton>
                <LaunchIcon />
            </IconButton>
        </div>
        
    </div>
        <div className="emaildetails__middleheader">
            <div className="emaildetails__middleheaderLeft">
                <IconButton>
                    <Avatar/>
                </IconButton>
                <h4>{emaildetail.subject}</h4>
                <p>{emaildetail.name}</p>
            </div>
            <div className="emaildetails__middleheaderRight">
                <p>{emaildetail.time}</p>
                <IconButton>
                    <StarIcon />
                </IconButton>
                <IconButton>
                    <ReplyIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
            </div>
            
            
        </div>
        <div className="emaildetails__body">
        <span className='htmleditor' dangerouslySetInnerHTML={{ __html: emaildetail.description}}/>
            </div>
        </div>
    </div>
    )
};

export default Emaildetail;
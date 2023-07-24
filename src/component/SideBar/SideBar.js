import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./sidebar.css";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { composeSliceActions } from "../../store/compose";

function SideBar() {
  const dispatch = useDispatch();
  const totalmail = useSelector(state => state.inboxmail.totalmail);
  const sentmail = useSelector(state => state.inboxmail.inboxmail);
    console.log(totalmail);
  const composeHandler = () => {
    dispatch(composeSliceActions.showEditor());
  };
  const sendHandler = () => {
    dispatch(composeSliceActions.addmail(sentmail));
  }
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={composeHandler}
      >
        Compose
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title={"Inbox"}
        number={totalmail}
        isactive={true}
      />
      <SidebarOptions Icon={StarRateIcon} title={"Starred"} number={235} />
      <SidebarOptions Icon={WatchLaterIcon} title={"Snoozed"} number={634} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number={134}
      />
      <SidebarOptions Icon={SendIcon} title={"sent"} number={334}  onClick={sendHandler} />
      <SidebarOptions Icon={DraftsIcon} title={"Draft"} number={34} />
      <SidebarOptions Icon={LabelIcon} title={"Category"} number={24} />
      <SidebarOptions Icon={DeleteIcon} title={"Trash"} number={23} />
      <SidebarOptions Icon={FindInPageIcon} title={"Documents"} number={24} />
      <SidebarOptions Icon={ExpandMoreIcon} title={"More"} number={44} />
      <hr className="hroptions"></hr>
      <h3 className="sidebaroptions__heading">Meet</h3>

      <SidebarOptions Icon={VideocamIcon} title={"New meeting"} number={44} />
      <SidebarOptions
        Icon={KeyboardIcon}
        title={"Join a meeting"}
        number={44}
      />
    </div>
  );
}

export default SideBar;

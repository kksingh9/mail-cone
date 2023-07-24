import React from "react";
import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelIcon from "@mui/icons-material/Label";
import { inboxmailSliceActions } from "../../store/inboxmail";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function EmailBody({ email, subject, description, time, id, read }) {
  const dispatch = useDispatch();
  const navigate = useHistory();
  //const readcolor = useSelector((state) => state.inboxmail.emaildetail);
  //console.log(readcolor);
  const emailHandler = () => {
    dispatch(
      inboxmailSliceActions.emailDetail({
        id,
        email,
        subject,
        description,
        time,
        read,
      })
    );
    navigate.push("/mail");
  };
  return (
    <div className="emailbody" onClick={emailHandler} >
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
       <StarBorderIcon style={{color : read? "blue" : "red" }} /> 
        <LabelIcon />

        <h4>{email}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>{subject}</b>
            <span
              className="htmleditor"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailBody;

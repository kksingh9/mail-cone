import React, { Fragment } from "react";
import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import { inboxmailSliceActions } from "../../store/inboxmail";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
function EmailBody({ email, subject, description, time, id, read }) {
  const dispatch = useDispatch();
  const navigate = useHistory();
  //const readcolor = useSelector((state) => state.inboxmail.emaildetail);
  //console.log(readcolor);
  const deleteHandler = async(id) => {
    try {
      const response = await fetch(
        `https://mail-box-43bb3-default-rtdb.firebaseio.com/mail/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }
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
    <Fragment>
      <div className="body">
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
        <div className="delete">
        <IconButton onClick={() => {deleteHandler(id)}}>
            <DeleteIcon />
            </IconButton>
        </div>
      </div>
    </Fragment>
    
  );
}

export default EmailBody;

import React, { Fragment, useEffect } from "react";
import "./EmailList.css";
import EmailSetting from "../EmailSetting/EmailSetting";
import EmailType from "../EmailType/EmailType";
import EmailBody from "../EmailBody/EmailBody";
import { inboxmailSliceActions } from "../../store/inboxmail";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../customHook/useFetch";
//import { Link } from "react-router-dom";

function EmailList() {
  const dispatch = useDispatch();
  const inboxmail = useSelector((state) => state.inboxmail.inboxmail);
  console.log(inboxmail);
  const [data] = useFetch("https://mail-box-43bb3-default-rtdb.firebaseio.com/mail.json")
      dispatch(inboxmailSliceActions.addmail(data));
  return (
    <div className="emaillist">
      <EmailSetting />
      <EmailType />
      {inboxmail && inboxmail.map((item) => (
        <Fragment key={item.id}>
          <EmailBody
            id={item.id}
            email={item.email}
            subject={item.subject}
            description={item.description}
            read={item.read}
            time={new Date(item.time).toLocaleTimeString()}
          />
        </Fragment>
      ))}
    </div>
  );
}

export default EmailList;

import React from "react";
import "./EmailType.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function EmailType() {
  return (
    <div className="emailtype">
      <div className="emailtype__options emailtype__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__options">
        <LocalOfferIcon />
        <p>Promotion</p>
      </div>
    </div>
  );
}

export default EmailType;

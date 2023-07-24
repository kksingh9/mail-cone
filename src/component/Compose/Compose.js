import React from "react";
import "./Compose.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { composeSliceActions } from "../../store/compose";

function Compose() {
  const dispatch = useDispatch();
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const [enterEmail, setenterEmail] = useState({
    title: "",
  });
  const [subject, setSubject] = useState("");

  const emailHandler = (e) => {
    setenterEmail({
      ...enterEmail,
      [e.target.name]: e.target.value,
    });
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        "https://mail-box-43bb3-default-rtdb.firebaseio.com/mail.json",
        {
          method: "POST",
          body: JSON.stringify({
            email: enterEmail.title,
            subject: subject,
            description: enterEmail.description.value,
            time: new Date(),
            localtime: new Date().toLocaleTimeString(),
          }),
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
    dispatch(composeSliceActions.hideEditor());
  };
  const hideHandler = () => {
    dispatch(composeSliceActions.hideEditor());
  };
  return (
    <form className="compose" onSubmit={onSubmitHandler}>
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={hideHandler} />
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyform">
          <input
            type="email"
            name="title"
            placeholder="Recipients"
            value={enterEmail.title}
            onChange={emailHandler}
          />
          <input
            type="text"
            placeholder="subject"
            value={subject}
            onChange={subjectHandler}
          />
          <div className="editor">
            <Editor
              editorState={description}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
            <textarea
              style={{ display: "none" }}
              disabled
              ref={(val) => (enterEmail.description = val)}
              value={draftToHtml(convertToRaw(description.getCurrentContent()))}
            />
          </div>
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footerLeft">
          <button type="submit">
            Send <ArrowDropDownIcon />
          </button>
        </div>
        <div className="compose__footerRight">
          <AttachFileIcon />
          <LinkIcon />
          <InsertEmoticonIcon />
          <NoteAddIcon />
          <PhotoIcon />
          <CreateIcon />
          <MoreVertIcon />
          <DeleteIcon />
        </div>
      </div>
    </form>
  );
}

export default Compose;

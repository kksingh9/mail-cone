import React, { Fragment, useEffect } from 'react'
import "./EmailList.css";
import EmailSetting from '../EmailSetting/EmailSetting';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';
import { inboxmailSliceActions } from '../../store/inboxmail';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from "react-router-dom";

function EmailList() {
  const dispatch = useDispatch();
  const inboxmail = useSelector(state => state.inboxmail.inboxmail)
  console.log(inboxmail);
  useEffect(() => {
    //let setint = setInterval(() => {
      (async() => {
        
       try{
       const response = await fetch("https://mail-box-43bb3-default-rtdb.firebaseio.com/mail.json")
       const data = await response.json();
          let newArray = [];
          for(let key in data){
              newArray.push({
                id: key,
                name: data[key].email,
                subject: data[key].subject,
                description: data[key].description,
                time: data[key].time,
                localtime: data[key].localtime,
              })
          }
          dispatch(inboxmailSliceActions.addmail(newArray));
        }catch(err){
            console.log(err.message);
        }
       })();
      // }, 1000);
      // return () => setInterval(setint);
  },[dispatch])
  return (
    <div className='emaillist'>
      <EmailSetting />
      <EmailType />
     {inboxmail.map((item) => (
      <Fragment key={item.id}>
    
     <EmailBody id={item.id} name={item.name} subject={item.subject} description={item.description} time={new Date(item.time).toLocaleTimeString()}/>

     </Fragment>
      ))} 
    </div>
  )
}

export default EmailList;

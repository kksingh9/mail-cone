import React from 'react'
import "./EmailBody.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
function EmailBody({name,subject,description,time}) {
  return (
    <div className='emailbody'>
        <div className='emailbody__left'> 
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <LabelIcon />

            <h4>{name}</h4>
        </div>
        <div className='emailbody__middle'> 
            <div className='emailbody__middle__msg' >
                    <p><b>{subject}</b><span className='htmleditor' dangerouslySetInnerHTML={{ __html: description}}/></p>
            </div>

        </div>
        <div className='emailbody__right'> 
                    <p>{time}</p>
        </div>
      
    </div>
  )
}

export default EmailBody;

import React from 'react';
import EmailField from './EmailField'

const AjaxFieldContainer = (props) => {
  return <div className={props.name+"-container"}>
    <h5 className={"field-header header-"+props.name}>{props.name}</h5>
    {props.data.map( (el,index) => <EmailField key={index} apiCallUrl={"user/"+el}/>)}
  </div>
}

export default AjaxFieldContainer
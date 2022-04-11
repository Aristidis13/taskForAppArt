import React from 'react';

const UserField = (props) => {
    return <div className={"user-"+props.name+"-container"}>
    <h5 className={"user-field-header header-"+props.name}>{props.name}</h5>
    {props.data.map( (el,index) => <p className={"user-field-item user-"+props.name} key={index}>{el}</p>)}
  </div>
}
export default UserField;
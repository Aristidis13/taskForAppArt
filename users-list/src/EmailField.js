import React from 'react';
import { fetchData } from './helpers';

const EmailField = (props) => {
    const [apiCalledField,setApiCalledField] = React.useState("");
    React.useEffect( ()=> {
        fetchData(props.apiCallUrl)
        .then(res=>setApiCalledField(res.data.email))
        .catch(err=>setApiCalledField('Error '+err+' in Fetching email'));
    })
    return <p className={"field-item user-field-"+props.name}>{apiCalledField}</p>
}

export default EmailField
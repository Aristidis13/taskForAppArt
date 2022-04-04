import react from 'react';

const Box = function(props) {
    return (
        <div className={"box "+ props?.classes}>
            {props.name}
        </div>
    )
}

export default Box
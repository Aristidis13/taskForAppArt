const Boxes = () => {
    const NUMOFBOXES = 4;
    const show = () => {
        const boxes = []
        for(let i=0; i<NUMOFBOXES; i++) boxes.push(<div key={i} className="box-container"><p className="box">{i+3}</p></div>)
        return boxes; 
    } 
    return <div className="boxes">{show()}</div>
}

export default Boxes
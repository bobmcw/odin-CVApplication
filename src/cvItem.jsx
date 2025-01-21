import './cvItem.css'
function CvItem({name, position, startDate, endDate, locationN="",description=""}){
    return(
        <div className="cvItem">
            <div className="left">
                <p>{startDate} - {endDate}</p>
                <p>{locationN}</p>
            </div>
            <div className="right">
                <p>{name}</p>
                <p>{position}</p>
                {description == "" ? null : <p style={{marginTop: "5px"}}>{description}</p>}
            </div>
        </div>
    )
}
export default CvItem;
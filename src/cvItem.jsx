import './cvItem.css'
function CvItem({schoolName, degree, startDate, endDate, locationN=""}){
    return(
        <div className="cvItem">
            <div className="left">
                <p>{startDate} - {endDate}</p>
                <p>{locationN}</p>
            </div>
            <div className="right">
                <p>{schoolName}</p>
                <p>{degree}</p>
            </div>
        </div>
    )
}
export default CvItem;
import './preview.css'
import './cvItem'
import CvItem from './cvItem';
import emailIcon from './assets/email.svg'
import phoneIcon from './assets/phone.svg'
import locationIcon from './assets/location.svg'
function Preview({values, education=[], experience=[]}){
    return(
        <div className="preview">
        <header>
            <h1>{values["Full name"]}</h1>
            <div className="headerItems">
                <p>{values["Email"] != "" ? (
                    <span className='infoWithIcon'>
                        <img src={emailIcon}/>
                        {values["Email"]}
                    </span>
                ) : null} </p>
                <p>{values["Phone"] != "" ? (
                    <span className='infoWithIcon'>
                        <img src={phoneIcon}/>
                        {values["Phone"]}
                    </span>
                ) : null} </p>
                <p>{values["Location"] != "" ? (
                    <span className='infoWithIcon'>
                        <img src={locationIcon}/>
                        {values["Location"]}
                    </span>
                ) : null} </p>
            </div>
        </header>
        <div className="previewBody">
            <h2>Education</h2>
            <div className="educationItems">
                {education.map((educationItem) => {
                    return <CvItem key={educationItem.key} name={educationItem["school"]} startDate={educationItem["start date"]} endDate={educationItem["end date"]} position={educationItem["degree"]} locationN={educationItem["location"]} />
                })}
            </div>
            <h2>Experience</h2>
                {experience.map((experienceItem) => {
                    return <CvItem key={experienceItem.key} name={experienceItem["company name"]} startDate={experienceItem["start date"]} endDate={experienceItem["end date"]} position={experienceItem["position"]} locationN={experienceItem["location"]} description={experienceItem["description"]} />
                })}
            <div className="educationItems">
            </div>
        </div>
        </div>
    )
}
export default Preview;
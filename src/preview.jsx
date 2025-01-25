import './preview.css'
import './cvItem'
import CvItem from './cvItem';
import emailIcon from './assets/email.svg'
import phoneIcon from './assets/phone.svg'
import locationIcon from './assets/location.svg'
function Preview({values, education=[]}){
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
                    <CvItem name={educationItem["school"]} startDate={educationItem["start date"]} endDate={educationItem["end date"]} position={educationItem["degree"]} locationN={educationItem["location"]} />
                })}
                <CvItem name="PJATK" startDate="01.10.2024" endDate="present" position="Computer Science" locationN="Warsaw" />
                <CvItem name="PJATK" startDate="01.10.2024" endDate="present" position="Computer Science" locationN="Warsaw" description="hello" />
            </div>
            <h2>Experience</h2>
            <div className="educationItems">
                <CvItem name="Work" startDate="01.10.2024" endDate="present" position="Junior rust programmer" locationN="Warsaw, Poland" description="lorem ipsum" />
            </div>
        </div>
        </div>
    )
}
export default Preview;
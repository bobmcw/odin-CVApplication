import './preview.css'
import './cvItem'
import CvItem from './cvItem';
function Preview({fullName}){
    return(
        <div className="preview">
        <header>
            <h1>{fullName}</h1>
            <div className="headerItems">
                <p>item1</p>
                <p>item2</p>
                <p>item3</p>
            </div>
        </header>
        <div className="previewBody">
            <h2>Education</h2>
            <div className="educationItems">
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
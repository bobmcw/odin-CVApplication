import './preview.css'
import './cvItem'
import CvItem from './cvItem';
function Preview(){
    return(
        <div className="preview">
        <header>
            <h1>Header</h1>
            <div className="headerItems">
                <p>item1</p>
                <p>item2</p>
                <p>item3</p>
            </div>
        </header>
        <div className="previewBody">
            <h2>Education</h2>
            <div className="educationItems">
                <CvItem schoolName="PJATK" startDate="01.10.2024" endDate="present" degree="Computer Science" locationN="Warsaw" />
                <CvItem schoolName="PJATK" startDate="01.10.2024" endDate="present" degree="Computer Science" locationN="Warsaw" />
            </div>
            <h2>Experience</h2>
        </div>
        </div>
    )
}
export default Preview;
import './preview.css'
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
            <h2>Experience</h2>
        </div>
        </div>
    )
}
export default Preview;
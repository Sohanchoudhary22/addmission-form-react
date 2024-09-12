import { Link } from 'react-router-dom';
import './sidebar.css'

const sidebarData ={
    header:"Welcome to our Institute",
    content:[
    {
        key:"addmission",
        lable:"Addmission"
    }
]
}

function Sidebar (){
    return (
        <div className="sidebar">
          <h2>{sidebarData.header}</h2>
          <div className="button_container">
          {sidebarData.content.map((ele) =>{
            return( 
            <Link to ={`/addmission_form`} key={ele.key} className= "button">{ele.lable}</Link>
        
        )
            
          })}  

          </div>
          
        </div>
    )
}
export default Sidebar;
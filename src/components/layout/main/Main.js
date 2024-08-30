
import {Routes, Route } from 'react-router-dom'
import AddmissionForm from '../../../addmission_form/Addmission';




function Main (){
    return(
        <div className="main">
            <Routes>
                <Route path='/addmission_form' element={<AddmissionForm />}></Route>
            </Routes>
            

        </div>
    )
}
export default Main;
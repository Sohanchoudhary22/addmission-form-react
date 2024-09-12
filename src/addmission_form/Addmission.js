import FormCreateObj from "../components/formcreate/Formcreate";
import "./addmission.css";
import React from "react";

const AddmissionData = {
  heading: "Student Addmission Form",
  form: [
    {
      id: "name",
      lable: "Name",
      type: "input",
      name: "name",
      subtype: "text",
      placeholder: "    Enter your name      ",
    },
    {
      id: "father_name",
      lable: "Father's name",
      type: "input",
      name: "fathers_name",
      subtype: "text",
      placeholder: "    Enter your father's name      ",
    },
    {
      id: "mother_name",
      lable: "Mother's name",
      type: "input",
      name: "mother_name",
      subtype: "text",
      placeholder: "    Enter your mother's name      ",
    },
    {
      id: "dob",
      lable: "DOB",
      type: "input",
      name: "DOB",
      subtype: "date",
    },
    {
      id: "email",
      lable: "Email",
      type: "input",
      name: "email",
      subtype: "text",
      placeholder: "    Enter your email      ",
    },
    {
      id: "mobile",
      lable: "Mobile",
      type: "input",
      name: "mobile",
      subtype: "number",
      placeholder: "    Enter your mobile number      ",
    },
    {
      id: "city",
      lable: "City",
      type: "select",
      name: "city",
      placeholder: "    Enter your city      ",
      option:[
        {
          lable:"Jaipur",
          value:"jaipur"
        },
        {
          lable:"Delhi",
          value:"delhi"
        },
        {
          lable:"Haryana",
          value:"haryana"
        },
        {
          lable:"Punjab",
          value:"punjab"
        },
        {
          lable:"Rajasthan",
          value:"rajasthan"
        },
      ]
    },
    {
      id:"gender",
      lable:"Gender",
      type:"radio",
      name:"gender",
      option:[
        {
          lable:"Male",
          value:"male",
        },
        {
          lable:"Female",
          value:"female",
        },
        {
          lable:"Other",
          value:"other",
        }
      ]
    },
    {
      id:"checkbox",
      lable:"Checkbox",
      type:"checkbox",
      name:"checkbox",
      option:[
        {
          lable:"UI/UX",
          value:"ui/ux"          
        },
        {
          lable:"JAVA",
          value:"java"
        },
        {
          lable:"DATABASE",
          value:"database"
        }
      ]
    },

  ],
};

const AddmissionForm = () => {
  const [formObj, setFormObj] = React.useState(null);
  const [tableData, setTableData] = React.useState([]);

  const _handleChange = (e) => {
    const { name, value } = e.target;
    let val= value;
    if(e.target.name=== "checkbox"){
      val =formObj?.checkbox ?? [];
      let isExists = val?.some(el => el === value);
      if(isExists){
        val =val?.filter(el => el !==value);
      }else {
        val.push(value);
      }
    }

    setFormObj((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  console.log(formObj);

  // table function...........
  const _submitData = () => {
    if (
      !!formObj?.name &&
      !!formObj?.fathers_name &&
      !!formObj?.DOB &&
      !!formObj?.mobile &&
      !!formObj?.email
    ) {
      setTableData((prev) => [...prev, formObj]);
      setFormObj(null);
    } else {
      alert("please fill the mandatory fields");
    }
  };

  console.log(tableData);

  // ..............form Reset function.............//
  const _resetForm = (e) => {
    e.preventDefault();
    setFormObj(null);
  };
  return (
    <div className="addmission">
        <h1>{AddmissionData.heading}</h1>

      <div className="addmission_parent">
        <FormCreateObj formArr={AddmissionData.form} value={AddmissionData.form.name} onChangeCb={_handleChange} formObj={formObj}/>
          

        <div className="button_cont">
          <button className="button1" onClick={_submitData}>Submit</button>
          <button className="button2" onClick={_resetForm}>Reset</button>
            </div>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Father's name</th>
            <th>DOB</th>
            <th>Mobile number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, index) => {
              return (
                  <tr>
                <td>{++index}</td>
                <td>{el?.name}</td>
                <td>{el?.fathers_name}</td>
                <td>{el?.DOB}</td>
                <td>{el?.mobile}</td>
                <td>{el?.email}</td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
        </div>
  );
};
export default AddmissionForm;
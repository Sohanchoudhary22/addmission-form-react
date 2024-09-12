const FormCreateObj = ({ formArr = [], onChangeCb, formObj={} }) => {

  //.................seprate function................//

  const _inputfield =(ele) =>{
    return(
    <input className="input" type={ele.subtype} name={ele.name} placeholder={ele.placeholder} onChange={onChangeCb} value={formObj?.[ele.name] ?? ""}/>
    )
  }

  const _selectfield =(ele)=>{
    return(
      <select name={ele.name} placeholder={ele.placeholder} value={formObj?.[ele.name] ?? ""} onChange={onChangeCb}>
        <option value={""}></option>
        {ele.option.map((el) => (
          <option key={el.value} value={el.value}>
            {el.lable}
          </option>
        ))}
      </select>
    )
  }

  const _radiofield =(ele) =>{
    return(
      <div key={ele.id} className="addmission_child">
      
      {ele.option.map((xyz) =>{
        return(
          <div key={xyz.value}>
             <input type={ele.type} name={ele.name} value={xyz.value} checked={xyz.value === formObj?.[ele.name]} onChange={onChangeCb}/>
             <label>{xyz.lable}</label>
             </div>
        )
        
      })}
      </div>
    )
  }

  const _checkboxfield =(ele) =>{
    return(
      <div key={ele.id} className="addmission_child">
      
      {ele.option.map((abc) =>{
        return(
          <div key={abc.value}>
             <input type={ele.type} name={ele.name} value={abc.value} checked={formObj?.[ele.name]?.some(el =>el ===abc.value)} onChange={onChangeCb}/>
             <label>{abc.lable}</label>
             </div>
        )
      })}
      </div>
    )
  }

  const renderfield =(ele) =>{
    return(
      <div key={ele.id} className="addmission_child">
      <label className="lable">{ele.lable}:-</label>

      {ele.type === "input"? _inputfield(ele) :null}
      {ele.type === "select"? _selectfield(ele) :null}
      {ele.type === "radio"? _radiofield(ele) :null}
      {ele.type === "checkbox"? _checkboxfield(ele) :null}

      </div>
    )
  }

  //..................main function..................//
  return (
    <div className="addmission_parent">
      {formArr.map((ele) => <div >{renderfield(ele)}</div>)}
           
    </div>
  );
};
export default FormCreateObj;

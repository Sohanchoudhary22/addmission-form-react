const FormCreateObj = ({ formArr = [], onChangeCb, formObj }) => {
    return (
      
      <div className="addmission_parent">
        {formArr.map((ele) => {
          return (
            <div key={ele.id} className="addmission_child">
              <label className="lable">{ele.lable}:-</label>
              <input className="input" type={ele.subtype} name={ele.name} placeholder={ele.placeholder} onChange={onChangeCb} value={formObj?.[ele.name] ?? ""}></input>
            </div>
          );
        })}
      </div>
    );
  };
  export default FormCreateObj;
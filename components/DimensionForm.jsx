import { useState } from "react";

export default function DimensionForm({actions}) {
  const [valueCount, setValueCount] = useState(2);
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [valueError, setValueError] = useState(false);
  
  //Add a new empty field where new values can be added. For instance, if you
  //were adding a new dimension called "color" the fields might store "red",
  //"green", and "blue"
  function addField() {
    setValueCount(valueCount + 1)
  }
  function save(e) {
    e.preventDefault();
    //Clear errors which may have been created on the previous save attempt
    setError(null);
    setNameError(false);
    setValueError(false);

    const name = e.target.dimension_name.value;
    if (!name) {
      setError("Dimension name is required")
      setNameError(true);
      return;
    }

    //Iterate over all the values and flatten them into an array
    let values = [];
    [...e.target.elements].forEach((field) => {
      if (field.value && field.name.startsWith('dimension_value')) {
        values.push(field.value.trim())
      }
    })
    if (!values.length) {
      setError("At least one value is required")
      setValueError(true);
    }
    //When all validation has passed:
    else {
      actions.addDimension(name, values);
      actions.hideModal();
    }
  }
  
  function fields(n) {
    let fields = [];
    for (let i = 1; i <= valueCount; i++) {
      fields.push(
        <div key={`field${i}`} className={`error-${valueError} field${i == valueCount ? ' last' : ''}`}>
          <label htmlFor={`dimension_value${i}`}>Dimension Value {i}</label>
          <div>
            <input name={`dimension_value${i}`} type="text"></input>
            {i == 1 ? <div className="helptext">e.g. "Red", "Green", "Blue"</div> : null}
          </div>
        </div>
      )
    }
    return fields;
  }

  return (
    <form className="modal-form" onSubmit={save}>

      <div className="field-wrapper">
        <div className={`field dimension-name error-${nameError}`}>
          <label htmlFor="dimension_name">Dimension Name</label>
          <div>
            <input name="dimension_name" type="text"></input>
            <div className="helptext">e.g. "Color"</div>
          </div>
        </div>
      </div>

      <div className="field-wrapper">
        {fields(valueCount)}
        <div className="add-dimension-wrapper">
          <a className="add-dimension" onClick={addField}>➕ Add value</a>
        </div>
      </div>


      <div className="save">
        <button>Save</button>
        {error ? <div className="error">{error}</div> : null}
      </div>

    </form>
  )
}
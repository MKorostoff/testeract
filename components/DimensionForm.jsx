import { useState } from "react";

export default function DimensionForm({actions, dimension, column}) {
  const valueCountInitial = dimension?.values?.length || 2;
  const editMode = (dimension) ? true : false;

  const [valueCount, setValueCount] = useState(valueCountInitial);
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
    //Todo: handle name collisions
    if (!name) {
      setError("Dimension name is required")
      setNameError(true);
      return;
    }

    //Iterate over all the values and flatten them into an array
    let values = [];
    [...e.target.elements].forEach((field) => {
      if (field.value && field.name.startsWith('dimension_value')) {
        let newValue = field.value.trim();
        if (!values.includes(newValue)) {//Enforce unique
          values.push(newValue)
        }
      }
    })
    if (!values.length) {
      setError("At least one value is required")
      setValueError(true);
    }
    //When all validation has passed:
    else {
      if (editMode) actions.updateDimension(column, name, values);
      else actions.addDimension(name, values);
      actions.hideModal();
    }
  }
  function getFieldValue(n) {
    return (editMode) ? dimension.values[n] : null;
  }
  function getTitle() {
    return (editMode) ? dimension.name : null;
  }
  
  function fields(n) {
    let fields = [];
    for (let i = 0; i < valueCount; i++) {
      fields.push(
        <div key={`field${i}`} className={`error-${valueError} field${i == valueCount ? ' last' : ''}`}>
          <label htmlFor={`dimension_value${i}`}>Dimension Value {i + 1}</label>
          <div>
            <input defaultValue={getFieldValue(i)} name={`dimension_value${i}`} type="text"></input>
            {i == 0 ? <div className="helptext">e.g. &quot;Red&quot;, &quot;Green&quot;, &quot;Blue&quot;</div> : null}
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
            <input defaultValue={getTitle()} name="dimension_name" type="text"></input>
            <div className="helptext">e.g. &quot;Color&quot;</div>
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
import { useState, useRef, useEffect } from "react";

export default function Table({headers, combinations, actions}) {
  const [animatingColumn, setAnimatingColumn] = useState(null);
  const [openDropDown, setOpenDropdown] = useState(null);

  if (!headers || !combinations) return null;

  function handleGearClick(e) {
    setOpenDropdown(e.target.dataset.column);
  }

  function remove(e) {
    setOpenDropdown(null);
    setAnimatingColumn(e.target.dataset.column);
    
    setTimeout(() => {
      actions.removeDimension(e.target.dataset.column)
    }, 400);
    
    setTimeout(() => {
      setAnimatingColumn(null);
    }, 450)
  }

  return (
    <>
      <style>{`.column-${animatingColumn} {transition: opacity 600ms; opacity: 0}`}</style>

      <table className="combos">
        <tbody>
          
          <tr className="combos-header">
            <th>#</th>
            {headers.map((header, i) => {
              return (
                <th className={`column column-${i}`} key={header}>
                  {header}
                  <a className="edit-column" data-name={header} data-column={i} onClick={handleGearClick}>▼</a>
                  {(openDropDown == i) ? <DropDown column={i} name={header} actions={{remove, setOpenDropdown, editDimension: actions.editDimension}}/> : null}
                </th>
              )
            })}
          </tr>

          {combinations.map((set, ii) => <tr className="combos-row" key={`set${ii}`}>
            <td>{ii+1}</td>
            {set.map((item, iii) => <td className={`column column-${iii}`} key={`item${iii}`}>{item}</td>)}
          </tr>)}

        </tbody>
      </table>
    </>
  );
}

function DropDown({column, name, actions}) {
  const ref = useRef();
  
  useEffect(() => {
    //Close if someone clicks outside
    document.addEventListener('click', (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        actions.setOpenDropdown(null);
      }
    })
  }, []);

  return (
    <div ref={ref} className="dropdown">
      <ul className="menu">
        <li className="menu-item" onClick={actions.editDimension} data-column={column}>Edit</li>
        <li className="menu-item" onClick={actions.remove} data-column={column} data-name={name}>Delete</li>
      </ul>
    </div>
  )
}
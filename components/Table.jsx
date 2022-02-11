import { useState } from "react";

export default function Table({headers, combinations, actions}) {
  const [animatingColumn, setAnimatingColumn] = useState(null);

  if (!headers || !combinations) return null;

  function remove(e) {
    setAnimatingColumn(e.target.dataset.cardinality);
    
    setTimeout(() => {
      actions.removeDimension(e.target.dataset.name)
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
            {headers.map((header, i) => <th className={`column column-${i}`} key={header}>{header} <a className="remove" data-cardinality={i} data-name={header} onClick={remove}>⊗</a></th>)}
            <th>Notes</th>
          </tr>

          {combinations.map((set, i) => <tr className="combos-row" key={`set${i}`}>
            <td>{i+1}</td>
            {set.map((item, ii) => <td className={`column column-${ii}`} key={`item${ii}`}>{item}</td>)}
            <td></td>
          </tr>)}

        </tbody>
      </table>
    </>
  );
}
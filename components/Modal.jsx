import { useRef, useEffect } from "react";

export default function Modal({title, children, actions}) {
  const ref = useRef();
  
  useEffect(() => {
    //Close if someone clicks outside
    //todo: close on escape key
    document.addEventListener('click', (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        actions.hideModal();
      }
    })
  }, []);

  return (
    <div className="modal">
      <div ref={ref} className="modal-inner">
        <div>
          <h2 className="modal-title">{title}</h2>
          <a className="close" onClick={actions.hideModal}>×</a>
        </div>
        {children}
        </div>
    </div>
  )
}
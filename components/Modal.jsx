export default function Modal({title, children, actions}) {
  return <div className="modal">
    <div className="modal-inner">
      <div>
        <h2>{title}</h2>
        <a className="close" onClick={actions.hideModal}>×</a>
      </div>
      {children}
      </div>
  </div>;
}
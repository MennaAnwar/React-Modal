import "./modal.css";
import ReactDOM from "react-dom";

const Modal = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <button className="close" onClick={() => close()}>
                <img src="https://react-reusable-components.vercel.app/static/media/times-solid.ea7c95d7.svg" />
              </button>
            </header>
            <main className="modal_content"> {children} </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

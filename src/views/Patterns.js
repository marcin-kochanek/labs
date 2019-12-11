import React, { useState, useRef } from "react";
import cx from "classnames";
import { useDetectionOutsideClick } from "../hooks/useDetectionOutsideClick";

// render props
const MyComponent = ({ render }) => (
  <div>
    <p>Hello World</p>
    {render("Marcin")}
  </div>
)

// children as a function
const MySecondComponent = ({ children }) => (
  <div>
    <p>Hello World</p>
    {children("programmer")}
  </div>
);

const Patterns = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const modalRef = useRef(null)
  useDetectionOutsideClick(modalRef, setModalVisibility);

  return (
    <div>
      <h2 className="title is-3">Patterns</h2>
      <MyComponent render={data => <p>I'm {data}!</p>} />
      <br />
      <MySecondComponent>
        {data => <p>I'm {data}!</p>}
      </MySecondComponent>
      <hr />
      <div>
        <h2 className="title is-3">Users</h2>
        <button
          className="button is-primary"
          onClick={() => setModalVisibility(true)}
        >
          Open modal
        </button>
        <div className={cx("modal", { "is-active": isModalVisible })}>
          <div className="modal-background" />
          <div ref={modalRef} className="modal-content">
            <article className="message">
              <div className="message-header">
                <p>Hello World</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={() => setModalVisibility(false)}
                />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
              </div>
            </article>
          </div>
          <button className="modal-close is-large" aria-label="close" />
        </div>
      </div>
    </div>
  )
};


export default Patterns;

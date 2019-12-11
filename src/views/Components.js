import React, { useState, useReducer, useRef } from "react";
import cx from "classnames";
import styles from "./Components.module.scss";

const Components = () => {
  const taskBoxRef = useRef(null);
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      content: "Do yoga."
    }
  ]);

  const [inputs, setInputContent] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      searchContent: "",
      taskContent: ""
    }
  )

  const handleInputChange = e => {
    setInputContent({
      [e.target.name]: e.target.value
    });
  };

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      content: inputs.taskContent
    };

    if (inputs.taskContent !== "") {
      setTasksList([...tasksList, newTask]);
      setInputContent({
        taskContent: ""
      });
    }
    taskBoxRef.current.style.transform = 'scaleX(1.2)';
  };

  const deleteTask = id => {
    const updatedTasksList = tasksList.filter(task => task.id !== id);
    setTasksList(updatedTasksList);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="searchContent">Search tasks</label>
      <input
        className={cx("input", "is-primary", [styles.input])}
        type="text"
        placeholder="Search task"
        name="searchContent"
        id="searchContent"
        value={inputs.searchContent}
        onChange={handleInputChange}
      />
      <hr />
      <input
        className={cx("input", "is-primary", [styles.input])}
        type="text"
        placeholder="Add your task"
        name="taskContent"
        value={inputs.taskContent}
        onChange={handleInputChange}
      />
      <button
        className={cx("button", "is-warning", [styles.button])}
        onClick={addTask}
      >
        Add item
      </button>
      {tasksList
        .filter(item => item.content.toLowerCase().includes(inputs.searchContent.toLowerCase()))
        .map(item => (
          <div
            key={item.id}
            className={cx("notification", "is-info", [styles.notification])}
            ref={taskBoxRef}
          >
            <button
              className="delete"
              onClick={() => deleteTask(item.id)}
            />
            {item.content}
          </div>
        ))
      }
    </div>
  );
};

export default Components;

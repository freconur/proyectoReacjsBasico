import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./styles/todoItem.css";
const TodoItem = (props) => {
  return (
    // <ul>
    <li className="list">
      <div className="icon_container">
        <FontAwesomeIcon
          className={`iconEnable ${!props.completed && "desableIcon"}`}
          icon={faHeartSolid}
          onClick={props.onComplete}
        />
        <FontAwesomeIcon
          className={`iconDisable ${props.completed && "desableIcon"}`}
          icon={faHeartRegular}
          onClick={props.onComplete}
        />
      </div>
      <div className="text_container">
        <p className={`${props.completed && "desableText"}`}>
          {props.item.text}
        </p>
      </div>
      <span onClick={props.onDelete}>delete</span>
    </li>
    // </ul>
  );
};

export default TodoItem;

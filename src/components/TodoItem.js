import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import './styles/todoItem.css'
const TodoItem = (props) => {
	return (
		// <ul>
			<li className="list">
				<div className="icon_container">
					<FontAwesomeIcon 
					className={`iconEnable ${!props.completed && 'desableIcon'}`}
					icon={faHeartSolid} 
					/>
					<FontAwesomeIcon
					className={`iconDisable ${props.completed && 'desableIcon'}`}
					icon={faHeartRegular}
					/>
				</div>
				<div className="text_container">
					<p className={`${props.completed && 'desableText'}`}>{props.item.text}</p>
				</div>
			</li>
		// </ul>
	);
};

export default TodoItem;

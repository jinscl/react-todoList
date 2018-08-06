import React from 'react';

const TodoItem = ({onToggle,onRemove,completed,text}) => {
	const checkedProp = completed ? {checked:true} :{}
	return(
		<li>
			<input type="checkbox" {...checkedProp} readOnly onClick={onToggle}/>
			<label>{text}</label>
			<button onClick={onRemove}>x</button>
		</li>
	)
}

export default TodoItem;
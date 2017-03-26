import React from 'react';
import styles from "../containers/Survey.css";

// <div className="form-group">

const SingleInput = (props) => (
	<div className= {styles.nameDiv}>
		<label className="form-label">{props.title}</label>
		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
	</div>
);

SingleInput.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	title: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default SingleInput;
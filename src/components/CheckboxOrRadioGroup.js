import React from 'react';
import styles from "../containers/Survey.css";

const CheckboxOrRadioGroup = (props) => (
	<div>
		<label className={styles.radioDiv0}>{props.title}</label>
		<div className = {styles.radioDiv1}>
			{props.options.map(option => {
				return (
					<label key={option} className = {styles.radioDiv2}>
						<input
							className = {styles.radioDiv3}
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

CheckboxOrRadioGroup.propTypes = {
	title: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
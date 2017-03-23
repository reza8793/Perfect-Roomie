import React from 'react';
import styles from "../containers/Survey.css";


const Select = (props) => (
	<div className={styles.selectDiv}>
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
	</div>
);

Select.propTypes = {
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Select;
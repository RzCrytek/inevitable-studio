import type { ChangeEvent, FC } from 'react';

interface Options {
	id: number;
	name: string;
}

interface Props {
	label: string;
	name: string;
	options: Options[];
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
	disabled?: boolean;
}

const Select: FC<Props> = ({ label, name, onChange, options, disabled = false }) => {
	return (
		<div className="field">
			<select className="form-control select" name={name} defaultValue="" onChange={onChange} disabled={disabled} required>
				<option value="" disabled></option>
				{options.map((option) => {
					return (
						<option value={option.id} key={option.id}>
							{option.name}
						</option>
					);
				})}
			</select>
			<label className="form-label" htmlFor={name}>
				{label}
			</label>
		</div>
	);
};

export default Select;

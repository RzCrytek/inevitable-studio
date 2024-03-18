import type { ChangeEvent, FC } from 'react';

interface Props {
	label: string;
	name: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const FieldInput: FC<Props> = ({ label, name, onChange, type = 'text' }) => {
	return (
		<div className="field">
			<input className="form-control" type={type} name={name} onChange={onChange} required />
			<label className="form-label" htmlFor={name}>
				{label}
			</label>
		</div>
	);
};

export default FieldInput;

import { useRef, useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import countriesData from '@/data/countries/countries.json';
import statesData from '@/data/countries/states.json';
import { PROJECT_TYPE } from '@/data/project-type';
import FieldInput from './Components/FieldInput';
import Select from './Components/Select';
import './registerForm.scss';

interface Country {
	id: number;
	name: string;
}

interface State extends Country {
	id_country: number;
}

const ApiSheet = 'https://script.google.com/macros/s/AKfycbxHDDKLWtANiuXbeIMjhsPgdFf8xobD5L464xPLWeSVXeWScPi4B4vfxF6ZVkL3MTSs2Q/exec';

const RegisterForm: FC = () => {
	const [loading, setLoading] = useState(false);
	const [states, setStates] = useState<State[]>([]);
	const formRef = useRef<HTMLFormElement>(null);
	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	last_name: '',
	// });

	// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setFormData({ ...formData, [event.target.name]: event.target.value });
	// };

	const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
		const countryCode = event.target.value;
		const stateForCountry = statesData.states.filter((state) => state.id_country === Number(countryCode));

		setStates(stateForCountry);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const selectedCountry = countriesData.countries.find((country) => country.id === Number(formData.get('country')))!?.name;
		const selectedState = statesData.states.find((state) => state.id === Number(formData.get('city')))!?.name;
		const projectType = PROJECT_TYPE.find((project) => project.id === Number(formData.get('project_type')))!?.name;

		formData.set('country', selectedCountry);
		formData.set('city', selectedState);
		formData.set('project_type', projectType);

		// for (const pair of formData.entries()) {
		// 	console.log('FormData-value:', pair[0] + ', ' + pair[1]);
		// }

		setLoading(true);

		try {
			const response = await fetch(ApiSheet, {
				method: 'POST',
				body: formData,
			});

			const result = await response.json();

			if (response.ok) {
				console.log('Form submitted successfully!', result);
				setLoading(false);
				formRef?.current?.reset();
			}
		} catch (error) {
			setLoading(false);
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div className="form-box">
			<form ref={formRef} onSubmit={handleSubmit}>
				<div className="fields">
					<FieldInput label="Nombre" name="name" />
					<FieldInput label="Apellido" name="last_name" />
					<FieldInput label="Nombre de la empresa" name="company_name" />
					<FieldInput label="Rubro" name="rubro" />
					<FieldInput type="tel" label="Teléfono" name="phone" />
					<FieldInput type="text" label="Correo Electrónico" name="email" />
					<Select label="País" name="country" options={countriesData.countries} onChange={handleChangeCountry} />
					<Select label="Ciudad" name="city" options={states} disabled={!Boolean(states.length)} />
					<Select label="Tipo de proyecto" name="project_type" options={PROJECT_TYPE} />
					<FieldInput type="number" label="Presupuesto aprox." name="approximate_budget" />

					<div className="wrap-btn">
						<button className="button" type="submit" disabled={loading}>
							{loading ? 'Enviando...' : 'ENVÍAR'}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;

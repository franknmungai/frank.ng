import React, { useReducer, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import './contact-form.styles.scss';
import { sendMessage } from '../../redux/actions/user';
import Ternary from '../Ternary';

const initialState = {
	name: '',
	email: '',
	message: '',
};
const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TEXT_CHANGE':
			return {
				...state,
				[action.name]: action.value,
			};
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
const ContactForm = () => {
	const [resp, setResp] = useState();
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(false);

	const [formState, dispatch] = useReducer(formReducer, initialState);

	const handleChange = ({ target }) =>
		dispatch({ type: 'TEXT_CHANGE', name: target.name, value: target.value });

	const clearForm = () => dispatch({ type: 'RESET' });

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		try {
			const resp = await sendMessage(formState);
			setResp(resp);
		} catch (error) {
			setErrors(error);
		}
		setLoading(false);
		clearForm();
	};

	useEffect(() => {
		const timer = setTimeout(() => setResp(''), 6000);
		return () => clearTimeout(timer);
	}, [resp]);
	return (
		<form className="form" onSubmit={handleSubmit}>
			<Ternary condition={resp} fallback="">
				<p className="success">{resp}</p>
			</Ternary>
			<Ternary condition={errors.length} fallback="">
				{errors.map((error) => (
					<p className="error">{error.message}</p>
				))}
			</Ternary>
			<TextField
				label="Email"
				name="email"
				variant="outlined"
				required
				value={formState.email}
				onChange={handleChange}
				className="input"
				fullWidth
				type="email"
			/>
			<TextField
				label="Name"
				name="name"
				variant="outlined"
				required
				value={formState.name}
				onChange={handleChange}
				className="input"
				fullWidth
				type="text"
			/>
			<TextField
				label="Message"
				name="message"
				multiline
				rows={6}
				variant="outlined"
				value={formState.message}
				onChange={handleChange}
				className="input"
				fullWidth
				type="text"
				required
			/>
			<div className="form-action">
				<Tooltip title="Cancel">
					<IconButton type="reset" onClick={clearForm}>
						<ClearIcon className="cancel" />
					</IconButton>
				</Tooltip>
				<Ternary
					condition={!loading}
					fallback={<CircularProgress color="primary" size={24} />}
				>
					<Tooltip title="Send">
						<IconButton type="submit">
							<SendIcon color="primary" />
						</IconButton>
					</Tooltip>
				</Ternary>
			</div>
		</form>
	);
};

export default ContactForm;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { ReactComponent as SubscribeSvg } from '../../assets/subscribe.svg';
import MailIcon from '../../assets/mail.png';
import NameIcon from '../../assets/name.png';
import './coming-styles.scss';
import { subscribe } from '../../redux/actions/user';
import Ternary from '../../components/Ternary';

const ComingSoon = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [resp, setResp] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setErrors([]);
		setResp();
		setLoading(true);
		try {
			const resp = await dispatch(subscribe({ name, email }));
			setResp(resp);
		} catch (error) {
			setErrors(error); //[{message: '', field: ''}]
			console.log(error);
		}
		setLoading(false);
		setName('');
		setEmail('');
	};

	useEffect(() => {
		const timerId = setTimeout(() => setResp(''), 6000);
		return () => clearTimeout(timerId);
	}, [resp]);
	return (
		<div className="root">
			<h1>
				Hello{' '}
				<span role="img" aria-label="wave">
					👋
				</span>
			</h1>
			<p className="subscribe-text">
				I am currently working on creating the content for this project and
				other projects on my blog as well
			</p>

			<p className="subscribe-text">
				Subscribe here to get notified by email whenever I publish any of my
				stuff
			</p>
			<div className="subscribe-form">
				<SubscribeSvg className="svg" />
				<Ternary condition={errors.length} fallback={''}>
					<div className="errors">
						{errors.map((error) => (
							<p key={error.message}>{error.message}</p>
						))}
					</div>
				</Ternary>
				<Ternary condition={resp} fallback="">
					<p className="success">{resp}</p>
				</Ternary>
				<form className="form" onSubmit={handleSubmit}>
					<TextField
						variant="outlined"
						color="primary"
						placeholder="First name"
						type="text"
						required
						className="input"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<img src={NameIcon} alt="mail" className="icon" />
								</InputAdornment>
							),
						}}
						onChange={({ target }) => setName(target.value)}
						value={name}
					/>
					<TextField
						variant="outlined"
						color="primary"
						placeholder="Email"
						type="email"
						required
						className="input"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<img src={MailIcon} alt="mail" className="icon circle" />
								</InputAdornment>
							),
						}}
						onChange={({ target }) => setEmail(target.value)}
						value={email}
					/>
					<Button
						color="primary"
						variant="contained"
						className="btn"
						type="submit"
						disabled={loading}
						onClick={handleSubmit}
					>
						{loading ? (
							<CircularProgress color="secondary" size="24px" />
						) : (
							'Subscribe'
						)}
					</Button>
				</form>
				<p className="subscribe-text">
					You will not receive any spam emails from me{' '}
					<span role="img" aria-label="smile">
						😃
					</span>
					and you can always unsubscribe anytime
				</p>
			</div>
		</div>
	);
};

export default ComingSoon;

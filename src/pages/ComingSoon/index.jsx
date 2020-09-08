import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { ReactComponent as SubscribeSvg } from '../../assets/subscribe.svg';
import MailIcon from '../../assets/mail.png';
import './coming-styles.scss';

const ComingSoon = () => {
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
				<form>
					<TextField
						variant="outlined"
						color="primary"
						placeholder="Email"
						type="email"
						required
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<img src={MailIcon} alt="mail" className="icon" />
								</InputAdornment>
							),
						}}
					/>
					<Button
						color="primary"
						variant="contained"
						className="btn"
						type="submit"
					>
						Subscribe
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

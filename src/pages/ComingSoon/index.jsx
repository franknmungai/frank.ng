import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ReactComponent as SubscribeSvg } from '../../assets/subscribe.svg';
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
				I am currently working on this and other articles on my blog as well
			</p>

			<p className="subscribe-text">
				Subscribe here To get notified by email whenever I publish any of my
				articles
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
			</div>
		</div>
	);
};

export default ComingSoon;

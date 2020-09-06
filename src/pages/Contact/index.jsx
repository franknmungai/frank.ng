import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FlashText from '../../components/FlashText';
import ContactForm from '../../components/ContactForm';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';
import './contact.styles.scss';

const Contact = () => {
	const text = ['feedback', 'suggestions', 'ideas', 'support', 'projects'];

	return (
		<div className="root">
			<h1 className="heading">Get in touch</h1>
			<p className="text">
				For <FlashText text={text} />, you can connect with me from here
			</p>
			<Paper elevation={3} className="contact">
				<Grid container>
					<Grid item xs="auto" sm="auto" md={6}>
						<MailSvg className="svg" />
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ContactForm />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Contact;

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const Toast = ({ message, open, handleClose }) => {
	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}
				message={message}
				color="primary"
				action={
					<React.Fragment>
						<Button color="secondary" size="small" onClick={handleClose}>
							Okay
						</Button>
					</React.Fragment>
				}
			/>
		</div>
	);
};

export default Toast;

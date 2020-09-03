import React from 'react';
import Typography from '@material-ui/core/Typography';

const Logo = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '-50px',
			}}
		>
			{/* <ListItemIcon> */}
			<img
				alt="logo"
				src={require('../../assets/logo.png')}
				style={{ width: '5.5vw', height: '5.5vw' }}
			/>
			{/* </ListItemIcon> */}
			{/* <ListItemText> */}
			<Typography
				variant="h6"
				noWrap
				style={{
					cursor: 'pointer',
					textAlign: 'center',
					// marginTop: '-20px',
				}}
			>
				<span style={{ color: 'slateblue' }}>FRA</span>
				<span style={{ color: 'goldenrod' }}>NK</span>
				<span style={{ color: 'blueviolet' }}>PAD</span>
			</Typography>
			{/* </ListItemText> */}
		</div>
	);
};

export default Logo;

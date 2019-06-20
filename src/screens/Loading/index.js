import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	progress: {
		margin: theme.spacing(2)
	}
}));

const Loading = () => {
	const classes = useStyles();
	return (
		<div>
			<CircularProgress className={classes.progress} />
		</div>
	);
};

export default Loading;

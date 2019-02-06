import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/Home/HomePage';

export class HomeContainer extends React.Component {
	render() {
		return (
			<div><HomeComponent/></div>
		);
	}
}

export default connect(
	null
)(HomeContainer)

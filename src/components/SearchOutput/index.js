import React from 'react';

export default ({ data }) => {
	if (data.length === 0) return <div>Loading......</div>;
	return <div>{data.map((item) => <li>{item.name}</li>)}</div>;
};

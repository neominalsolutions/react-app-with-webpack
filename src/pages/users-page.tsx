import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UsersPage() {
	const [users, setUsers] = useState([]);

	const loadData = async () => {
		try {
			let response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (error) {}
	};

	useEffect(() => {
		// axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
		// 	console.log('response', response.data);
		// 	setUsers(response.data);
		// });
		loadData();
	}, []);

	return (
		<>
			{users.map((item: any) => {
				return <div key={item.id}>{item.username}</div>;
			})}
		</>
	);
}

export default UsersPage;

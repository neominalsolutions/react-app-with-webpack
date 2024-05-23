import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<>
			<header>
				<h1>Web Site</h1>
				<Link to="/admin">Admin</Link>{' '}
				<Link to="/admin/users">Admin Users</Link>{' '}
				<Link to="/use-effect-dropdown">Use Effect Dropdown City</Link>{' '}
				<Link to="/use-ref">Use Ref Sample</Link>{' '}
				<Link to="/use-effect">Use Effect Sample</Link>{' '}
				<Link to="/counter">Counter</Link>{' '}
				<Link to="/todo-single-component">Todo (Single)</Link>{' '}
				<Link to="/todo-multiple-component">Todo (Multiple)</Link>{' '}
				<Link to="/bmi">BMI</Link> <Link to="/users-axios">Users Axios</Link>
			</header>
			<br></br>
			{/* Dinamik olarak değişkenlik gösteren kısım */}
			<div
				style={{
					padding: '2rem',
				}}
			>
				<Outlet />
			</div>
			<footer>Alt Bilgi</footer>
			{/* outlet dinamik olarka componentlerin doma girmesi için tanımlanmış react router dom üzerideki bir component. */}
		</>
	);
}

export default AppLayout;

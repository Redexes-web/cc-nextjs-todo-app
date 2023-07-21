import React from 'react';
import axios from 'axios';

const TaskDetail = ({ task }) => {
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.completed ? 'Complétée' : 'Non complétée'}</p>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.query;
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	const task = response.data;
	return {
		props: {
			task,
		},
	};
}

export default TaskDetail;

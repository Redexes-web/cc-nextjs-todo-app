import React from 'react';
import axios from 'axios';
import { notFound } from 'next/navigation'

const TaskDetail = ({ task }) => {
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.completed ? 'Complétée' : 'Non complétée'}</p>
		</div>
	);
};

export async function getServerSideProps(context) {
	try {
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
	} catch (error) {
	  console.error('Error:', error.message);
	  return {
		notFound: true,
	  };
	}
  }

export default TaskDetail;

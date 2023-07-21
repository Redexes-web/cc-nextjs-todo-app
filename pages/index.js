import React from 'react';
import Link from 'next/link';
import axios from 'axios';

const Home = ({ tasks }) => {
	return (
		<div>
			<h1>Ma TODO-list sur NextJS</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<Link href={`/tasks/${task.id}`}>
							{task.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export async function getServerSideProps() {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/todos'
	);
	const tasks = response.data;
	return {
		props: {
			tasks,
		},
	};
}

export default Home;

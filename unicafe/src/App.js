import { useState } from 'react';

const Button = (props) => {
	return <button onClick={props.click}>{props.text}</button>;
};

const StatisticLine = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	if (props.all === 0) {
		return (
			<div>
				<p>No feedback given</p>
			</div>
		);
	}
	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={props.good} />
				<StatisticLine text="neutral" value={props.neutral} />
				<StatisticLine text="bad" value={props.bad} />
				<StatisticLine text="all" value={props.all} />
				<StatisticLine text="average" value={props.average} />
				<StatisticLine text="positive" value={props.positive} />
			</tbody>
		</table>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const all = good + neutral + bad;
	const average = (good - bad) / all;
	const positive = `${(good / all) * 100}%`;

	return (
		<div>
			<h1>give feedback</h1>
			<Button click={() => setGood(good + 1)} text="good" />
			<Button click={() => setNeutral(neutral + 1)} text="neutral" />
			<Button click={() => setBad(bad + 1)} text="bad" />
			<h1>statistics</h1>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={all}
				average={average}
				positive={positive}
			/>
		</div>
	);
};

export default App;

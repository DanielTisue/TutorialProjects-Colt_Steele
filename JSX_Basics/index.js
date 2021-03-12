function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>Does this thing WORK?</h1>
				<h1>This thing currently is: {getMood()}</h1>
				<img src="https://images.unsplash.com/photo-1558980664-ce6960be307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" />
			</div>
			
		);		
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
// ################################ //
// CHAPTER : 01                     //
// ################################ //

let Header = React.createElement('h1', null, 'Hello World from external script file.');

ReactDOM.render(Header, document.getElementById('content'));

// ################################ //
// CHAPTER : 02                     //
// ################################ //

// NOTE: Component Class without JSX Expression
class HelloWorld extends React.Component {
	render() {
		// NOTE: The render() method should return only one element.
		return React.createElement('h1', this.props, `Hello World + ${this.props.framework}.`);
	}
}

ReactDOM.render(
	// NOTE: In render() method should have one Parent element only.
	React.createElement(
		'div',
		null,
		React.createElement(HelloWorld, { id: 1, framework: 'Framework1', title: '1' }),
		React.createElement(HelloWorld, { id: 2, framework: 'Framework2', title: '2' }),
		React.createElement(HelloWorld, { id: 2, framework: 'Framework3', title: '3' })
	),
	// NOTE: Lastly at the end of ReactDOM.render() method, we have to add document.getElementById to print element to HTML file.
	document.getElementById('content2')
);

var React = require('react');
var ReactDOM = require('react-dom');
class WebName  extends React.Component {
	render() {
		return (
				<div id="box">
					{this.props.title}
				</div>
			);
	}
}
module.exports = WebName;
var React = require('react');

module.exports = React.createClass({
  render() {
    return <div>Hello, {(this.props.name || 'world') + '!'}</div>
  }
});

import React from 'react';

class Boom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'lightgray'
    };
  }

  render() {
    return (
      <button
          onClick={this.makeBoom}
          style={{
            border: 'solid 1px black',
            margin: '20px auto',
            display: 'block',
            backgroundColor: this.state.backgroundColor
          }}>
        Boom!
      </button>
    );
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({backgroundColor: nextProps.ready ? 'pink' : 'lightgray'});
  }

  makeBoom = (e) => {
    if (e) {
      e.currentTarget.blur();
      e.stopPropagation();
      e.preventDefault();
    }

    this.props.onDoom();
  }
}

export default Boom;

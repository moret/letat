import React from 'react';

class Boom extends React.Component {
  render() {
    return (
      <button
          onClick={this.makeBoom}
          style={{
            border: 'solid 1px black',
            margin: '20px auto',
            display: 'block',
            backgroundColor: this.props.ready ? 'pink' : 'lightgray'
          }}>
        Boom!
      </button>
    );
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

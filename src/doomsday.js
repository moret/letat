import React from 'react';

import Boom from './boom';
import LiveEarth from './live-earth';
import DeadEarth from './dead-earth';

class Doomsday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eulaOk: false,
      earth: <LiveEarth/>
    };
  }

  render() {
    return (
      <div>
        <h1>Bye, world!</h1>
        <p>
          By pressing the 'Boom!' button below, the world will end.
          The maker of this Doomsday machine is not responsible for any loss of
          profits resulting from the activation of this device.
        </p>
        I agree with the conditions:
        <input ref='eula' type='checkbox' onClick={this.ack}/>
        <Boom ready={this.state.eulaOk} onDoom={this.doom}/>
        {this.state.earth}
      </div>
    );
  }

  ack = (e) => {
    if (e) {
      e.currentTarget.blur();
    }

    this.setState({eulaOk: !this.state.eulaOk});
  }

  doom = () => {
    if (this.refs.eula.checked) {
      this.setState({earth: <DeadEarth/>});
    }
  }
}

export default Doomsday;

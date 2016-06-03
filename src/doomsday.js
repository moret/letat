import React from 'react';

import Boom from './boom';
import LiveEarth from './live-earth';
import DeadEarth from './dead-earth';

class Doomsday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eulaOk: false,
      liveEarth: true
    };
  }

  render() {
    const eulaEnabled = this.state.liveEarth;
    const ready = this.state.eulaOk && this.state.liveEarth;

    return (
      <div>
        <h1>Bye, world!</h1>
        <p>
          By pressing the 'Boom!' button below, the world will end.
          The maker of this Doomsday machine is not responsible for any loss of
          profits resulting from the activation of this device.
        </p>
        I agree with the conditions:
        <input
            checked={this.state.eulaOk}
            disabled={!eulaEnabled}
            type='checkbox'
            onChange={this.ack}/>
        <Boom ready={ready} onDoom={this.doom}/>
        {this.renderEarth()}
      </div>
    );
  }

  renderEarth = () => {
    if (this.state.liveEarth) {
      return <LiveEarth />;
    } else {
      return <DeadEarth/>;
    }
  }

  ack = (e) => {
    if (e) {
      e.currentTarget.blur();
    }

    if (this.state.liveEarth) {    
      this.setState({eulaOk: !this.state.eulaOk});
    }
  }

  doom = () => {
    if (this.state.eulaOk) {
      this.setState({liveEarth: false});
    }
  }
}

export default Doomsday;

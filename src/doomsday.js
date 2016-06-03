import React from 'react';

import EULA from './eula';
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
    const ready = this.state.eulaOk && this.state.liveEarth;

    return (
      <div>
        <EULA onAgreed={this.eulaOk} tooLate={!this.state.liveEarth}/>
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

  eulaOk = (acknowledged) => {
    this.setState({eulaOk: acknowledged});
  }

  doom = () => {
    if (this.state.eulaOk) {
      this.setState({liveEarth: false});
    }
  }
}

export default Doomsday;

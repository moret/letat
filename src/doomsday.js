import React from 'react';

import EULA from './eula';
import Boom from './boom';
import Spam from './spam';
import LiveEarth from './live-earth';
import DeadEarth from './dead-earth';

class Doomsday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eulaOk: false,
      spamOk: true,
      liveEarth: true
    };
  }

  render() {
    const ready = this.state.eulaOk && this.state.liveEarth;

    return (
      <div>
        <EULA
            onAgreed={this.eulaOk}
            onSpam={this.spamOk}
            tooLate={!this.state.liveEarth}/>
        <Boom ready={ready} onDoom={this.doom}/>
        {this.renderEarth()}
        {this.renderSpam()}
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

  renderSpam = () => {
    if (!this.state.liveEarth && this.state.spamOk) {
      return <Spam />;
    }
  }

  eulaOk = (ok) => {
    this.setState({eulaOk: ok});
  }

  spamOk = (ok) => {
    this.setState({spamOk: ok});
  }

  doom = () => {
    if (this.state.eulaOk) {
      this.setState({liveEarth: false});
    }
  }
}

export default Doomsday;

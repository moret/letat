import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeActions } from './store';

import EULA from './eula';
import Boom from './boom';
import Spam from './spam';
import LiveEarth from './live-earth';
import DeadEarth from './dead-earth';

@connect(
  reduxState => ({
    eulaOk: reduxState.eulaOk,
    spamOk: reduxState.spamOk,
    liveEarth: reduxState.liveEarth
  }),
  dispatch => ({
    onEULAOk: bindActionCreators(storeActions.eulaOk, dispatch),
    onSpamOk: bindActionCreators(storeActions.spamOk, dispatch),
    onDoom: bindActionCreators(storeActions.doom, dispatch)
  })
)
class Doomsday extends React.Component {
  render() {
    const ready = this.props.eulaOk && this.props.liveEarth;
    return (
      <div>
        <EULA
            eulaOk={this.props.eulaOk}
            spamOk={this.props.spamOk}
            liveEarth={this.props.liveEarth}
            onAgreed={this.props.onEULAOk}
            onSpam={this.props.onSpamOk}/>
        <Boom ready={ready} onDoom={this.props.onDoom}/>
        {this.renderEarth()}
        {this.renderSpam()}
      </div>
    );
  }

  renderEarth = () => {
    if (this.props.liveEarth) {
      return <LiveEarth />;
    } else {
      return <DeadEarth/>;
    }
  }

  renderSpam = () => {
    if (!this.props.liveEarth && this.props.spamOk) {
      return <Spam />;
    }
  }
}

export default Doomsday;

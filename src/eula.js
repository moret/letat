import React from 'react';

class EULA extends React.Component {
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
        <input
            checked={this.props.agreedOk}
            disabled={!this.props.liveEarth}
            type='checkbox'
            onChange={this.ack}/>
        Send me spam:
        <input
            checked={this.props.spamOk}
            disabled={!this.props.liveEarth}
            type='checkbox'
            onChange={this.spam}/>
      </div>
    );
  }

  ack = (e) => {
    if (e) {
      e.currentTarget.blur();
    }
    this.props.onAgreed();
  }

  spam = (e) => {
    if (e) {
      e.currentTarget.blur();
    }
    this.props.onSpam();
  }
}

export default EULA;

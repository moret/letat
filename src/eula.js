import React from 'react';

class EULA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreed: false
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
        <input
            checked={this.state.agreed}
            disabled={this.props.tooLate}
            type='checkbox'
            onChange={this.ack}/>
      </div>
    );
  }

  ack = (e) => {
    if (e) {
      e.currentTarget.blur();
    }

    if (!this.props.tooLate) {
      this.props.onAgreed(!this.state.agreed);
      this.setState({agreed: !this.state.agreed});
    }

  }
}

export default EULA;

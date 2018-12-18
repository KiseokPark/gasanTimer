import {connect} from "reaact-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from "../../reducer";

function mapStateProps(stats){

  const {isPlaying, elapsedTime, timeDuration} = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  }

}

function mapDispatchProps(dispatch){
  return{
    setTimer : bindActionCreators(actionCreators.startTimer, dispatch),
    restartTimer : bindActionCreators(actionCreators.restartTimer, dispatch),
    addSecond : bindActionCreators(actionCreators.addSecond, dispatch)

  }

}

export default connect(mapStateProps,mapDispatchProps)(Timer);
//组件一代码
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as IndexActions from "../redux/actions/index";

class ComponentOne extends Component {
  state = {
    right: 0,
  };

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    let { rights } = nextProps;

    this.setState({ right: rights });
  }

  change() {
    let a = this.state.right + 1;
    this.props.funcRights(a);
  }

  render() {
    let { rights } = this.props;
    return (
      <div>
        {rights}
        <h3 onClick={() => this.change()}>标题组件1</h3>
      </div>
    );
  }
}

export default connect(
  (state) => {
    console.log(state);
    return {
      rights: state.rightsActions.rights,
    };
  },
  (dispatch) => {
    return bindActionCreators(IndexActions, dispatch);
  },
  (stateProps, actionProps, parentProps) => {
    return {
      ...stateProps,
      ...actionProps,
      ...parentProps,
    };
  }
)(ComponentOne);

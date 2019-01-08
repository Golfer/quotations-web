import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuotations } from '../../actions/quotationsActions'
import ListData from './ListData'
class Quotations extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getQuotations();
  }

  render() {
    let content = !this.props.quotations.length > 0 ? <div>Loading...</div> : <ListData quotations={this.props.quotations}/>
    return content;
  }
}


function mapStateToProps(state) {
  return {
    quotations: state.quotations
  }
}

export default connect(mapStateToProps, {getQuotations})(Quotations)

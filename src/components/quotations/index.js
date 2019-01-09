import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as quotationsActions from '../../actions/quotationsActions'
import ListData from './ListData'
import Button from '@material-ui/core/Button';

class Quotations extends Component {

  state = {
    loading: false
  }

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.actions.getQuotations();
  }

  handleFetchAdditionalRows(){
    this.setState({
      loading: !this.state.loading
    }, () => {
      this.props.actions.getQuotations(this.props.meta.pagination.next_page)
      //
    })
  }
  render() {
    let content = !this.props.quotations.length > 0 ? <div>Loading...</div> :
      <div>
        <ListData quotations={this.props.quotations} pagination={this.props.meta.pagination}/>
        <Button color="primary" size="large" onClick={() => {this.handleFetchAdditionalRows(); this.setState({loading: false})}}> Load External data </Button>
        {this.state.loading && <div>Loading.............</div>}
      </div>
    return content;
  }
}


function mapStateToProps(state) {
  return {
    meta: state.quotations.meta,
    quotations: state.quotations.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, quotationsActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotations)

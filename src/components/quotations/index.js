import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as quotationsActions from '../../actions/quotationsActions'
import ListData from './ListData'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

class Quotations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount(){
    this.props.actions.getQuotations();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loading: false})
  }

  handleFetchAdditionalRows(){
    this.props.actions.getQuotations(this.props.meta.pagination.next_page)
    this.setState({loading: true})
  }

  render() {
    let content = !this.props.quotations.length > 0 ? <div><LinearProgress color="primary" /></div> :
      <div>
        <ListData quotations={this.props.quotations} pagination={this.props.meta.pagination}/>
        <Button color="primary" size="large" onClick={() => this.handleFetchAdditionalRows()}> Load External data </Button>
        {this.state.loading && <div>
          <LinearProgress color="primary"/>
          <LinearProgress color="secondary" />
        </div>}
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

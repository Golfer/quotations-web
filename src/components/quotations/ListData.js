import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

class ListData extends React.Component {
  render(){
    return(
      <div>
        <List component="nav">
          {this.props.quotations.map((quotation) =>
            <ListItem button key={quotation.id}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary={quotation.body}
                secondary={quotation.tags.map((tag) => {return tag.name}).join(', ')}
              />
            </ListItem>
          )}
        </List>
      </div>
    )
  }
}
export default ListData
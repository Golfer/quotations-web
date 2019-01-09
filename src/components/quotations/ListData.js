import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Typography from '@material-ui/core/Typography';

class ListData extends React.Component {
  render(){
    return(
      <div>
        <span>{this.props.quotations.length}</span>
        <List component="nav">
          {this.props.quotations.map((quotation) =>
            <ListItem button key={quotation.id}>
              <ListItemIcon>
                <FormatQuoteIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary={quotation.body}
                secondary={
                  <React.Fragment>
                    <Typography component="span" color="textSecondary" align='left'>
                      {quotation.tags.map((tag) => {return tag.name}).join(', ')}
                    </Typography>
                    <Typography component="span" color="textPrimary" align='right'>{quotation.author_full_name}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          )}
        </List>
      </div>
    )
  }
}
export default ListData
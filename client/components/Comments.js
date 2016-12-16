import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FaAlignLeft from 'react-icons/lib/fa/align-left';

const Comments = React.createClass({
  getInitialState() {
    return ({ author: "", comment: "" })
  },
  _handleAuthorChange: function(e) {
        this.setState({
            author: e.target.value
        });
  },
  _handleCommentChange: function(e) {
        this.setState({
            comment: e.target.value
        });
  },
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.pollId, i)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault();
    const { pollId } = this.props.params;
    const author = this.state.author;
    const comment = this.state.comment;
    this.props.addComment(pollId, author, comment);
    this.setState(this.getInitialState());
  },
  render() {
    return (
      <div className="comments-section">
        <h2>Comments</h2>
        <Paper>
          <div className="comments-content">
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
              <TextField value={this.state.author}
                         onChange={this._handleAuthorChange}
                         hintText="Choose a Name for this Comment"
                         floatingLabelText="Author"/><br/>
              <TextField value={this.state.comment}
                         onChange={this._handleCommentChange}
                         fullWidth={true}
                         hintText="Comment About this Poll"
                         floatingLabelText="Comment"/>
              <input type="submit" hidden />
            </form>
            <div className="commented">
              {this.props.pollComments.map(this.renderComment)}
            </div>
          </div>
        </Paper>
      </div>
    )
  }
});

export default Comments;

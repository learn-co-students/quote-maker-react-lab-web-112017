import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux'
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';



class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => <QuoteCard
                                            key={q.id}
                                            delete={this.props.delete}
                                            upvote={this.props.upvote}
                                            downvote={this.props.downvote}
                                            quote={q} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      delete: removeQuote,
      upvote: upvoteQuote,
      downvote: downvoteQuote
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

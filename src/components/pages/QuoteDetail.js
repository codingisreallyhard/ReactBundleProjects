import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import React, { Fragment } from "react";
import Comments from "../comments/Comments";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Flo",
    text: "Learning is fun",
  },
  {
    id: "q2",
    author: "Floreen",
    text: "Learning is not fun",
  },
];

export default function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

import React from "react";
import QuoteList from "../quotes/QuoteList";

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

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

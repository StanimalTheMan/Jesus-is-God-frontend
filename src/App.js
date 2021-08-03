import React from 'react';
import ClaimList from './components/ClaimList'

const claims = [
  {claim: 'Omnipresent', id: 1, verseList:[{id: 7, book: 'John', chapter: 8, verses: [57, 58], word: "Then said the Jews unto him, Thou art not yet fifty years old, and hast thou seen Abraham?  Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I AM"}]},
  {claim: 'Omniscient', id: 2},
  {claim: 'Omnipotent', id: 3},
  {claim: 'Forgive Sins', id: 4},
  {claim: 'Accepts Worship', id: 5},
  {claim: 'Other God Claims', id: 6}
]

const App = (props) => {
  return <ClaimList claims={claims} />
}

export default App;

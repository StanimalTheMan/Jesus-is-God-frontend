import React from 'react';
import ClaimList from './components/ClaimList'

const claims = [
  {claim: 'Omnipresent', id: 1},
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

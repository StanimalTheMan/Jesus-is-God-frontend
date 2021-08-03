import React from 'react';
import Claim from './Claim';

const ClaimList = ({ claims }) => {
    return (
        <>
        {claims.map(claim => <Claim key={claim.id}  claim={claim.claim} verseList={claim.verseList} />)}
        </>
    )
}

export default ClaimList;
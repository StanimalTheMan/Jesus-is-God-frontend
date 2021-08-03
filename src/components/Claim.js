import React from 'react';
import VerseList from './VerseList';

const Claim = ({claim, verseList}) => {
    const [showVerses, setShowVerses] = React.useState(false);

    const handleClick = () => {
        setShowVerses((prevState) => !prevState);
    }

    console.log(showVerses)

    return (
        <div onClick={handleClick}><div>{claim}</div>{showVerses && <VerseList verseList={verseList} />}</div>    
    )

}

export default Claim;
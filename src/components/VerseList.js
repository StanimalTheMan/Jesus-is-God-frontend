import React from 'react';
import Verse from './Verse';

const VerseList = ({verseList}) => {
    return <ul>
        {verseList.map(verse => <Verse key={verse.id} verse={verse} />)}
    </ul>
}

export default VerseList;
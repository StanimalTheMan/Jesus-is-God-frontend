import React from 'react';

const Verse = ({verse}) => {
    return <li>{verse.book} {verse.chapter}:{verse.verses.map((v, i) => {
        if (i < verse.verses.length - 1) {  return v + "-"} else return v})} {verse.word}</li>
}

export default Verse;
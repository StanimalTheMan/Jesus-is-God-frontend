import React from "react";
import ClaimList from "./components/ClaimList";

const claims = [
  {
    claim: "OMNIPRESENT / ETERNAL",
    id: 1,
    verseList: [
      {
        id: 7,
        book: "John",
        chapter: 8,
        verses: [57, 58],
        word: "Then said the Jews unto him, Thou art not yet fifty years old, and hast thou seen Abraham?  Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I AM",
      },
      {
        id: 8,
        book: "John",
        chapter: 17,
        verses: [5],
        word: "And now, O Father, glorify thou me with thine own self with the glory which I had with thee before the world was",
      },
    ],
  },
  {
    claim: "OMNISCIENT / ALL KNOWING",
    id: 2,
    verseList: [
      {
        id: 9,
        book: "John",
        chapter: 1,
        verses: [48],
        word: "Nathaniel *said to Him, 'How do You know me?'  Jesus answered and said to him, 'Before Philip called you, when you were under the fig tree, I saw you.'",
      },
      {
        id: 10,
        book: "John",
        chapter: 16,
        verses: [30],
        word: "Now we know that You know all things, and have no need for anyone to question You; by this we believe that You came from God",
      },
      {
        id: 11,
        book: "Matthew",
        chapter: 11,
        verses: [27],
        word: "All things have been handed over to Me by My Father; and no one knows the Son except the Father; nor does anyone know the Father except the Son, and anyone to whom the Son wills to reveal Him.",
      },
    ],
  },
  {
    claim: "OMNIPOTENT / ALL POWERFUL",
    id: 3,
    verseList: [
      {
        id: 12,
        book: "Matthew",
        chapter: 28,
        verses: [18],
        word: "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.",
      },
      {
        id: 13,
        book: "Mark",
        chapter: 8,
        verses: [31, 32],
        word: "And he began to teach them, that the Son of man must suffer many things, and be rejected of the elders, and of the chief priests, and scribes, and be killed, and after three days rise again.  And he spake that openly.  And Peter took him, and began to rebuke him.",
      },
    ],
  },
  {
    claim: "Forgive Sins",
    id: 4,
    verseList: [
      {
        id: 14,
        book: "Matthew",
        chapter: 9,
        verses: [2],
        word: "And, behold, they brought to him a man sick of the palsy, lying on a bed: and Jesus seeing their faith said unto the sick of the palsy; Son, be of good cheer; thy sins be forgiven thee.",
      },
      {
        id: 15,
        book: "John",
        chapter: 5,
        verses: [26 - 27],
        word: "For as the Father hath life in himself; so hath he given to the Son to have life in himself; and hath given him authority to execute judgment also, because he is the Son of man.",
      },
    ],
  },
  {
    claim: "ACCEPTS WORSHIP",
    id: 5,
    verseList: [
      {
        id: 16,
        book: "Matthew",
        chapter: 14,
        verses: [33],
        word: "Then they that were in the ship came and worshipped him, saying, Of a truth thou art the Son of God.",
      },
      {
        id: 17,
        book: "John",
        chapter: 20,
        verses: [28, 29],
        word: "And Thomas answered and said unto hiim, My Lord and my God.  Jesus saith unto him, Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed.",
      },
    ],
  },
  {
    claim: "OTHER GOD CLAIMS",
    id: 6,
    verseList: [
      {
        id: 18,
        book: "John",
        chapter: 14,
        verses: [13, 14],
        word: "And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son.  If ye shall ask any thing in my name, I will do it.",
      },
    ],
  },
];

const App = (props) => {
  return <ClaimList claims={claims} />;
};

export default App;

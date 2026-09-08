"use client";

import { useEffect, useState } from "react";

const statements = [
  "Is Resilient",
  "Is A Problem Solver",
  "Thinks In Systems",
  "Cares About The Details",
  "Turns Ideas Into Products",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 1000;
const PAUSE_AFTER_DELETING = 300;

const ChangingText = () => {
  const [statementIndex, setStatementIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStatement = statements[statementIndex];

    let timeout: ReturnType<typeof setTimeout>;

    // Typing
    if (!isDeleting && text.length < currentStatement.length) {
      timeout = setTimeout(() => {
        setText(currentStatement.slice(0, text.length + 1));
      }, TYPING_SPEED);
    }

    // Finished typing - wait before deleting
    else if (!isDeleting && text.length === currentStatement.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
    }

    // Deleting
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentStatement.slice(0, text.length - 1));
      }, DELETING_SPEED);
    }

    // Finished deleting - move to next statement
    else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setStatementIndex((current) => (current + 1) % statements.length);
      }, PAUSE_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, statementIndex]);

  return (
    <span className="text-primary-light">
      {text}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
};

export default ChangingText;

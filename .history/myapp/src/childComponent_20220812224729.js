import React, { useEffect, useState } from "react";

export default function ChildComponent({ getData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("child component - useEffect - getData");
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
   //  console.log(comments);
  }, [getData]);

  return (
    <div>
      <p>Child component</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}

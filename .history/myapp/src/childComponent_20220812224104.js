import React, { useEffect, useState } from 'react';

const ChildComponent = ({getData}) => {
   const [comments, setComments] = useState([])

   useEffect(()=>{
      console.log('child component - useEffect - getData');
      getData('comment')
         .then(res => res.json)
         .then(res => {
            const comments = res.data()
            setComments(comments)
         })
   }, [getData])
   return (
      <div>
         <p>Child component</p>
         
      </div>
   );
};

export default ChildComponent;
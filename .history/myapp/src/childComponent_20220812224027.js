import React, { useEffect, useState } from 'react';

const ChildComponent = ({getData}) => {
   const [comments, setComments] = useState([])

   useEffect(()=>{
      console.log('child component - useEffect - getData');
      getData('comment')
         .then(res => res.json)
   }, [getData])
   return (
      <div>
         
      </div>
   );
};

export default ChildComponent;
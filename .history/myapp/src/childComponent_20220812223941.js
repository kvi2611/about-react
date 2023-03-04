import React, { useEffect, useState } from 'react';

const ChildComponent = ({getData}) => {
   const [comments, setComments] = useState([])

   useEffect(()=>{}, [getData])
   return (
      <div>
         
      </div>
   );
};

export default ChildComponent;
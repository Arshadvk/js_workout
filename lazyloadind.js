import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;




// this is the the componetn 
///////////////////////////////////////////
// import React from 'react';
// const LazyComponent = () => {
//   return (
//     <div>
//       <h1> LazyComponent</h1>
//     </div>
//   );
// };

// export default LazyComponent;

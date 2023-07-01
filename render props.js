import React from 'react';

// A component that accepts a render prop
const RenderPropsComponent = ({ render }) => {
  const data = 'Hello, World!';

  // Call the render prop and pass data as an argument
  return render(data);
};

// A component that uses the RenderPropsComponent
const App = () => {
  return (
    <div>
      <h1>Render Props Example</h1>
      <RenderPropsComponent
        render={(data) => (
          <p>{data}</p>
        )}
      />
    </div>
  );
};

export default App;

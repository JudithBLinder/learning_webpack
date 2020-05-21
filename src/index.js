const React = require('React');
const ReactDOM = require('React-dom');

class App extends React.Component{
  render() {
    return (
      <h1>
        You've figured out webpack!
      </h1>
    )
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <App />,
  app,
  () => {
    console.log('Congrats!');
  },
);
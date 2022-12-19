import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error);
  console.log(resetErrorBoundary);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Counter(props) {
  throw new Error('Simulated error.');
}

function App() {
  const ui = (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log('onReset');
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <Counter />
    </ErrorBoundary>
  );

  const enable = true;
  return <div className="App">hello{enable ? ui : <p>test</p>}</div>;
}

export default App;

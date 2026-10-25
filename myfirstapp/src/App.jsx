function App(props) {
  const currDate = new Date;
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>The current time is {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;

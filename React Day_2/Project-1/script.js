const App = () => {
  return (
    <>
      <h1>Heading1</h1>
      <div>
        <p>Div1_Inside</p>
      </div>
    </>
  );
};
const Second_Div = () => {
  return (
    <div>
      <p>Div_2Inside</p>
      <a href="#">Div_2Inside atag</a>
    </div>
  );
};

const Third_Div = () => {
    return(
  <div>
    <App/>
    <Second_Div/>
    <p>Last Para</p>
  </div>
    );
};
ReactDOM.render(<Third_Div />, document.getElementById("root"));

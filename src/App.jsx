import Card from "./components/Card";

function App() {
  return (
    <>
      <Card>
        <img
          src="https://loremflickr.com/200/200?random=1"
          className="card-img-top"
          alt="Картинка"
        />
      </Card>
      <Card />
    </>
  );
}

export default App;

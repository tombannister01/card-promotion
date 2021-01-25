import './App.css';
import Card from './Card'
import Title from './Title'

function App() {

  return (<>
    <section className="title-section">
      <Title />
    </section>

    <div className="card-layout">
      <Card />
      <Card />
      <Card />
    </div>
  </>
  );
}

export default App;

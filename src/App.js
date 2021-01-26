import './App.css';
import Card from './Card'
import Title from './Title'
import TermsAndConditions from './TermsAndConditions'

function App() {

  return (<>
    <section className="title-section">
      <Title />
    </section>
    <section>
      <div className="card-layout">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    <section>
      <TermsAndConditions />
    </section>
  </>
  );
}

export default App;

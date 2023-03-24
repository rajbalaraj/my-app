import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'dr.Mahfuz', Job: 'Inger' },
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' }
]





function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      <Person name="developer"></Person>


      {
        singers.map(singer => <Person name={singer.name} ></Person>)
      }
    </div>

  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1 >Devoloperraj</h1>
      <p>{props.name}</p>
    </div>
  )
}

export default App;

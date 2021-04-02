import { Link } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <div className="index">
      <h1>index</h1>
      <Link to={'/table'}>table</Link>
    </div>
  );
}

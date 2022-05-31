import { Link } from 'react-router-dom';

export function Home() {
  return (
    <ul>
      <li>
        <Link to={'/normal'}>normal</Link>
      </li>
      <li>
        <Link to={'/solution'}>solution (kinda of)</Link>
      </li>
    </ul>
  );
}

import { Link } from 'react-router-dom';

export function Home() {
  return (
    <ul>
      <li>
        <Link to={'/normal'}>normal</Link>
      </li>
    </ul>
  );
}

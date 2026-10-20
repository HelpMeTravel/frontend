import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '15px 30px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', color: '#333' }}>
          TransitRules
        </Link>
      </div>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/login">Log in</Link>
      </nav>
    </header>
  );
}
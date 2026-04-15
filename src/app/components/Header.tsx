import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: '01 - Home', path: '/' },
    { label: '02 - Ventures', path: '/ventures' },
    { label: '03- Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
        >
          CORSI ENTERPRISES
        </Link>

        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:opacity-70 transition-opacity ${
                    location.pathname === item.path
                      ? 'border-b-2 border-current'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

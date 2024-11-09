import { Outlet } from 'react-router-dom';
import { container } from '@/layout/index.css';

function Layout() {
  return (
    <div>
      <header>
      </header>
      <main className={container}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
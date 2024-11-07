import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
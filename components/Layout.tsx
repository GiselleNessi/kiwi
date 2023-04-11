import React from 'react';
import Link from 'next/link';
import { useLogout } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { logout } = useLogout();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    console.log('Logged out');
    router.push('/login');
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/home">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Footer content goes here</footer>
    </>
  );
};

export default Layout;

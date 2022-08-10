import { FC } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Header: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <header>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </header>
    );
  }

  return (
    <header>
      <Link href="/api/auth/login">Login</Link>
    </header>
  );
};

export default Header;

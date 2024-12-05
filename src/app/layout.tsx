import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
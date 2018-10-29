import React from 'react';
import { Link, Button } from '@/components/ui';

const Header = () => {
  const linkCls = 'px-4 py-2';
  return (
    <header className="flex items-center my-6">
      <Link extraClassName={linkCls} to="/">
        <div className="font-bold">kommunity.app</div>
      </Link>
      <div className="flex flex-grow">
        <Link extraClassName={linkCls} to="/">Features</Link>
        <Link extraClassName={linkCls} to="/">Solutions</Link>
        <Link extraClassName={linkCls} to="/">Communities</Link>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          🔍 <input className="text-gray px-4 py-2" placeholder="Search Communities" />
        </div>
        <Link extraClassName={linkCls} to="/login">Login</Link>
        <Link extraClassName={linkCls} to="/signup">
          <Button extraClassName="font-medium text-base" size="small" type="outline" label="Signup" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

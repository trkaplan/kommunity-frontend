import React from 'react';
import { Link, Button, Input } from '@/components/ui';
import { Search } from 'react-feather';

const Header = () => {
  const linkCls = 'px-4 py-2';
  return (
    <header className="flex items-center my-6">
      <Link extraClassName={linkCls} to="/">
        <div className="font-bold">kommunity.app</div>
      </Link>
      <div className="flex flex-grow">
        <Link extraClassName={linkCls} to="/features">Features</Link>
        <Link extraClassName={linkCls} to="/communities">Communities</Link>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <Input
            iconLeft={<Search className="stroke-current text-lgray" />}
            placeholder="Search Communities"
            type="text"
            noBorder
          />
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

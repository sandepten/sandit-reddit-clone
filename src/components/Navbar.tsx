import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 border-b border-border bg-mantle p-3">
      <div className="flex h-full items-center justify-between">
        <Link href="/">
          <p className="font-mono text-xl font-bold text-mauve">Sandit</p>
        </Link>
        <div className="flex items-center">
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

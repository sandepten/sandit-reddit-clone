'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.error(error);
      // TODO: toast notification
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={loginWithGoogle} isLoading={isLoading} className="my-2 w-full">
        <Icons.google className="mr-2 h-5 w-5" />
        <p>Continue with Google</p>
      </Button>
    </div>
  );
};

export default UserAuthForm;

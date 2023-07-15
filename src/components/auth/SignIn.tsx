import Link from 'next/link';
import UserAuthForm from './UserAuthForm';

const SignIn = () => {
  return (
    <div className="container flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <p className="text-3xl font-bold text-mauve">S</p>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back!</h1>
        <p className="mx-auto max-w-xs text-sm">
          By continuing, you are setting up an account with Sandit, and you agree to our User Agreement and Privacy
          Policy.
        </p>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-subtext1">
          New to Sandit?{' '}
          <Link href="/sign-up">
            <p className="font-semibold text-mauve underline underline-offset-4 hover:text-mauve/70">Sign up</p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

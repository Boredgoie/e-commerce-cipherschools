import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HorizontalLine from '../components/other/HorizontalLine';
import { useAuth } from '../contexts/authContexts';

const LoginPage: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true);
  const { handleLogin, handleRegistration } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    const { username, password } = e.currentTarget;

    if (isLoggingIn) {
      if (handleLogin(username.value, password.value)) {
        navigate('/');
      }
    } else {
      const email = e.currentTarget.email;

      if (handleRegistration(username.value, email.value, password.value)) {
        navigate('/');
      }
    }
  };

  return (
    <div className="bg-gray-100 rounded-md shadow-md max-w-lg mx-auto px-4 py-6 my-[8%] md:my-[3%]">
      <div className="text-xl">Welcome back!</div>
      <HorizontalLine />

      <form
        onSubmit={(e) => {
          handleAuth(e);
        }}
        className="flex flex-col gap-5 text-lg"
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="px-3 py-2 bg-transparent border-2 rounded-md border-gray-300"
        />

        {!isLoggingIn && (
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="px-3 py-2 bg-transparent border-2 rounded-md border-gray-300"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="px-3 py-2 bg-transparent border-2 rounded-md border-gray-300"
        />

        <div>
          {isLoggingIn ? (
            <div>
              New user?{' '}
              <span
                className="text-blue-800 cursor-pointer"
                onClick={() => setIsLoggingIn(false)}
              >
                Register
              </span>
            </div>
          ) : (
            <div>
              Already registered?{' '}
              <span
                className="text-blue-800 cursor-pointer"
                onClick={() => setIsLoggingIn(true)}
              >
                Login
              </span>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-800 mx-[30%] text-white px-2 py-1.5 rounded-md hover:bg-blue-900"
        >
          {isLoggingIn ? <span>Login</span> : <span>Register</span>}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

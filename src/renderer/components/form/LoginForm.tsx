import { useNavigate } from 'react-router-dom';
import Logo from 'assets/image/loa-logo.png';
import { FormEvent } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      noValidate
      className="flex flex-col items-center justify-center gap-4 w-full h-full"
    >
      <img src={Logo} alt="LOA logo" />
      <h1 className="font-poppins font-bold text-xl lg:text-2xl">
        Schedule Management
      </h1>

      <div className="flex flex-col gap-4 w-[55%] mt-10">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 bg-zinc-100 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 bg-zinc-100 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 py-1.5 rounded-md mt-4 font-bold text-lg"
        >
          Sign in
        </button>
        <button
          type="submit"
          className="text-zinc-500 text-sm underline text-center"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
}

export default LoginForm;

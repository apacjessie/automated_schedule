import HeroImage from 'assets/image/login.png';
import LoginForm from '../components/form/LoginForm';

const Login = () => {
  return (
    <div
      className=" 
            h-screen
            grid md:grid-cols-[55%,_45%]"
    >
      <img
        className="m-0 p-0 object-cover h-full hidden md:block"
        alt="Login side background"
        src={HeroImage}
      />
      <div className="bg-white flex w-full h-full flex-col justify-center  items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

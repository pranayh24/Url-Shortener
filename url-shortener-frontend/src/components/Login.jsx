import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import TextField from './TextField'
import api from '../api/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
	const [loader,setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defauktValues: {
            username: '',
            email: '',
            password: '',
        },
        mode: "onTouched",
    });

    const loginHandler = async(data) => {
		setLoader(true);
        try {
            // const{ data : response } = await api.post(
            //     "api/auth/public/register",
            //     data
            // );
            // reset();
            // navigate("/login");
            toast.success("Registeration Successful!");
        } catch(error) {
            console.log(error);
            toast.error("Registration Failed! PLease try again");
        } finally {
            setLoader(false);
        }
    };

  return (
    <div
      className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <form onSubmit= {handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
            <h1 className="text-center font-serif text-btnColor font-bold lg:text-xl text-xl">
                Login
            </h1>

            <hr className="mt-2 mb-5 text-black"/>

            <div className="flex flex-col gap-3">
                <TextField
                label="Username"
                id="username"
                type="text"
                errors={errors}
                register={register}
                required={true}
                message="Username is required"
                placeholder="Enter your username"
                />

                <TextField
                label="Password"
                id="password"
                type="password"
                errors={errors}
                register={register}
                min = {6}
                required={true}
                message="Password is required"
                placeholder="Enter your password"
                />

            </div>

            <button
				disabled={loader}
                type="submit"
				className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'>
					{loader ? "Loading..." : "Login"}

            </button>

			<p className='text-center text-sm text-slate-600 mt-6'>
				Don't have an account? 
				<Link className='font-semibold underline hover:text-black'
				to="/register">
					<span className="text-btnColor"> SignUp</span>
				</Link>
			</p>
        </form>
    </div>
  )
}

export default Login
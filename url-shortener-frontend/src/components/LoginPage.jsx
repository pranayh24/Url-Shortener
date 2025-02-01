import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextField from './TextField';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
        mode: 'onTouched',
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post('api/auth/public/login', data);
            setToken(response.token);
            localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token));
            toast.success('Login Successful!');
            reset();
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            toast.error('Login Failed! Please try again' + error);
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="bg-white shadow-lg rounded-lg p-8 sm:w-96 w-full"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <div className="space-y-4">
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
                        min={6}
                        required={true}
                        message="Password is required"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    disabled={loader}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md mt-6 hover:bg-blue-700 transition duration-200"
                >
                    {loader ? 'Loading...' : 'Login'}
                </button>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link className="text-blue-600 hover:underline" to="/register">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
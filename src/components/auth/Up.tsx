import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function Up() {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <>
            <p className='pb-5 text-center'>
                Welcome back! Please enter your email and password to access your
                account.
            </p>
            <form>
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='email'
                    >
                        Email
                    </label>
                    <input

                        className='rounded-3xl shadow appearance-none border  w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Email'
                    />

                </div>
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='username'
                    >
                        Username
                    </label>
                    <input

                        className='rounded-3xl shadow appearance-none border  w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='username'
                        name='username'
                        type='text'
                        placeholder='Username'
                    />

                </div>
                <div className='mb-4 relative'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='shadow appearance-none border rounded-3xl w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        name='password'
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder='Password'
                    />
                    <button
                        type="button"
                        onClick={handleTogglePasswordVisibility}
                        className="absolute inset-y-0 right-3 flex items-center -bottom-8"
                    >
                        <FontAwesomeIcon icon={!isPasswordVisible ? faEyeSlash : faEye} className="h-5 w-5 text-gray-500" />
                    </button>
                </div>
               
                <button
                    className='bg-secondary px-8 py-2 rounded-full text-primary font-bold float-end hover:bg-text transition duration-300'
                    type='submit'
                >
                    Register
                </button>


            </form>
        </>
    )
}

export default Up
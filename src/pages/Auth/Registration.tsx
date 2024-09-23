import { useState } from "react"
import signIn from "../../assets/signIn.jpeg"
import signUp from "../../assets/signup.jpg"
import In from "../../components/auth/in";
import Up from "../../components/auth/Up";


function Registration() {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);

    const handleLoginClick = () => {
        setIsSignIn(true);
    }

    const handleRegisterClick = () => {
        setIsSignIn(false);
    }

    return (
        <div
            className='flex items-center justify-center min-h-screen py-10 sm:py-40 '>
            <div className=' flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-3xl mx-auto shadow-lg overflow-hidden'>
                {/* Image Container */}
                <div
    className={`w-full lg:w-1/2 flex items-center justify-center p-0 bg-no-repeat bg-cover bg-center rounded-2xl`}
    style={{
        backgroundImage: `url(${isSignIn ? signIn : signUp})`,
        minHeight: '300px', // Adjust this as needed
        margin: '20px',
    }}
>
    {/* Background image is set here */}
</div>

                {/* Form Container */}
                <div className='w-full lg:w-1/2 flex items-center justify-center p-4'>
                    <div className='pb-20 px-8 pt-10 mb-4 w-full max-w-sm'>
                        <div className="font-bold mb-4 flex bg-secondary p-2 text-primary bg-opacity-60 justify-between rounded-full w-fit m-auto gap-4">
                            <div
                                onClick={handleLoginClick}
                                className={`px-8 py-2 rounded-full cursor-pointer ${!isSignIn ? 'bg-opacity-60' : 'bg-secondary'}`}
                            >
                                LogIn
                            </div>
                            <div
                                onClick={handleRegisterClick}
                                className={`px-8 py-2 rounded-full cursor-pointer ${isSignIn ? 'bg-opacity-60' : 'bg-secondary'}`}
                            >
                                Register
                            </div>
                        </div>
                        {isSignIn? <In/>
                        :<Up/>}

                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration

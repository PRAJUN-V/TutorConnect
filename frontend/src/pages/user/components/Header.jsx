import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    const handleCourseClick = () => {
        navigate('/student/all-course');
    };
    const handleAboutClick = () => {
        navigate('/about');
    };
    const handleContactClick = () => {
        navigate('/contact');
    };
    const handleExamClick = () => {
        navigate('/student/exam');
    };
    const handleDiscussionClick = () => {
        navigate('/student/discussion');
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-gray-500 p-4">
            <nav className="flex items-center justify-between">

                {/* Menu Button for Small Screens */}
                <div className="sm:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="hidden sm:flex space-x-8">
                    <li><a onClick={handleHomeClick} className="text-white cursor-pointer hover:text-gray-300">Home</a></li>
                    <li><a onClick={handleCourseClick} className="text-white cursor-pointer hover:text-gray-300">Courses</a></li>
                    <li><a onClick={handleExamClick} className="text-white cursor-pointer hover:text-gray-300">Exam</a></li>
                    <li><a onClick={handleDiscussionClick} className="text-white cursor-pointer hover:text-gray-300">Discussion</a></li>
                    <li><a onClick={handleAboutClick} className="text-white cursor-pointer hover:text-gray-300">About</a></li>
                    <li><a onClick={handleContactClick} className="text-white cursor-pointer hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

import React, { useState, useEffect } from "react";
// import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../../../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../../constants";
import Logo from "../../../assets/images/Logo.jpeg"

function SubHeader() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuthentication().catch(() => setIsAuthenticated(false));
    }, []);

    const handleUnauthorized = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        setIsAuthenticated(false);
    };

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/account/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                await checkUserStatus(res.data.access);
            } else {
                handleUnauthorized();
            }
        } catch (error) {
            console.log(error);
            handleUnauthorized();
        }
    };

    const checkUserStatus = async (token) => {
        try {
            const res = await api.get("/api/account/user-status/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.status === 200) {
                if (res.data.is_active) {
                    const user_profile_image = res.data.profile.image
                        ? `http://127.0.0.1:8000${res.data.profile.image}`
                        : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
                    setProfileImage(user_profile_image);
                    console.log(res.data.profile.image);
                    setIsAuthenticated(true);
                } else {
                    handleUnauthorized();
                }
            } else {
                handleUnauthorized();
            }
        } catch (error) {
            console.log(error);
            handleUnauthorized();
        }
    };

    const checkAuthentication = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            handleUnauthorized();
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;
        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            await checkUserStatus(token);
        }
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    const handleLogoutClick = () => {
        navigate("/logout");
    };

    return (
        <div className="bg-gray-100 p-2 flex justify-between items-center shadow">
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="TutorConnect Logo" className="h-16 md:h-13 rounded-full" />
                <span className="text-xl md:text-2xl font-bold">
                    <span className="text-blue-500">Tutor</span>
                    <span className="text-gray-500">Connect</span>
                </span>
            </div>
            <div className="flex items-center space-x-4 pr-4">
                {/* <FaBell className="text-gray-500 h-5 w-5 md:h-6 md:w-6 hover:text-blue-600" /> */}
                {isAuthenticated ? (
                    <>
                        <img
                            onClick={handleProfileClick}
                            className="h-12 w-12 md:h-16 md:w-16 rounded-full cursor-pointer"
                            src={profileImage}
                            alt="User Profile"
                        />
                        <button
                            onClick={handleLogoutClick}
                            className="bg-gray-500 text-white py-1 px-3 md:py-2 md:px-4 rounded hover:bg-gray-600"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => navigate("/register")}
                            className="bg-blue-500 text-white py-1 px-3 md:py-2 md:px-4 rounded hover:bg-blue-600"
                        >
                            Create Account
                        </button>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-gray-500 text-white py-1 px-3 md:py-2 md:px-4 rounded hover:bg-gray-600"
                        >
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default SubHeader;

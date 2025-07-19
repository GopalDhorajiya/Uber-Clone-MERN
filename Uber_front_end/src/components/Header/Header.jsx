    import React, { act } from 'react';
    import { useNavigate } from 'react-router-dom';

    function Header() {
        const mainNavItems = [
            { name: 'Home', path: '/' , active : true},
            { name: 'Rides', path: '/rides' ,active : true },
        ];
        
        const authNavItems = [
            { name: 'Profile', path: '/profile',active : true },
            { name: 'Login', path: '/login' ,active : true  },
            { name: 'Signup', path: '/signup',active : true  },
        ];
        const navigate = useNavigate();
        return ( 
            <header className="bg-white text-black shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left side: Logo and Main Nav */}
                    <div className="flex items-center space-x-8">
                        <a href="/" className="text-3xl font-bold">Uber</a>

                        {/* Desktop Navigation (your logic) */}
                        <nav className="hidden md:flex">
                            <ul className="flex items-center space-x-2">
                                {mainNavItems.map((item) => (
                                    item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className="px-4 py-2 text-md font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                    )
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right side: Auth Actions and Mobile Menu Toggle */}
                    <div className="flex items-center space-x-2">
                        {/* Desktop Auth Actions (your logic) */}
                        <div className="hidden md:flex items-center space-x-2">
                            {authNavItems.map((item) => (
                                item.active && (
                                <button
                                    key={item.name}
                                    onClick={() => navigate(item.path)}
                                    // Applying special styling for the 'Signup' button
                                    className={`px-4 py-2 text-md font-medium rounded-full transition-colors duration-200 hover:bg-gray-100`}
                                >
                                    {item.name}
                                </button>
                            )))}
                        </div>

                    </div>
                </div>
            </div>
        </header>
        );
    }

    export default Header;
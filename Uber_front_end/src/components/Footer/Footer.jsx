import React from 'react';

// --- SVG Icon Components for Social Media & UI ---
const GlobeIcon = () => (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

const LocationIcon = () => (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
        {children}
    </a>
);

// --- Main Footer Component ---
const Footer = () => {
    // Data for the footer links to keep the JSX clean
    const footerSections = [
        {
            title: 'Company',
            links: ['About us', 'Our offerings', 'Newsroom', 'Investors', 'Blog', 'Careers'],
        },
        {
            title: 'Products',
            links: ['Ride', 'Drive', 'Deliver', 'Eat', 'Uber for Business'],
        },
        {
            title: 'Global citizenship',
            links: ['Safety', 'Diversity and Inclusion'],
        },
        {
            title: 'Travel',
            links: ['Airports', 'Cities'],
        },
    ];

    return (
        <footer className="bg-black text-white font-sans">
            <div className="container mx-auto px-6 lg:px-8 py-12">
                {/* Top section: Logo and Help Center */}
                <div className="mb-12">
                    <a href="/" className="text-2xl font-bold">Uber</a>
                </div>
                <div className="mb-12">
                     <a href="/help" className="text-lg hover:underline">Visit Help Center</a>
                </div>


                {/* Main content grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social media and app stores section */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex space-x-6">
                        <SocialIcon href="https://www.facebook.com/uber">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.twitter.com/uber">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.54-.18-6.69-1.86-8.79-4.46-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71-.02-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.1 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z" /></svg>
                        </SocialIcon>
                         <SocialIcon href="https://www.youtube.com/uber">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/company/uber-com">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/uber">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.012-4.695.068-2.61.12-3.857 1.36-3.978 3.978-.056 1.222-.067 1.578-.067 4.695s.011 3.472.067 4.695c.12 2.61 1.368 3.857 3.978 3.978 1.223.056 1.58.067 4.695.067s3.472-.011 4.695-.067c2.61-.12 3.857-1.368 3.978-3.978.056-1.223.067-1.578.067-4.695s-.011-3.472-.067-4.695c-.12-2.61-1.368-3.857-3.978-3.978-1.223-.056-1.58-.067-4.695-.067zM12 6.837c-2.835 0-5.163 2.328-5.163 5.163s2.328 5.163 5.163 5.163 5.163-2.328 5.163-5.163-2.328-5.163-5.163-5.163zm0 8.528c-1.863 0-3.365-1.502-3.365-3.365s1.502-3.365 3.365-3.365 3.365 1.502 3.365 3.365-1.502 3.365-3.365 3.365zm5.168-8.72a1.202 1.202 0 1 1-2.403 0 1.202 1.202 0 0 1 2.403 0z" /></svg>
                        </SocialIcon>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#" className="inline-block"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/app-store-badge.svg" alt="Download on the App Store" className="h-10" /></a>
                        <a href="#" className="inline-block"><img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/google-play-badge.png" alt="Get it on Google Play" className="h-10" /></a>
                    </div> */}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                            <GlobeIcon />
                            <span>English</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                            <LocationIcon />
                            <span>Vadodara</span>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-2">
                        <p className="text-gray-500 text-sm">&copy; 2025 Uber Technologies Inc.</p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
                            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App Component to Render the Footer ---
export default Footer;

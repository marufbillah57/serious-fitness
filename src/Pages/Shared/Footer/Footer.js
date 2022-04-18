import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='mt-5 bg-dark'>
                <p className='text-center text-white py-3'><small>copyright &copy; {year}.</small></p>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blogs '>
                <div className="card  mt-5">
                    <h3 className='text-center py-5'>
                        1. Why are you using firebase? What other options do you have to implement authentication?
                    </h3>
                    <p className='px-5'>আমি ব্যবহার করতেছি। কারণ এটা সহজে Documentation Read করে ব্যবহার করা যায়। আর একটা বড় কারণ এটা সম্পূর্ণ ফ্রি ব্যবহার করা যায়।</p>
                    <ul>
                        <ol>1. AWS Amplify</ol>
                        <ol>2. Back4App</ol>
                    </ul>
                </div>
                <div className="card  mt-5">
                    <h3 className='text-center py-5'>
                        2.What other services does firebase provide other than authentication?
                    </h3>
                    <p className='px-5'>আমি ব্যবহার করতেছি। কারণ এটা সহজে Documentation Read করে ব্যবহার করা যায়। আর একটা বড় কারণ এটা সম্পূর্ণ ফ্রি ব্যবহার করা যায়।</p>
                    <ul>
                        <ol>1. Realtime Database</ol>
                        <ol>2. Storage</ol>
                        <ol>3. Analytics</ol>
                        <ol>4. ML</ol>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
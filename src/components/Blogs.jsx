import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container bg-gray-100'>
            <h3 className='questions'>Q1: When should you use context API?</h3>
            <p className='mb-4  text-gray-800'><span className='ans'>Ans:</span> If you have state that needs to be accessed by multiple components across your application, the Context API can be used to create a global state that can be easily accessed and updated by any component that needs it.</p>

            <h3 className='questions'>Q2: What is a custom hook?</h3>
            <p className='mb-4  text-gray-800'><span className='ans'>Ans:</span> Custom hook is a JavaScript function that utilizes React's built-in hooks to encapsulate and reuse stateful logic in functional components. Custom hooks allow you to extract and share common logic across different components without the need for class components or repeating the same code in multiple places.</p>

            <h3 className='questions'>Q3: What is useRef?</h3>
            <p className='mb-4  text-gray-800'><span className='ans'>Ans:</span> UseRef is a hook that allows you to create a mutable value that persists across multiple renders of a functional component. It provides a way to reference and interact with DOM elements or any other value that needs to be preserved between renders without triggering a re-render.</p>

            <h3 className='questions'>Q4: What is useMemo?</h3>
            <p className=' text-gray-800'><span className='ans'>Ans:</span> UseMemo is a hook that allows you to memoize the result of a function or an expensive computation. It helps optimize performance by caching the computed value and returning it on subsequent renders if the dependencies haven't changed.</p>
        </div>
    );
};

export default Blogs;
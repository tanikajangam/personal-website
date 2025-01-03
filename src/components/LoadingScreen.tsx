import React from 'react';

interface LoadingScreenProps {
    loading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    return (
        <div
            className={`fixed inset-0 w-screen h-screen flex items-center justify-center z-50 transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <object
                type="image/svg+xml"
                data="/loading.svg"
                className={`w-3/4 h-3/4`}
            ></object>
        </div>
    );
};


export default LoadingScreen;


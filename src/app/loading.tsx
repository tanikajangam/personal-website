"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2500);  // Simulated loading time

        const unmountTimer = setTimeout(() => {
            setLoading(false);
        }, 3000);  // Wait for fade-out to complete

        return () => {
            clearTimeout(timer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (loading) {
        return (
            <div
                className={`flex justify-center items-center w-full min-h-screen bg-[#2C2F34] transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <object
                    type="image/svg+xml"
                    data="/loading.svg"
                    className="w-48 h-48"
                ></object>
            </div>
        );
    }

    return <>{children}</>;
}

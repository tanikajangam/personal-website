"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);  // Trigger fade-out
            setTimeout(() => {
                setLoading(false);  // Unmount after fade completes
            }, 500);  // Match this to the CSS transition duration
        }, 1000);  // Simulated loading time

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div
                className={`flex justify-center items-center w-full min-h-screen bg-[#2C2F34]
                    }`}
            >
                <object
                    type="image/svg+xml"
                    data="/loading.svg"
                    className={`w-1/2 h-1/2`}
                ></object>
            </div>
        );
    }

    return <>{children}</>;
}

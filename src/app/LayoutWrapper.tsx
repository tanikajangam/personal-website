"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from "@/components/LoadingScreen";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(false);
    const [delayedRender, setDelayedRender] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        setDelayedRender(true);

        // Ensure spinner shows for at least 1.5 seconds
        const delayTimeout = setTimeout(() => {
            setLoading(false);
        }, 2400);

        // Delay rendering the children until the loading animation fully fades out
        const renderTimeout = setTimeout(() => {
            setDelayedRender(false);
        }, 2900);  // Matches the fade-out duration

        return () => {
            clearTimeout(delayTimeout);
            clearTimeout(renderTimeout);
        };
    }, [pathname]);

    return (
        <>
            {loading || delayedRender ? (
                <LoadingScreen loading={loading} />
            ) : (
                children
            )}
        </>
    );
}
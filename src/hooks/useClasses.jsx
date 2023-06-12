import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://shutter-bugs-server.vercel.app/classes`)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);

            })
    }, []);
    return [courses, loading];
};

export default useClasses;
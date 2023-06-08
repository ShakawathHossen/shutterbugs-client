import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data);

            })
    }, []);
    return [courses, loading];
};

export default useClasses;
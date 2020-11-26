import React, {useRef, useEffect, useState} from 'react';

const ImageToggleOnScroll = ({primImg, secImg}) => {
    const imgRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const isInView = () => {
        const rect = imgRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(false);
    useEffect(() => {
        setIsLoading(false)
        setInView(isInView());
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <div>
            <img src={
                isLoading ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
                : inView ? secImg : primImg} alt="" ref={imgRef}/>
        </div>
    );
};

export default ImageToggleOnScroll;
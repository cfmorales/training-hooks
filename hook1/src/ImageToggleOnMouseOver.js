import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primImg, secImg}) => {
    const imgRef = useRef();

    return (
        <img src={primImg}
             onMouseOver={() => {
                 imgRef.current.src = secImg
             }}
             onMouseOut={() => {
                 imgRef.current.src = primImg
             }}
             alt=""
             ref={imgRef}/>
    );
};

export default ImageToggleOnMouseOver;
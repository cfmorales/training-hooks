import React from 'react';
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            {/*<ImageChangeOnMouseOver primImg="/assets/img/img1.jpg"*/}
            {/*                        secImg="/assets/img/img3.jpg"*/}
            {/*                        alt="" style={{width: '200px'}}/>*/}
            {/*<ImageToggleOnMouseOver primImg="/assets/img/img2.jpg"*/}
            {/*                        secImg="/assets/img/img4.jpg"*/}
            {/*                        alt="" style={{width: '200px'}}/>*/}

            <ImageToggleOnMouseOver primImg='/assets/img/img1.jpg' secImg='/assets/img/img3.jpg' style={{width: '200px'}}/>
            <ImageToggleOnMouseOver primImg='/assets/img/img2.jpg' secImg='/assets/img/img4.jpg' style={{width: '200px'}}/>

        </div>
    );
};

export default ImageChangeOnMouseOver;

import React, {useState, useEffect} from 'react';
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentImgId, setCurrentImgId] = useState(0);
    useEffect(() => {
        window.document.title = `Img with title ${currentImgId}`;
        console.log(`Img with title ${currentImgId}`);
    },[currentImgId]);
    return (
        <div>
            <div onMouseOver={() => {
                setCurrentImgId(1);
                console.log(currentImgId);
            }}>
                <ImageToggleOnScroll primImg='/assets/img/img1.jpg' secImg='/assets/img/img2.jpg'
                                     style={{width: '100px'}}/>
            </div>
            <div onMouseOver={() => {
                setCurrentImgId(2);
                console.log(currentImgId);
            }}>

                <ImageToggleOnScroll primImg='/assets/img/img3.jpg' secImg='/assets/img/img4.jpg'
                                     style={{width: '100px'}}/>
            </div>
            <ImageToggleOnScroll primImg='/assets/img/img1.jpg' secImg='/assets/img/img2.jpg' style={{width: '100px'}}/>
            <ImageToggleOnScroll primImg='/assets/img/img3.jpg' secImg='/assets/img/img4.jpg' style={{width: '100px'}}/>
            <ImageToggleOnScroll primImg='/assets/img/img1.jpg' secImg='/assets/img/img2.jpg' style={{width: '100px'}}/>
            <ImageToggleOnScroll primImg='/assets/img/img3.jpg' secImg='/assets/img/img4.jpg' style={{width: '100px'}}/>
            asd
        </div>
    );
};

export default ImageChangeOnScroll;

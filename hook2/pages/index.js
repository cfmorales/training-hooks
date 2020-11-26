import React, {useState, useEffect} from 'react';

const Index = () => {
    const random_boolean = Mat.random() >= 0.5;
    const [isLoading, setIsLoading] = useState(true);
    // if (random_boolean) {
    //     const [isLoading, setIsLoading] = useState(true);
    //
    // } else {
    //     const [isLoading, setIsLoading] = useState(true);
    //
    // }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        });
    });

    return isLoading ? (<div>Is loading...</div>) : (
        <input placeholder="Enter Sasdfome Text"/>
    );
};

export default Index;
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
    const { setTranslatedTitle } = useDocumentTitle();
    setTranslatedTitle('about');
    return <h1>About</h1>;
};

export default About;

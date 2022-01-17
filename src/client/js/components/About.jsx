import React from 'react';
import { setTranslatedTitle } from '@hooks/useDocumentTitle';

const About = () => {
    setTranslatedTitle('about');
    return <h1>About</h1>;
};

export default About;

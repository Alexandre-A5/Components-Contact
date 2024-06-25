import React from 'react';
import './styles.css';
import Contact from './components/Contact';
import profImage1 from './assets/1.png';
import profImage2 from './assets/2.png';
import profImage3 from './assets/4.png';

const App = () => {
    return (
        <div className='container'>
            <Contact
                name="Esther"
                profileImage={profImage1}
                isOnline={true}
            />
            <Contact
                name="Aude"
                profileImage={profImage2}
                isOnline={true}
            />
            <Contact
                name="Patrick"
                profileImage={profImage3}
                isOnline={false}
            />
        </div>
    );
};

export default App;

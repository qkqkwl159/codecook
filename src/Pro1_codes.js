import React, {useState} from 'react';
import './Pro1_codes.css'
import modelCodes from './bb_modelCodes.png'

function Pro1_codes(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button name="bb" onClick={toggleMenu}>
            ⌨ codes ⌨️
            </button>

            {isOpen && (
            <div>     
                <h3>Model_Leaning.py</h3>
                <img
                src={modelCodes}
                alt=''/>
            </div>
            )}

        
    </div>
);
}

export default Pro1_codes;
import React from 'react';
import './SubSection.css';

import IceTray from './images/ice-tray.webp'

const SubSection = () => {
    return (
        <>
            <div className="container-fluid sub_sec">
                <div className="container">
                    <div className="main_heading">
                        <h3>NEW PRODUCT</h3>
                    </div>

                    <div className="sub_para pt-3">
                        <h4>The Twist of Healthy Yogurt</h4>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iure ab suscipit laudantium molestias est, dolores aliquid minus esse tempora ullam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iure ab suscipit laudantium molestias est, dolores aliquid minus esse tempora ullam.
                        </p>
                    </div>
                    <div className="ice-tray">
                        <img src={IceTray} width="100%" alt="tray" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubSection;
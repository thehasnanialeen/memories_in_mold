import React from 'react';
import './about_myself.scss';
import Section_Heading from '../Section_Heading/section_heading';

const About_Myself = () => {
    return (
        <div className="about-container" id='about'>
            <Section_Heading title="About Us" />
                <h2 className="hidden-no-heigth">About Memories in Mold – Hand Casting in Regina | Couples, Family & Baby Keepsakes</h2>
                <div className="about-content">
                    <p>Welcome to <b>Memories in Mold</b>, where we turn life’s most cherished moments into timeless keepsakes.</p>
                    <p>We specialize in creating exquisite hand-cast sculptures that preserve the beauty of touch, connection, and emotion. Each piece is a unique masterpiece, crafted with care to capture every line, curve, and detail—ensuring your memories are not just remembered but held forever.</p>
                    <p>Whether it’s the tiny fingers of a newborn, the loving clasp of a couple’s hands, or a moment shared by family or friends, our goal is to celebrate these bonds through art.</p>
                    <p>At Memories in Mold, we believe in the power of connection and the stories hands tell. Our process is designed to be as personal as the memories we capture, and we take pride in bringing your vision to life.</p>
                    <p>Thank you for trusting us to mold your memories into art that lasts a lifetime.</p>
                </div>

            <div style={{ position: "absolute", left: "-9999px" }}>
                About Memories in Mold – We offer professional hand casting services in Regina, Saskatchewan, for couples, newborns, and families.
            </div>
        </div>
    );
};

export default About_Myself;
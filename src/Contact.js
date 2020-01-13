import React from 'react';

export default function Contact(props) {
    return (
        <>
            <p>Contact Me: </p>
            <form>
                <input placeholder="Email Address" /><br />
                <input placeholder="Name" /> <br />
                <textarea placeholder="Content" />
            </form>
        </>
    );
}


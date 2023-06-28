import React from "react"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("");
    function getMemeImage() {

    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input" />
                <input
                    type="text"
                    placeholder="Bottom"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main >
    )
}
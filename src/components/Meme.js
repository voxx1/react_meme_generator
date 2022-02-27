import { useEffect, useState } from 'react'
const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeData, setMemeData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes))
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * memeData.length)
        const url = memeData[randomNumber].url
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                imageUrl: url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button onClick={handleSubmit} className="form--button">Get a new meme image 🖼</button>

            </div>

            <div className="meme">
                <img src={meme.imageUrl} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme
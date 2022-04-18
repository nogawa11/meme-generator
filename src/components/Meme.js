import memesData from "./memesData.js";
import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })

  const [memeTop, setMemeTop] = React.useState("")

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url
    setMeme(prevMeme => ({...prevMeme, randomImage: url}))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input type="text"
            placeholder="Top text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input type="text"
            placeholder="Bottom text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="form--btn" type="submit">Get a new meme image 🖼</button>
        <div className="meme">
          <img className="meme--image" src={meme.randomImage} alt="meme" />
          <div className="meme--container">
            <h2 className="meme--text top">{meme.topText ? meme.topText : "One does not simply"}</h2>
            <h2 className="meme--text bottom">{meme.bottomText ? meme.bottomText : "walk into Mordor"}</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

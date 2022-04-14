import memesData from "./memesData.js";
import React from 'react';

export default function Meme() {
  const [url, setMeme] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    setMeme(memesArray[randomNum].url)
  }

  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input type="text" placeholder="Top text"/>
          <input type="text"placeholder="Bottom text"/>
        </div>
        <button onClick={getMemeImage} className="form--btn" type="submit">Get a new meme image 🖼</button>
        <img className="meme--image" src={url ? url : 'https://i.imgflip.com/30b1gx.jpg'} alt="meme" />
      </div>
    </main>
  )
}

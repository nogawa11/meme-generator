import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
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
          <h2 className="meme--text top">{meme.topText ? meme.topText : "One does not simply"}</h2>
          <h2 className="meme--text bottom">{meme.bottomText ? meme.bottomText : "walk into Mordor"}</h2>
        </div>
      </div>
    </main>
  )
}

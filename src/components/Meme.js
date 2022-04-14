export default function Meme() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <main>
      <form>
        <div className="form--input">
          <input type="text" placeholder="Shut up"/>
          <input type="text"placeholder="Take my money"/>
        </div>
        <button onclick={handleClick} className="form--btn" type="submit">Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

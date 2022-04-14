import trollLogo from '../trollface.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img src={trollLogo} alt="troll logo" />
        <h3 className="navbar--logo-text">Meme Generator</h3>
      </div>
      <h4 className="navbar--title">React Course - Project 3</h4>
    </div>
  )
}

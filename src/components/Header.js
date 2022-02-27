import image from '../trollface.png'

const Header = () => {
    return (
        <header className="header">
            <img
                src={image}
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Created with love while learning React ❤️</h4>
        </header>
    )
}

export default Header
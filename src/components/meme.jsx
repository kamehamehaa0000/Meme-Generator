import React, { useEffect } from 'react'

const Meme = () => {
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMeme(data))
  }, [])

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    topX: '',
    topY: '',
    bottomX: '',
    bottomY: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMeme, setAllMeme] = React.useState([])

  const getImage = () => {
    const memeArray = allMeme.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    setMeme((prevState) => {
      return { ...prevState, randomImage: url }
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            value={meme.topText}
            className="form-input"
            placeholder="top text"
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            value={meme.bottomText}
            className="form-input"
            placeholder="bottom text"
            name="bottomText"
            onChange={handleChange}
          />
          <div className="note">
            Note : add px or % suffix after the X and Y position of text for it
            to work
          </div>
          <input
            type="text"
            value={meme.topX}
            className="form-input"
            placeholder="Top X"
            name="topX"
            onChange={handleChange}
          />
          <input
            type="text"
            value={meme.topY}
            className="form-input"
            placeholder="Top Y "
            name="topY"
            onChange={handleChange}
          />
          <input
            type="text"
            value={meme.bottomX}
            className="form-input"
            placeholder="X in px"
            name="bottomX"
            onChange={handleChange}
          />
          <input
            type="text"
            value={meme.bottomY}
            className="form-input"
            placeholder="Y in px"
            name="bottomY"
            onChange={handleChange}
          />
          <button onClick={getImage} type="button" className="form-button">
            Get New Template
          </button>
        </form>
        <div className="meme-img-container">
          <img className="meme-img" src={meme.randomImage} alt="" />
          <h2
            className="meme-top-text"
            style={{ top: ` ${meme.topY}`, left: ` ${meme.topX}` }}
          >
            {meme.topText}
          </h2>
          <h2
            className="meme-bottom-text"
            style={{ top: `${meme.bottomY}`, left: `${meme.bottomX}` }}
          >
            {meme.bottomText}
          </h2>
        </div>
      </main>
    </>
  )
}

export default Meme

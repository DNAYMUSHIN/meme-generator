import './panel.css'
import React, {useState, useEffect} from 'react'

//import data from '../memesData.js'

export default function Panel () {
    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState()


    /*
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => (setAllMemes (() => ({...data}))));
    }, []);
    */




    useEffect(() => {
        async function fetchMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data)
        }
        fetchMemes()
    }, [])

    function chooseData () {
        let chosen = allMemes.data.memes[Math.round(Math.random() * allMemes.data.memes.length)];
        return chosen.url;
    }

    function makeImgToMeme () {
        setMeme(prev => ({
            ...prev,
            randomImage: chooseData ()
        }))
    }

    function handleChange (event) {
        let {name, value} = event.target;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }



    return (
        <form className="panel">
            <div className="panel--top-row panel--row">
                <div className="panel--input-wrapper">
                    <label className="panel--input-label" htmlFor="top-text">Top text</label>
                    <input
                        className="panel--input"
                        id="top-text"
                        placeholder="Shut up"
                        type="text"
                        name={"topText"}
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </div>
                <div className="panel--input-wrapper">
                    <label className="panel--input-label" htmlFor="bottom-text">Bottom text</label>
                    <input
                        className="panel--input"
                        id="bottom-text"
                        placeholder="And take my money"
                        type="text"
                        name={"bottomText"}
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
            </div>
            <div className="panel--bottom-row panel--row">
                <button onClick={e => {
                    e.preventDefault();
                    makeImgToMeme()
                    console.log(meme.randomImage);
                }
                } className="panel--button">Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </form>
    )
}
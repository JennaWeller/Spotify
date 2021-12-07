import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { BrowserRouter, Link } from 'react-router-dom'

const Playlists = props => {
  console.log(props.limiter)
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: 'Chip Chrome & The Mono-Tones',
      img:
        'https://m.media-amazon.com/images/I/71hRWZXo2LL._SS500_.jpg',
      desc: 'The Neighbourhood',
    },
    {
      id: 102,
      category_id: 3,
      name: 'Fuzzy Brain',
      img:
        'https://thewildcattribune.com/wp-content/uploads/2019/12/03052530458dc3060cd37811fb230400.1000x1000x1.jpg',
      desc: 'Dayglow',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Dreamland',
      img:
        'https://media.pitchfork.com/photos/5f2daa5bbcc4654c5fe16cd4/1:1/w_600/dreamland_glass%20animals.jpg',
      desc: 'Glass Animals',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Rainbow Mixtape',
      img:
        'https://m.media-amazon.com/images/I/A1ADiHFnusL._SS500_.jpg',
      desc: 'Coin',
    },
    {
      id: 103,
      category_id: 3,
      name:'Landmark',
      img:
        'https://upload.wikimedia.org/wikipedia/en/8/82/Album_art_for_Landmark_by_Hippo_Campus.jpg',
      desc: 'Hippo Campus',
    },
  
  
    {
      id: 104,
      category_id: 1,
      name: 'Trip Tape',
      img:
        'https://images.genius.com/3e822d2b1874cbba88ad9c57b480b7b2.1000x1000x1.png',
      desc: 'Milky Chance',
    },
    {
      id: 105,
      category_id: 1,
      name: 'Beautiful People Will Ruin Your Life',
      img:
        'https://www.cuindependent.com/new/wp-content/uploads/2018/02/the-wombats-beautiful-people-will-ruin-your-life-1.jpg',
      desc: 'Wombats',
    },
    {
      id: 106,
      category_id: 1,
      name: 'Brightside',
      img:
        'https://thecentraltrend.com/wp-content/uploads/2021/09/attachment-the-lumineers-brightside.jpg',
      desc: 'The Lumineers',
    },
    {
      id: 107,
      category_id: 2,
      name: 'ARE YOU LETTING GO? ',
      img:
        'https://i.ytimg.com/vi/DAQH_AylJ1c/maxresdefault.jpg',
      desc: 'Dreamer Boy ft. BENEE',
    },
    {
      id: 108,
      category_id: 2,
      name: '3D Feelings',
      img:
        'https://i1.sndcdn.com/artworks-kgEBNqw9bA8a-0-t500x500.jpg',
      desc: 'Alfie Templeman',
    },
    {
      id: 109,
      category_id: 2,
      name: 'Disappear Here',
      img:
        'https://upload.wikimedia.org/wikipedia/en/0/0a/BadSuns_DisappearHere_1500.jpg',
      desc: 'Bad Suns',
    },
  ]

  let matchedPlaylists = dataPlaylists
    .filter(playlist => playlist.category_id === props.category_id)
    .slice(0, props.limiter)

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist, id) => (
          <BrowserRouter>
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
        </BrowserRouter>
      ))}
    </div>
  )
}

export default Playlists

import React, { useRef, useEffect, useState } from 'react'
import Playlists from './Playlists'

const Categories = () => {
  const [limiter, setLimiter] = useState(0)
  const mainInnerRef = useRef()
  const dataCategories = [
    {
      id: 1,
      name: "Release Radar",
      tagline: 'Catch all the lates music from artists you follow, plus new singles picked for you. Updates every Friday.',
    },
    {
      id: 2,
      name: 'Discover Weekly',
      tagline: 'Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.',
    },
    {
      id: 3,
      name: 'Ultimate Indie',
      tagline: 'The best in modern indie.',
    },
    {
      id: 4,
      name: '',
    },
  ]

  useEffect(() => {
    // function
    const handleWindowResize = () => {
      // calculation
      const calculation = Math.floor(
        mainInnerRef.current.getBoundingClientRect().width / 195
      )

      setLimiter(calculation)
    }

    handleWindowResize()

    // assign event listener
    window.addEventListener('resize', handleWindowResize)

    // remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <div className="mainInner" ref={mainInnerRef}>
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          {/* <span className="seeAll">SEE ALL</span> */}
          <p className="subText">{category.tagline}</p>
          <Playlists category_id={category.id} limiter={limiter} />
        </div>
      ))}
    </div>
  )
}

export default Categories

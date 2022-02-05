import React from 'react'
import { BsBoxArrowUp, BsHeart, BsBookmark } from 'react-icons/bs'

const Trending = () => {
  return (
    <section id='trending'>
      {/* small screen */}
      <article className='trending-sm'>
        <div className='topic-wrapper'>
          <h4 className='topic'>trending</h4>
          <div className='trending-icons'>
            <BsHeart className='trending-icon' />
            <BsBoxArrowUp className='trending-icon arrow-up' />
            <BsBookmark className='trending-icon' />
          </div>
        </div>
        <h4 className='trending-tittle'>
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </h4>
      </article>
      <div className='trending-box'>
        <div className='trending-img'>
          <img src='./trending.svg' alt='news' />
        </div>
        <div className='trending-letters'>
          {/* big screen */}
          <article className='trending-lg'>
            <div className='topic-wrapper'>
              <h4 className='topic'>trending</h4>
              <div className='trending-icons'>
                <BsHeart />
                <BsBoxArrowUp className='arrow-up' />
                <BsBookmark />
              </div>
            </div>
            <h4 className='trending-tittle'>
              Cake meme reflects coronavirus absurdity in a world where <br />
              nothing is what it seems
            </h4>
          </article>

          <p className='trending-desc'>
            Earlier this month, a viral video depicting hyper-realistic cakes as
            everyday items had folks on social media double-guessing every other
            post, and sometimes even their own realities, effectively launching
            the next meme : “Is this real or is this cake?”
          </p>
          <p className='trending-desc'>
            <span>2 hours ago </span>
            <span className='time'>By Lucy Hiddleston | 4min read</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Trending

import React, { useState, useEffect } from 'react'
import { BsBoxArrowUp, BsBookmark } from 'react-icons/bs'
import { FaListUl, FaHeart } from 'react-icons/fa'
import axios from 'axios'

const Breaking = () => {
  const [news, setNews] = useState([
    { author: '', content: '', description: '', urlToImage: '', title: '' },
  ])
  const [isLoading, setIsLoading] = useState(true)

  // Api Call
  const fetch_new = async () => {
    setIsLoading(true)
    try {
      const data = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`
      )
      setNews(data.data.articles)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  // Call to "News Api"
  useEffect(() => {
    fetch_new()
  }, [])

  return (
    <section id='breaking'>
      {/* breaking topic */}
      <div className='breaking-topic-wrapper'>
        <article className='breaking-topic'>
          <div className='b-topic-tittle'>
            <h3>Breaking News</h3>
          </div>
          <p>Tap to see the full story</p>
        </article>
        <h4 className='topic-desc'>
          Kanye West says he's running for president in 2020.
        </h4>
      </div>
      {/* live news section */}
      <section className='news-container'>
        <div className='live-news-container'>
          <article className='live-news-wrapper'>
            <div className='live-logo-box'>
              <h4>live</h4>
              <div className='live1'>
                <img src='./live.svg' alt='live logo' id='live-logo' />
              </div>
            </div>
            <div className='live-img-wrapper'>
              <img src='./liveImage.svg' alt='' />
            </div>
          </article>
          <h4 className='live-topic'>
            Beloved Arizona coach loses battle with coronavirus
          </h4>

          {/* location news */}
          <article className='location-news-box'>
            <h3 className='location-news'>Location News</h3>
            <div className='news-form'>
              <p>Get Location specific News</p>
              <form>
                <input type='text' placeholder='Enter Your Location' />
                <button className='submit-btn' type='submit'>
                  submit
                </button>
              </form>
            </div>
          </article>
        </div>
        {/* latest story */}
        <div className='all-news-containe'>
          <article className='latest-story'>
            <div className='l-story-text'>
              <div className='latest'>Latest Stories</div>
              <div>Think</div>
              <div>Health</div>
            </div>
            <FaListUl className='l-story-icon' />
          </article>

          {/* ATTENTION !!!!!!! News from "news api" */}
          <div className='api-new-wrapper'>
            {news.slice(0, 4).map((item, index) => {
              const { author, description, urlToImage, title } = item
              if (isLoading) {
                return <h2 key={index}>Loading...</h2>
              }
              return (
                // Todays News
                <article key={index} className='todays-wrapper'>
                  <div className='todays-news'>
                    <div className='t-news-img-box'>
                      <img src={urlToImage} alt={author} />
                    </div>

                    <div className='todays-text'>
                      <h3>{`${
                        title.length < 60 ? title : title.substring(0, 60)
                      }`}</h3>
                      <p className='t-text-desc'>
                        {`${
                          description < 100
                            ? description
                            : description.substring(0, 100)
                        }`}
                        ..
                      </p>
                      <p className='trending-desc trending-desc-lg'>
                        <span className='n-post-time'>1 hours ago </span>
                        <span className='time'>
                          By{' '}
                          {`${author < 10 ? author : author.substring(0, 10)}`}{' '}
                          | 4min read
                        </span>
                      </p>
                    </div>

                    <div className='underline'></div>
                    <div className='t-news-icons'>
                      <div>
                        <FaHeart className='t-n-icon love' />
                        <span className='t-news-like'>28</span>
                      </div>
                      <div>
                        <BsBoxArrowUp className='t-n-icon' />
                        <span className='t-news-like'>72</span>
                      </div>
                      <div>
                        <BsBookmark className='t-n-icon' />
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        {/* view more button */}
        <div className='view-btn-wrapper'>
          <button className='view-more'>View More</button>
        </div>

        {/* location news */}
        <article className='location-news-box' id='sm-location-news-box'>
          <h3 className='location-news'>Location News</h3>
          <div className='news-form'>
            <p>Get Location specific News</p>
            <form>
              <input type='text' placeholder='Enter Your Location' />
              <button className='submit-btn' type='submit'>
                submit
              </button>
            </form>
          </div>
        </article>
      </section>
      {/* view more button */}
      <div className='view-btn-wrapper-lg'>
        <button className='view-more'>View More</button>
      </div>
    </section>
  )
}

export default Breaking
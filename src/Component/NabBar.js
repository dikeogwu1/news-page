import React, { useState } from 'react'
import { BsTextRight } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegUser, FaAngleDoubleRight } from 'react-icons/fa'

const NabBar = () => {
  const [status, setStatus] = useState(true)
  return (
    <nav>
      <div className='nav-center'>
        {/* nav header */}
        <div className='nav-header'>
          <img src='./logo.svg' className='logo' alt='logo' />
          {/* links */}
          <ul className={`${status ? 'links' : 'links show-links'}`}>
            <li>
              <a href='#' id='corona-update'>
                <div className='red-dot'></div>
                <div>corona updates</div>
              </a>
            </li>
            <li>
              <a href='#'>politics</a>
            </li>
            <li>
              <a href='#'>business</a>
            </li>
            <li>
              <a href='#'>sports</a>
            </li>
            <li>
              <a href='#'>world</a>
            </li>
            <li>
              <a href='#'>travel</a>
            </li>
            <li>
              <a href='#'>
                <span>podcasts </span>
                &nbsp;
                <span>
                  <FaAngleDoubleRight className='projects' />
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* nav icons */}
        <ul className='social-icons'>
          <li>
            <FaRegUser className='user' />
          </li>
          <li>
            <AiOutlineSearch className='nav-icon' />
          </li>
          <button className='nav-toggle' onClick={() => setStatus(!status)}>
            <BsTextRight className='nav-icon' />
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default NabBar

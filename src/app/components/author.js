import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Author = (props) => {
  return (
    <>
      <div className={`author-author ${props.rootClassName} `}>
        <img alt="image" src={props.avatar} className="author-avatar" />
        <div className="author-details">
          <span className="author-text1">{props.author}</span>
          <span className="author-text2">{props.mention}</span>
        </div>
      </div>
      <style jsx>
        {`
          .author-author {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .author-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .author-details {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .author-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
          .author-text2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .author-author {
              gap: var(--dl-layout-space-unit);
            }
            .author-avatar {
              width: 40px;
              height: 40px;
            }
            .author-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .author-text2 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Author.defaultProps = {
  rootClassName: '',
  mention: '@spyrl',
  author: 'Joanna Smith',
  avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
}

Author.propTypes = {
  rootClassName: PropTypes.string,
  mention: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
}

export default Author

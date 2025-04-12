import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Client = (props) => {
  return (
    <>
      <div className={`client-client ${props.rootClassName} `}>
        <span className="client-text1">{props.quote}</span>
        <div className="client-author">
          <img alt="image" src={props.avatar} className="client-avatar" />
          <div className="client-details">
            <span className="client-text2">{props.author}</span>
            <span className="client-text3">{props.mention}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .client-client {
            gap: var(--dl-layout-space-threeunits);
            width: 450px;
            display: flex;
            position: relative;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .client-text1 {
            color: #ffffff;
            font-size: 22px;
            line-height: 36px;
          }
          .client-author {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .client-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .client-details {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .client-text2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
          .client-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            line-height: 30px;
          }

          @media (max-width: 991px) {
            .client-client {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .client-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .client-author {
              gap: var(--dl-layout-space-unit);
            }
            .client-avatar {
              width: 40px;
              height: 40px;
            }
            .client-text2 {
              font-size: 16px;
              line-height: 24px;
            }
            .client-text3 {
              font-size: 16px;
              line-height: 24px;
            }
            .clientroot-class-name {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .clientroot-class-name1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Client.defaultProps = {
  mention: '@agncy',
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“',
  rootClassName: '',
  avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
  author: 'Joanna Smith',
}

Client.propTypes = {
  mention: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  avatar: PropTypes.string,
  author: PropTypes.string,
}

export default Client

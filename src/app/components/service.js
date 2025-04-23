import React from 'react'

import PropTypes from 'prop-types'

const Service = (props) => {
  return (
    <>
      <div className={`service-service ${props.rootClassName} `}>
        <h3 className="service-title">{props.title}</h3>
        <span className="service-description">{props.description}</span>
      </div>
      <style jsx>
        {`
          .service-service {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 350px;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fourunits);
            border-bottom-width: 1px;
          }
          .service-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            white-space: nowrap;
          }
          .service-description {
            font-size: 22px;
            line-height: 36px;
          }

          @media (max-width: 991px) {
            .service-service {
              gap: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .service-title {
              font-size: 18px;
              line-height: 16px;
            }
            .service-description {
              font-size: 14px;
              line-height: 21px;
            }
            .serviceroot-class-name {
              max-width: 100%;
            }
            .serviceroot-class-name1 {
              max-width: 100%;
            }
            .serviceroot-class-name2 {
              max-width: 100%;
            }
            .serviceroot-class-name3 {
              max-width: 100%;
            }
            .serviceroot-class-name4 {
              max-width: 100%;
            }
            .serviceroot-class-name5 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Service.defaultProps = {
  title: 'Branding',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Service.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default Service

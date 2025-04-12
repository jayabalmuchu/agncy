import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Tag = (props) => {
  return (
    <>
      <div className="tag-container">
        <span className="tag-tag tag">{props.tag}</span>
      </div>
      <style jsx>
        {`
          .tag-container {
            display: flex;
            position: relative;
          }
          .tag-tag {
            transition: 0.3s;
          }
          .tag-tag:hover {
            color: #fff;
            background-color: #235536;
          }
          @media (max-width: 991px) {
            .tag-tag {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Tag.defaultProps = {
  tag: 'Branding',
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag

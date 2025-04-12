import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Statistic = (props) => {
  return (
    <>
      <div className={`statistic-statistic ${props.rootClassName} `}>
        <span className="statistic-sta1">{props.caption}</span>
        <span className="statistic-sta2">{props.value}</span>
      </div>
      <style jsx>
        {`
          .statistic-statistic {
            gap: var(--dl-layout-space-threeunits);
            width: 346px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .statistic-sta1 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .statistic-sta2 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }

          @media (max-width: 991px) {
            .statistic-statistic {
              gap: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .statistic-sta1 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .statistic-sta2 {
              font-size: 40px;
              line-height: 36px;
            }
            .statisticroot-class-name {
              width: 100%;
            }
            .statisticroot-class-name1 {
              width: 100%;
            }
            .statisticroot-class-name2 {
              width: 100%;
            }
            .statisticroot-class-name3 {
              width: 100%;
            }
            .statisticroot-class-name4 {
              width: 100%;
            }
            .statisticroot-class-name5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Statistic.defaultProps = {
  rootClassName: '',
  value: '12',
  caption: 'Years of growth',
}

Statistic.propTypes = {
  rootClassName: PropTypes.string,
  value: PropTypes.string,
  caption: PropTypes.string,
}

export default Statistic

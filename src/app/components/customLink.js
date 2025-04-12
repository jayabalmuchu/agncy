"use client";

import React from "react";

import PropTypes from "prop-types";
import { useTranslations } from "next-intl";

const CustomLink = (props) => {
  return (
    <>
      <div className="link">
        <span className="custom-link-caption">{props.caption}</span>
        <svg viewBox="0 0 1024 1024" className="custom-link-icon1">
          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .custom-link-caption {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          }
          .custom-link-icon1 {
            width: 24px;
          }

          @media (max-width: 991px) {
            .custom-link-caption {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

CustomLink.defaultProps = {
  rootClassName: "",
  caption: "View case study",
};

CustomLink.propTypes = {
  rootClassName: PropTypes.string,
  caption: PropTypes.string,
};

export default CustomLink;

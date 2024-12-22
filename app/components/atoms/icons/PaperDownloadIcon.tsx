import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const PaperDownloadIcon = (props: SvgProps) => {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M7.82329 1.34377H3.38862C2.00196 1.33845 0.865958 2.44312 0.832624 3.82979V10.9878C0.802624 12.3891 1.91462 13.5491 3.31529 13.5791C3.33996 13.5791 3.36462 13.5798 3.38862 13.5791H8.71396C10.1073 13.5298 11.2086 12.3818 11.2007 10.9878V4.86112L7.82329 1.34377Z"
        stroke="#039855"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.64844 1.33398V3.27332C7.64844 4.21998 8.41444 4.98732 9.3611 4.98998H11.1971"
        stroke="#039855"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75977 10.1328V6.10547"
        stroke="#039855"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.19727 8.56445L5.7606 10.1345L7.32393 8.56445"
        stroke="#039855"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

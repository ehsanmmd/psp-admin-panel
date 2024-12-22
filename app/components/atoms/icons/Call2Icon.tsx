import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const Call2Icon = (props: SvgProps) => {
  return (
    <svg
      width="59"
      height="58"
      viewBox="0 0 59 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.2017 30.1417C37.842 39.7793 40.029 28.6296 46.167 34.7634C52.0845 40.6792 55.4856 41.8645 47.9882 49.3598C47.049 50.1145 41.0822 59.1945 20.1128 38.2309C-0.859239 17.2647 8.2155 11.2918 8.97043 10.353C16.486 2.83688 17.6508 6.25776 23.5683 12.1736C29.7064 18.3099 18.5614 20.5041 28.2017 30.1417Z"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

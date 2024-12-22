import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const Message1Icon = (props: SvgProps) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_254_17839)">
        <path
          d="M44.9367 20.9529L32.9398 30.1862C30.6732 31.8882 27.4841 31.8882 25.2175 30.1862L13.1194 20.9529"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.2539 51.9999C50.4656 52.0214 56 45.6355 56 37.7869V20.2345C56 12.3859 50.4656 6 42.2539 6H15.7461C7.53442 6 2 12.3859 2 20.2345V37.7869C2 45.6355 7.53442 52.0214 15.7461 51.9999H42.2539Z"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_254_17839">
          <rect width="58" height="58" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

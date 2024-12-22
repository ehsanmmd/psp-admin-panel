import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const Location1Icon = (props: SvgProps) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.0416 25.3761C35.0416 22.0381 32.3368 19.3333 29.0011 19.3333C25.6631 19.3333 22.9583 22.0381 22.9583 25.3761C22.9583 28.7118 25.6631 31.4166 29.0011 31.4166C32.3368 31.4166 35.0416 28.7118 35.0416 25.3761Z"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.9988 50.75C26.1025 50.75 10.875 38.4211 10.875 25.528C10.875 15.4344 18.988 7.25 28.9988 7.25C39.0096 7.25 47.125 15.4344 47.125 25.528C47.125 38.4211 31.8951 50.75 28.9988 50.75Z"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

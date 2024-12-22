import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const ArrowLeftIcon = (props: SvgProps) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.833008 5.18286L10.833 5.18286"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.86621 9.19917L0.832877 5.18317L4.86621 1.1665"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

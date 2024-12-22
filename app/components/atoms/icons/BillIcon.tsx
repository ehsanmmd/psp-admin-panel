import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const BillIcon = (props: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B3B9C2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.67004 2.5V14.47C3.67004 15.45 4.13004 16.38 4.92004 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67004Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M2 2.5H22"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M8 8H16"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13H16"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

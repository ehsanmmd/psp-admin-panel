import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const ComputingIcon = (props: SvgProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      stroke="#B3B9C2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.72 15V9C22.72 4 20.72 2 15.72 2H9.71997C4.71997 2 2.71997 4 2.71997 9V15C2.71997 20 4.71997 22 9.71997 22H15.72C20.72 22 22.72 20 22.72 15Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.47 3.25L4.02002 19.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8101 18V13"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 15.5H14.25"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 7.5H6.25"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

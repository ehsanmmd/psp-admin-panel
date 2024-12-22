import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const MenuBoardIcon = (props: SvgProps) => {
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
        d="M22.18 6.76001L18.81 20.29C18.57 21.3 17.67 22 16.63 22H3.49001C1.98001 22 0.900023 20.5199 1.35002 19.0699L5.56001 5.55005C5.85001 4.61005 6.72003 3.95996 7.70003 3.95996H20C20.95 3.95996 21.74 4.53997 22.07 5.33997C22.26 5.76997 22.3 6.26001 22.18 6.76001Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M16.25 22H21.03C22.32 22 23.33 20.91 23.24 19.62L22.25 6"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.92993 6.38L10.9699 2.06006"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.63 6.39001L17.57 2.05005"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94995 12H15.95"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.94995 16H14.95"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

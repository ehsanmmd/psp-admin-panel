import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const UserCircleIcon = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      stroke="#344054"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M20.3044 12C20.3044 7.2279 16.4365 3.35999 11.6644 3.35999C6.89233 3.35999 3.02441 7.2279 3.02441 12C3.02441 16.7711 6.89233 20.64 11.6644 20.64C16.4365 20.64 20.3044 16.7711 20.3044 12Z"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.72168 19.0794C6.91784 17.5569 8.27221 15.8662 11.6348 15.8662C15.0348 15.8662 16.3798 17.5663 16.5666 19.1075"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8014 10.3936C14.8014 12.1412 13.3853 13.5573 11.6377 13.5573C9.89013 13.5573 8.47314 12.1412 8.47314 10.3936C8.47314 8.64601 9.89013 7.22998 11.6377 7.22998C13.3853 7.22998 14.8014 8.64601 14.8014 10.3936Z"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

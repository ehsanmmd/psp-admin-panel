import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const Home2Icon = (props: SvgProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      stroke="#F4FAFE"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.52 2.83992L4.13 7.03992C3.23 7.73992 2.5 9.22992 2.5 10.3599V17.7699C2.5 20.0899 4.39 21.9899 6.71 21.9899H18.29C20.61 21.9899 22.5 20.0899 22.5 17.7799V10.4999C22.5 9.28992 21.69 7.73992 20.7 7.04992L14.52 2.71992C13.12 1.73992 10.87 1.78992 9.52 2.83992Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 17.99V14.99"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

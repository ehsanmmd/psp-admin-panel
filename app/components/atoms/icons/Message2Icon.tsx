import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const Message2Icon = (props: SvgProps) => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M47.0206 24.0014C47.0206 36.3481 37.0132 46.3556 24.6664 46.3556C12.3197 46.3556 2.31226 36.3481 2.31226 24.0014C2.31226 11.6546 12.3197 1.64722 24.6664 1.64722C37.0132 1.64722 47.0206 11.6546 47.0206 24.0014Z"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.9595 31.1123L23.8486 25.6772V13.9636"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

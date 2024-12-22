import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const ArrowRightIcon = (props: SvgProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="#344054"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.1665 7.81714L3.1665 7.81714"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.1333 3.80086L13.1666 7.81686L9.1333 11.8335"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

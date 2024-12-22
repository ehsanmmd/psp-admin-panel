import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const LampChargeIcon = (props: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10406A"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.0001 7.89001L10.9301 9.75001C10.6901 10.16 10.8901 10.5 11.3601 10.5H12.6301C13.1101 10.5 13.3001 10.84 13.0601 11.25L12.0001 13.11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.30035 18.0401V16.8801C6.00035 15.4901 4.11035 12.7801 4.11035 9.90005C4.11035 4.95005 8.66035 1.07005 13.8004 2.19005C16.0604 2.69005 18.0404 4.19005 19.0704 6.26005C21.1604 10.4601 18.9604 14.9201 15.7304 16.8701V18.0301C15.7304 18.3201 15.8404 18.9901 14.7704 18.9901H9.26035C8.16035 19.0001 8.30035 18.5701 8.30035 18.0401Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

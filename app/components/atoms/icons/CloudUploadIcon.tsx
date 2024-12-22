import React from 'react';

type SvgProps = React.SVGAttributes<SVGElement> | undefined;

export const CloudUploadIcon = (props: SvgProps) => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3.5" y="3.5" width="40" height="40" rx="20" fill="#D1E0FF" />
      <rect
        x="3.5"
        y="3.5"
        width="40"
        height="40"
        rx="20"
        stroke="#EFF4FF"
        strokeWidth="6"
      />
      <path
        d="M28.9697 27.9667C30.1665 27.4258 31 26.2209 31 24.8215C31 22.6582 29.4748 21.3723 27.5808 21.3715C27.5808 20.0109 26.5137 17.2891 23.5 17.2891C20.4862 17.2891 19.4192 20.0109 19.4192 21.3715C17.5276 21.3877 16 22.6582 16 24.8215C16 26.2209 16.8327 27.4258 18.0303 27.9667"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1904 26.1901L23.4996 23.8809L25.8088 26.1901"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 23.8809L23.5005 29.7094"
        stroke="#155EEF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

import React from "react";

export default function BrandLogo({color}) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 34.8334C8.00832 33.3852 10.8536 32.6228 13.75 32.6228C16.6464 32.6228 19.4917 33.3852 22 34.8334C24.5083 33.3852 27.3536 32.6228 30.25 32.6228C33.1464 32.6228 35.9917 33.3852 38.5 34.8334"
        stroke={color?color:"white"}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 10.9999C8.00832 9.55171 10.8536 8.78931 13.75 8.78931C16.6464 8.78931 19.4917 9.55171 22 10.9999C24.5083 9.55171 27.3536 8.78931 30.25 8.78931C33.1464 8.78931 35.9917 9.55171 38.5 10.9999"
        stroke={color?color:"white"}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 11V34.8333"
        stroke={color?color:"white"}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 11V34.8333"
        stroke={color?color:"white"}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.5 11V34.8333"
        stroke={color?color:"white"}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

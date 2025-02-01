"use client";

import React, { FC } from "react";

interface PaymentMethodCellProps {
  paymentMethod: string;
}

const PaymentMethodCell: FC<PaymentMethodCellProps> = ({ paymentMethod }) => {
  const randomIcon = Math.random() < 0.5 ? "mastercard" : "paypal";

  return (
    <>
      {randomIcon === "mastercard" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="16"
          height="16"
        >
          <path
            fill="#ff9800"
            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
          />
          <path
            fill="#d50000"
            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
          />
          <path
            fill="#ff3d00"
            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="16"
          height="16"
        >
          <path
            fill="#1565C0"
            d="M18.7,13.767l0.006,0.001C18.895,12.351,20.181,11.3,21.7,11.3h10.372c3.594,0,6.528,2.939,6.928,6.572 c0.4,3.633-2.334,6.928-6.928,6.928H25.7v3.2h4.372c3.594,0,6.528,2.939,6.928,6.572c0.4,3.633-2.334,6.928-6.928,6.928H21.7 c-1.519,0-2.805-1.051-2.994-2.467l-0.006-0.001V13.767z"
          />
          <path
            fill="#039BE5"
            d="M13.3,13.767l0.006,0.001C13.495,12.351,14.781,11.3,16.3,11.3h10.372c3.594,0,6.528,2.939,6.928,6.572 c0.4,3.633-2.334,6.928-6.928,6.928H20.3v3.2h4.372c3.594,0,6.528,2.939,6.928,6.572c0.4,3.633-2.334,6.928-6.928,6.928H16.3 c-1.519,0-2.805-1.051-2.994-2.467l-0.006-0.001V13.767z"
          />
        </svg>
      )}
      <span style={{ marginLeft: "8px" }}>{paymentMethod}</span>
    </>
  );
};

export default PaymentMethodCell;

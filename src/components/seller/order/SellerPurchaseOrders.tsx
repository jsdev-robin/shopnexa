"use client";

import React from "react";
import useElementPosition from "@/hooks/useElementPosition";

const SellerPurchaseOrders = () => {
  const { elementRef, position } = useElementPosition();
  return (
    <section className="-my-4 lg:-my-6" ref={elementRef}>
      <div
        className="flex flex-col overflow-auto whisper-scroll"
        style={{ height: `calc(100vh - ${position.y}px)` }}
      >
        <div className="flex grow gap-4">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="min-w-96 bg-red-600/10">
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
              <h1>dd</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerPurchaseOrders;

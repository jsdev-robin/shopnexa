import React, { forwardRef } from "react";

const data = [
  {
    item: "Design UX and UI",
    qty: 1,
    rate: "$500",
    amount: "$500",
  },
  {
    item: "Web project",
    qty: 1,
    rate: "$24",
    amount: "$1250",
  },
  {
    item: "SEO",
    qty: 1,
    rate: "$6",
    amount: "$2000",
  },
];

const Invoice = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="max-w-5xl p-10 mx-auto text-black bg-white" ref={ref}>
      <div className="space-y-6">
        <div className="pb-5 border-b-2 border-black">
          <h2 className="text-2xl font-semibold">Invoice</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="grid space-y-2">
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Billed to:</dt>
                <dd className="text-gray-800">
                  <a
                    className="text-primary"
                    target="_blank"
                    rel="noopener"
                    href="https://mun-client.vercel.app/"
                  >
                    www.mun.com
                  </a>
                </dd>
              </dl>
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Billing details:</dt>
                <dd className="text-gray-800">
                  <span className="block font-semibold">Robin Mind</span>
                  <address className="not-italic font-normal">
                    Kewarjani
                    <br />
                    Manikganj-1800, Dhaka
                    <br />
                    Bangladesh
                    <br />
                  </address>
                </dd>
              </dl>
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Shipping details:</dt>
                <dd className="text-gray-800">
                  <span className="block font-semibold">Robin Mind</span>
                  <address className="not-italic font-normal">
                    Kewarjani
                    <br />
                    Manikganj-1800, Dhaka
                    <br />
                    Bangladesh
                    <br />
                  </address>
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <div className="grid space-y-2">
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Invoice number:</dt>
                <dd className="font-medium text-gray-800">ADUQ2189H1-0038</dd>
              </dl>
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Currency:</dt>
                <dd className="font-medium text-gray-800">USD - US Dollar</dd>
              </dl>
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Due date:</dt>
                <dd className="font-medium text-gray-800">10 Jan 2025</dd>
              </dl>
              <dl className="flex text-sm gap-x-4">
                <dt className="min-w-36 max-w-[200px]">Billing method:</dt>
                <dd className="font-medium text-gray-800">Send invoice</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-4 border border-gray-200 px-4 rounded-lg space-y-4">
          <table className="min-w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="py-4 text-left">Item</th>
                <th className="py-4 text-center">Qty</th>
                <th className="py-4 text-center">Rate</th>
                <th className="py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 text-left font-medium">{row.item}</td>
                  <td className="py-2 text-center font-medium">{row.qty}</td>
                  <td className="py-2 text-center font-medium">{row.rate}</td>
                  <td className="py-2 text-right font-medium">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <div className="w-full max-w-2xl text-end space-y-2">
            <div className="grid gap-2">
              <dl className="grid grid-cols-5 gap-x-4 text-sm">
                <dt className="col-span-3 text-gray-500">Subotal:</dt>
                <dd className="col-span-2 font-medium text-gray-800">
                  $2750.00
                </dd>
              </dl>
              <dl className="grid grid-cols-5 gap-x-4 text-sm">
                <dt className="col-span-3 text-gray-500">Total:</dt>
                <dd className="col-span-2 font-medium text-gray-800">
                  $2750.00
                </dd>
              </dl>
              <dl className="grid grid-cols-5 gap-x-4 text-sm">
                <dt className="col-span-3 text-gray-500">Tax:</dt>
                <dd className="col-span-2 font-medium text-gray-800">$39.00</dd>
              </dl>
              <dl className="grid grid-cols-5 gap-x-4 text-sm">
                <dt className="col-span-3 text-gray-500">Amount paid:</dt>
                <dd className="col-span-2 font-medium text-gray-800">
                  $2789.00
                </dd>
              </dl>
              <dl className="grid grid-cols-5 gap-x-4 text-sm">
                <dt className="col-span-3 text-gray-500">Due balance:</dt>
                <dd className="col-span-2 font-medium text-gray-800">$0.00</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Invoice.displayName = "Invoice";

export default Invoice;

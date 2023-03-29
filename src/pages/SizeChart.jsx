import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const SizeChart = () => {
  return (
    <section className="grid place-items-center w-full px-4">
      <Breadcrumb title='Size Chart' />
      <div className="max-w-[1450px] grid w-full  bg-bg-secondary shadow-md mt-10 h-min rounded-md overflow-scroll">
        <table className="table-auto border-collapse  border-2 border-slate-300 mb-0 mt-6 mx-4">
          <thead>
            <tr>
              <th className="border-2 border-slate-300 px-4 py-6 text-start">Size</th>
              <th className="border-2 border-slate-300 px-4 py-6 text-start">Chest</th>
              <th className="border-2 border-slate-300 px-4 py-6 text-start">Neck</th>
              <th className="border-2 border-slate-300 px-4 py-6 text-start">Sleve</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">Small</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">36"-38"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">14"-14.5"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">32.5"</td>
              </tr>
              <tr>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">Medium</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">39"-41"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">15"-15.5"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">33.5"</td>
              </tr>
              <tr>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">Large</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">42"-44"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">16"-16.5"</td>
                <td className="border-2 border-slate-300 px-4 py-6 text-start">34.5"</td>
              </tr>
            </tbody>
        </table>
      </div>
    </section>
  );
};

export default SizeChart;

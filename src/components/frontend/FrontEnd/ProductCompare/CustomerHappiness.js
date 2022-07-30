import React from 'react';

function CustomerHappiness() {
    return (
        <div className="my-16">
      <h2 className="py-4 text-2xl text-slate-700 font-bold tracking-wider mb-3">Customer Happiness</h2>
      <table class="table-fixed w-full">
        <tbody className="text-gray-400 text-lg font-mediu">
          <tr className="border-b">
            <td className="py-3 font-bold tracking-wider">
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </td>
            <td className="text-center">7,410</td>
            <td className="text-center">7,367</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 font-bold tracking-wider">
            <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </td>
            <td className="text-center">8,359(99%)</td>
            <td className="text-center">7,078(%96)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 font-bold tracking-wider">
            <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </td>
            <td className="text-center">1,172(%16)</td>
            <td className="text-center">2,502(%34)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 font-bold tracking-wider">
            <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </td>
            <td className="text-center">899(%12)</td>
            <td className="text-center">1,854(%26)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3 font-bold tracking-wider">
            <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </td>
            <td className="text-center">102,482</td>
            <td className="text-center">104,254</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default CustomerHappiness;
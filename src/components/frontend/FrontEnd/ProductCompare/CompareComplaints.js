import React from 'react';
import { Link } from 'react-router-dom';

function CompareComplaints() {
    return (
        <div className="my-16">
      <h1 className="text-slate-700 text-2xl font-bold tracking-wider py-4 mb-6">Complaints</h1>
      <table class="table-fixed w-full" style={{borderCollapse:"separate", borderSpacing: "0 30px"}}>
        <tbody className=''>
          <tr className="">
            <td className="text-gray-400 font-semibold align-top">
                <h1>Latest</h1>
                <h1><i class="fa-solid fa-clock text-xl"></i></h1>
                </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 18:20 </h1>
              <h1 className='mb-2'>I hope that the situation I am in will be clarified. The Samsung dishwasher that I bought 3 months ago has arrived, it has problems 1. And the most important Problem is that the dishes are never, ever clean ...</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 04:10</h1>
              <h1 className="mb-2">Even though my phone's vibration is turned off, it vibrates when I receive a message, it only vibrates when I mute it.</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
          </tr>
          <hr style={{width:"300%"}}/>
          <tr className="">
            <td className="text-gray-400 font-semibold align-top">
                <h1>Most Commented</h1>
                <h1><i class="fa-solid fa-message text-xl"></i></h1>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 18:20 </h1>
              <h1 className="mb-2">I hope that the situation I am in will be clarified. The Samsung dishwasher that I bought 3 months ago has arrived, it has problems 1. And the most important Problem is that the dishes are never, ever clean ...</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 04:10</h1>
              <h1 className="mb-2">Even though my phone's vibration is turned off, it vibrates when I receive a message, it only vibrates when I mute it.</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
          </tr>
          <hr style={{width:"300%"}}/>
          <tr className="">
            <td className="text-gray-400 font-semibold align-top">
                <h1>Most Supported</h1>
                <h1><i class="fa-solid fa-thumbs-up text-xl"></i></h1>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 18:20 </h1>
              <h1 className="mb-2">I hope that the situation I am in will be clarified. The Samsung dishwasher that I bought 3 months ago has arrived, it has problems 1. And the most important Problem is that the dishes are never, ever clean ...</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 04:10</h1>
              <h1 className="mb-2">Even though my phone's vibration is turned off, it vibrates when I receive a message, it only vibrates when I mute it.</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
          </tr>
          <hr style={{width:"300%"}}/>
          <tr className="">
            <td className="text-gray-400 font-semibold align-top">
                <h1>Most Read</h1>
                <h1><i class="fa-solid fa-eye text-xl"></i></h1>
                </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 18:20 </h1>
              <h1 className="mb-2">I hope that the situation I am in will be clarified. The Samsung dishwasher that I bought 3 months ago has arrived, it has problems 1. And the most important Problem is that the dishes are never, ever clean ...</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
            <td className='px-2 align-top'>
              <h1 className='mb-2'>03 June 04:10</h1>
              <h1 className="mb-2">Even though my phone's vibration is turned off, it vibrates when I receive a message, it only vibrates when I mute it.</h1>
              <Link to="/product-compare" className='text-green-500 underline'>Read more</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default CompareComplaints;
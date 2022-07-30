import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

function Dissatisfaction() {
    return (
        <div className="my-16">
      <h1 className="text-slate-700 text-2xl font-bold tracking-wider py-4 mb-6">Reasons for Dissatisfaction</h1>
      <table class="table-fixed w-full">
        <tbody>
          <tr className="">
            <td className="text-gray-400 font-semibold">Couldn't offer a solution</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td className="text-gray-400 font-semibold">The process took too long</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td className="text-gray-400 font-semibold">Don't meet my expectation</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td className="text-gray-400 font-semibold">Staff behavior</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td className="text-gray-400 font-semibold">They did not contact</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td className="text-gray-400 font-semibold">Other</td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
            <td>
              <ProgressBar
                height="15px"
                labelSize="10px"
                completed={60}
                margin="auto"
                width="85%"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default Dissatisfaction;
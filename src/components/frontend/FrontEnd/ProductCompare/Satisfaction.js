import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
function Satisfaction() {
  return (
    <div className="my-16">
      <h1 className="text-slate-700 text-2xl font-bold tracking-wider py-4 mb-6">Reasons for Satisfaction</h1>
      <table class="table-fixed w-full">
        <tbody>
          <tr className="">
            <td className="text-gray-400 font-semibold">Relevant and responsible approached</td>
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
            <td className="text-gray-400 font-semibold">Staff behavior was good</td>
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
            <td className="text-gray-400 font-semibold">They fixed my problem</td>
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
            <td className="text-gray-400 font-semibold">Communication/resolution timing was good</td>
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

export default Satisfaction;

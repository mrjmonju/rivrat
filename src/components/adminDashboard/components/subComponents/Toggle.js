import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function Toggle(props) {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1">
        <p className="text-lg text-slate-500 mb-2 font-semibold">
          {props.title}
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </>
  );
}

export default Toggle;

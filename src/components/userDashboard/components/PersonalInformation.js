import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
function PersonalInformation() {
  const gender = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "Boy",
    },
    {
      id: 3,
      name: "Women",
    },
  ];
  const education = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "Literate",
    },
    {
      id: 3,
      name: "Primary school",
    },
    {
      id: 4,
      name: "High school",
    },
  ];
  const marital = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "The marred",
    },
    {
      id: 3,
      name: "single",
    },
  ];
  const household = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "Under 3,000 TL",
    },
    {
      id: 3,
      name: "3,000 - 4,999 TL",
    },
    {
      id: 4,
      name: "5,000 - 6,999 TL",
    },
    {
      id: 5,
      name: "5,000 - 6,999 TL",
    },
    {
      id: 6,
      name: "7,000 - 9,999 TL",
    },
  ];
  const city = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "Bangladesh",
    },
    {
      id: 3,
      name: "India",
    },
    {
      id: 4,
      name: "Nepal",
    },
    {
      id: 5,
      name: "Pakistan",
    },
    {
      id: 6,
      name: "China",
    },
  ];
  const working = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "Retired",
    },
    {
      id: 3,
      name: "Student",
    },
    {
      id: 4,
      name: "Housewife",
    },
    {
      id: 5,
      name: "Unemployed",
    },
    {
      id: 6,
      name: "working",
    },
  ];
  const birth = [
    {
      id: 1,
      name: "Choose",
    },
    {
      id: 2,
      name: "1990",
    },
    {
      id: 3,
      name: "1991",
    },
    {
      id: 4,
      name: "1992",
    },
    {
      id: 5,
      name: "1993",
    },
    {
      id: 6,
      name: "1994",
    },
    {
      id: 7,
      name: "1995",
    },
    {
      id: 8,
      name: "1996",
    },
    {
      id: 9,
      name: "1997",
    },
    {
      id: 10,
      name: "1998",
    },
    {
      id: 11,
      name: "1999",
    },
    {
      id: 12,
      name: "2000",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [genders, setGenders] = useState(gender[0]);
  const [educations, setEducation] = useState(education[0]);
  const [maritals, setMaritals] = useState(marital[0]);
  const [households, setHouseholds] = useState(household[0]);
  const [citys, setCitys] = useState(city[0]);
  const [workings, setWorkings] = useState(working[0]);
  const [births, setBirths] = useState(birth[0]);

  return (
    <div className="px-6 sm:px-1 md:px-16 mt-10 mb-32 w-full md:w-9/12">
      <div>
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Gender
        </h1>
        <Listbox value={genders} onChange={setGenders}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{genders.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {gender.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Your Education Status
        </h1>
        <Listbox value={educations} onChange={setEducation}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {educations.name}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {education.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Marital status
        </h1>
        <Listbox value={maritals} onChange={setMaritals}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{maritals.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {marital.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Monthly Household Income
        </h1>
        <Listbox value={households} onChange={setHouseholds}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {households.name}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {household.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          The city which you are living
        </h1>
        <Listbox value={citys} onChange={setCitys}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full  bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{citys.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {city.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Working Status
        </h1>
        <Listbox value={workings} onChange={setWorkings}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{workings.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {working.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="mt-6">
        <h1 className="text-xl text-slate-600 font-semibold tracking-wider mb-4">
          Your Year of Birth
        </h1>
        <Listbox value={births} onChange={setBirths}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button className="relative md:w-3/4 w-full bg-white border border-gray-300 rounded-full shadow-base pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{births.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 md:w-3/4 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {birth.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? "text-white bg-gray-400" : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {person.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="md:w-3/4 text-center mt-16 py-2 bg-green-400 text-lg text-white rounded-full">
        <button type="submit" className="font-bold tracking-wider">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PersonalInformation;

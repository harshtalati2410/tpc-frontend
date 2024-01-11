"use client";
import { Job, Company } from "@/app/(routes)/admin/job/addJob/page";
import { useState } from "react";

interface Props {
  job: Job;
  setJob: Function;
}

const AddJobhtmlFormTwo = ({ job, setJob }: Props) => {
  const [modeOnlineChecked, setModeOnlineChecked] = useState(false);

  return (
    <>
      <div className="block font-bold text-[20px] text-underline h-full">
        Selection Process
      </div>
      <hr className="col-span-12 mt-2 mb-4" />

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mx-2 overflow-y-scroll h-[50vh]">
        <fieldset className="col-span-3">
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Mode of Selection
          </legend>
          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-x-2">
              <input
                id="offline"
                name="mode-of-selection"
                type="radio"
                checked={!modeOnlineChecked}
                onChange={() => {
                  setModeOnlineChecked(!modeOnlineChecked);
                }}
                className="w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="offline"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Offline
              </label>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <input
                  id="online"
                  name="mode-of-selection"
                  type="radio"
                  checked={modeOnlineChecked}
                  onChange={() => {
                    setModeOnlineChecked(!modeOnlineChecked);
                  }}
                  className="w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="online"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Online
                  <span className="font-semibold px-1">
                    (*If online, kindly mention the method)
                  </span>
                </label>
              </div>
              <div className="flex ml-7">
                <input
                  disabled={!modeOnlineChecked}
                  autoFocus={modeOnlineChecked}
                  maxLength={40}
                  type="text"
                  name="online-mode-method"
                  id="online-mode-method"
                  autoComplete="online-mode-method"
                  className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 disabled:ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="col-span-3">
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Procedure
          </legend>
          <div className="mt-6 space-y-4">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="shortlist-by-resume"
                  name="shortlist-by-resume"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="shortlist-by-resume"
                  className="font-semibold text-gray-900"
                >
                  Shortlist by Resume
                </label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="group-discussion"
                  name="group-discussion"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="group-discussion"
                  className="font-semibold text-gray-900"
                >
                  Group Discussion
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-3">
          <label
            htmlFor="Cutoff-CPI"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cutoff CPI
          </label>
          <div className="mt-1">
            <input
              min={0}
              max={10}
              step={0.01}
              type="number"
              name="Cutoff-CPI"
              id="Cutoff-CPI"
              autoComplete="Cutoff-CPI"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJobhtmlFormTwo;
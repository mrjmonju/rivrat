import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WriteComplaint() {
  const onSubmit = (data) => {
    toast.success("Add a Complaint Successfully", {
      position: "bottom-right",
    });
    console.log(data);
  };
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="md:w-10/12 md:ml-14 mt-10 px-10 md:px-0">
        <h1 className="text-2xl text-slate-800 font-semibold tracking-wider mb-5">
          Create Complaint
        </h1>
        <hr />
        <div className="my-5">
          <form
            className="w-full grid grid-cols-1 gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="py-3 pl-4 rounded-lg"
              placeholder="Type complaint title..."
              {...register("title", { required: true })}
            />
            <textarea
              className="py-3 pl-4 rounded-lg"
              placeholder="Type complaint details..."
              {...register("details", { required: true })}
            />
            <input
              className="py-3 pl-4 rounded-lg"
              placeholder="When"
              {...register("when", { required: true })}
            />
            <input
              className="py-3 pl-4 rounded-lg"
              type="file"
              {...register("document", { required: true })}
            />
            <input
              className="bg-violet-600 text-white rounded-full px-5 py-2 my-3 cursor-pointer"
              type="submit"
              value="Create Complaint"
            />
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default WriteComplaint;

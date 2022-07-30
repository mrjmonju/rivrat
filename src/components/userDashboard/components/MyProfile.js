import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ProfileContext from "../../../context/ProfileContext";
import "./MyProfile.css";
function MyProfile() {
  const { loginData, setLoginData } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: loginData.name,
      email: loginData.email,
      phone: loginData.phone,
      password: loginData.password,
    },
  });
  console.log(loginData);
  const onSubmit = (data) => {
    setLoginData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
  };
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-12 px-2 lg:px-14">
        <div className="col-span-12 md:col-span-7">
          {/* profile info */}
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <img
                src="./images/dashboard/profile.png"
                className="profile-img mx-auto"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <h4 className="text-3xl font-bold text-slate-600">
                {loginData.name}
              </h4>
              <div className="grid grid-cols-1 gap-y-1 lg:flex justify-between mt-5">
                <div>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-500 file:text-white
                  hover:file:bg-violet-700"
                  />
                </div>
                {/* <button className="upload-btn">Upload New Photo</button> */}
                <button className="remove-btn text-white">Remove</button>
              </div>
            </div>
          </div>
          {/* Your Complaints */}
          <div className="flex justify-between mt-5 px-6">
            <div className="profile-complaints">
              <h1>Your Complaints</h1>
              <h1>0</h1>
            </div>
            <div className="profile-supports">
              <h1>Your Supports</h1>
              <h1>0</h1>
            </div>
            <div className="profile-comments">
              <h1>Your Comments</h1>
              <h1>0</h1>
            </div>
          </div>
          {/* Name email phone */}
          <div className="px-5 mt-8">
            <h1 className="mb-5 text-lg font-semibold text-gray-600">
              Edit Profile
            </h1>
            <hr className="mb-6" />
            <form
              className="w-full grid grid-cols-1 gap-y-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-4 items-center">
                <label className="mr-4 col-span-1">Name</label>
                <input
                  className="py-3 pl-4 rounded-lg col-span-3"
                  {...register("name")}
                />
              </div>

              <div className="grid grid-cols-4 items-center">
                <label className="mr-4 col-span-1">Email</label>
                <input
                  className="py-3 pl-4 rounded-lg col-span-3"
                  {...register("email")}
                />
              </div>
              <div className="grid grid-cols-4 items-center">
                <label className="mr-4 col-span-1">Phone</label>
                <input
                  className="py-3 pl-4 rounded-lg col-span-3"
                  {...register("phone")}
                />
              </div>
              <div className="grid grid-cols-4 items-center">
                <label className="mr-4 col-span-1">Password</label>
                <input
                  type="password"
                  className="py-3 pl-4 rounded-lg col-span-3"
                  {...register("password")}
                />
              </div>
              <input
                className="bg-violet-600 text-white rounded-lg px-5 py-2 my-3 cursor-pointer"
                type="submit"
                value="Save changes"
              />
            </form>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 pl-3">
          {/* Strength Profile */}
          <div className="bg-white pl-7 py-8 rounded-xl">
            <h1 className="text-xl font-medium text-gray-500">
              Strength of Your Profile :{" "}
              <span className="text-black font-semibold">66.6 %</span>
            </h1>
            <h1 className="mt-4 mb-2 text-lg text-gray-500">
              <i class="fa-solid fa-circle-check pr-1 text-green-500"></i>{" "}
              <span>Verify Email</span>
            </h1>
            <h1 className="mb-2 text-lg text-gray-500">
              <i class="fa-solid fa-circle-check pr-1 text-green-500"></i>{" "}
              <span>Uplaod Profile Photo</span>
            </h1>
            <h1 className="text-lg text-gray-500">
              <i class="fa-solid fa-circle-plus pr-1"></i>{" "}
              <span>Uplaod Profile Photo</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

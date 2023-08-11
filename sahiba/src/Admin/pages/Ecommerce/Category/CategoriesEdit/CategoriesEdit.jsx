/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CategoriesEdit = () => {
  const location = useLocation();
  let categoryDetails = location.state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: categoryDetails.namecategories,
    title: categoryDetails.title,
  });
  const ApiEditCategory = async (id) => {
    await axios
      .put(`http://103.157.218.126:8000/admin/updatecategory/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log("edit success");
          navigate("/categoriesmanage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col gap-y-5">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <a
            href="/dashboard"
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </a>
          <a href="#" className="hover:font-bold hover:text-blue-400">
            E-commerce
          </a>
          <div
            className="hover:font-bold hover:text-blue-400"
            onClick={() => {
              navigate("/categoriesmanage");
            }}
          >
            CategoriesManage
          </div>
          <div className="font-bold text-blue-400">EditCategories</div>
        </Breadcrumbs>
      </div>
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT CATEGORIES</p>
        </div>
        {/* Start Form Edit Categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Categories</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Name Product"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              defaultValue={categoryDetails.namecategories}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title</p>
            <Input
              className="w-full h-auto"
              placeholder="Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              defaultValue={categoryDetails.title}
            />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate("/categoriesmanage");
              }}
            >
              <p className="">Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => ApiEditCategory(categoryDetails.id)}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
        {/* End Form Edit Categories */}
      </div>
    </div>
  );
};

export default CategoriesEdit;

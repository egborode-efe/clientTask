import React from "react";

const EditTask = () => {
  return  <div className="container text-start">
  <div className="d-flex py-4 align-items-center gap-3">
    <p className="m-0">icon</p>
    <h2 className="m-0">Edit Task</h2>
    
  </div>
  <form className="d-flex flex-column gap-5 py-3" action="">
      <div className="position-relative">
        <label
          className="label1 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
          htmlFor=""
        >
          Title
        </label>
        <input
          className="w-100 border py-3 rounded-3 px-4
      "
      placeholder="E.g Project Defense, Assignment ..."
          type="text"
          
          id="title"
        />
      </div>
      <div
        className="position-relative
      "
      >
        <label
          className="label2 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="w-100 border  rounded-3 px-4 py-3
           "
           placeholder="Briefly describe your task..."
          name=""
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div
        className="position-relative
      "
      >
        <label
          className="label3 position-absolute bg-white px-2 text-secondary fw-semibold fs-4"
          htmlFor="tags"
        >
          Tags
        </label>
        <input
          className="w-100 border py-3 rounded-3 px-4 
           "
           placeholder="Urgent Important"
          type="text"
        />
      </div>
      <button className="w-100 py-3 border-0 rounded-3 bg-danger text-white">Done</button>
      <a href="#" className="text-center">
        Back To Top
      </a>
    </form>
</div>
};

export default EditTask;

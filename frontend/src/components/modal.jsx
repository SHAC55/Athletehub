import React from "react";

export default function Modal(props) {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal" onClick={props.onClose}>
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Football live-score</h3>
          <p className="py-4">Visit AthleteHub for more.</p>
        </div>
      </div>
    </>
  );
}

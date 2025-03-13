import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validate/validationSchema";
import InputField from "./input/InputField";
import { db, addDoc, collection } from "../utils/firebase";
import useNotyf from "../utils/notyf";

const TourBookingModal = ({ tour, onClose }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [initialValues, setInitialValues] = useState({
    name: "",
    phone: "",
    email: "",
    startDate: "",
    adultCount: 1,
    childCount: 0,
    pickupLocation: "",
    notes: "",
  });
  const { showSuccess, showError } = useNotyf();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Lưu dữ liệu vào Firebase Firestore
      try {
        await addDoc(collection(db, "tourBookings"), {
          ...values,
          tourName: tour.name, // Thêm tên tour vào dữ liệu
          createdAt: new Date(),
        });

        setSuccessMessage(
          "Cảm ơn bạn ❤. Bạn để ý điện thoại để chờ phản hồi từ chúng tôi nhé😍!"
        );
        showSuccess("Đặt tour thành công! 🎉");

        setTimeout(() => {
          setSuccessMessage(""); // Ẩn thông báo sau 10 giây
          setInitialValues({
            name: "",
            phone: "",
            email: "",
            startDate: "",
            adultCount: 1,
            childCount: 0,
            pickupLocation: "",
            notes: "",
          });
          onClose(); // Đóng modal sau khi thông báo
        }, 10000);
      } catch (error) {
        console.error("Error adding document: ", error);
        showError("Đặt tour thất bại! 😢");
      }
    },
  });

  return (
    <Modal
      isOpen={!!tour}
      onRequestClose={onClose}
      contentLabel="Tour Booking"
      ariaHideApp={false}
      appElement={document.getElementById("root")}
      className="w-full max-w-2xl mx-auto my-6 bg-white/20 rounded-lg p-8 backdrop-blur-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray9">
          Đặt Tour: {tour.name}
        </h2>
        <button onClick={onClose} className="text-xl text-gray9">
          <FaTimes />
        </button>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <InputField
              label="Tên người đặt"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.name && formik.touched.name ? "border-red7" : ""
              }
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Số điện thoại"
              id="phone"
              name="phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.phone && formik.touched.phone ? "border-red7" : ""
              }
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.email && formik.touched.email ? "border-red7" : ""
              }
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Ngày khởi hành"
              id="startDate"
              name="startDate"
              type="date"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.startDate && formik.touched.startDate
                  ? "border-red7"
                  : ""
              }
            />
            {formik.errors.startDate && formik.touched.startDate && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.startDate}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Số lượng người lớn"
              id="adultCount"
              name="adultCount"
              type="number"
              min="1"
              value={formik.values.adultCount}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.adultCount && formik.touched.adultCount
                  ? "border-red7"
                  : ""
              }
            />
            {formik.errors.adultCount && formik.touched.adultCount && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.adultCount}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Số lượng trẻ em"
              id="childCount"
              name="childCount"
              type="number"
              min="0"
              value={formik.values.childCount}
              onChange={formik.handleChange}
              className={
                formik.errors.childCount && formik.touched.childCount
                  ? "border-red7"
                  : ""
              }
            />
            {formik.errors.childCount && formik.touched.childCount && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.childCount}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Điểm đón"
              id="pickupLocation"
              name="pickupLocation"
              value={formik.values.pickupLocation}
              onChange={formik.handleChange}
              required
              className={
                formik.errors.pickupLocation && formik.touched.pickupLocation
                  ? "border-red7"
                  : ""
              }
            />
            {formik.errors.pickupLocation && formik.touched.pickupLocation && (
              <div className="text-red7 text-sm absolute left-0 top-full mt-1">
                {formik.errors.pickupLocation}
              </div>
            )}
          </div>

          <div className="relative">
            <InputField
              label="Ghi chú"
              id="notes"
              name="notes"
              value={formik.values.notes}
              onChange={formik.handleChange}
              type="textarea"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full py-4 rounded-xl bg-green-500 text-white hover:bg-green-600 transition duration-300 backdrop-blur-md shadow-xl"
        >
          Đặt ngay
        </button>
      </form>

      {/* Thông báo thành công */}
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
    </Modal>
  );
};

export default TourBookingModal;

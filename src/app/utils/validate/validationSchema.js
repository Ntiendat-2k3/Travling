import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Tên người đặt là bắt buộc"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa chữ số")
    .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
    .required("Số điện thoại là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  startDate: Yup.date().required("Ngày khởi hành là bắt buộc"),
  adultCount: Yup.number()
    .min(1, "Số lượng người lớn phải ít nhất là 1")
    .required("Số lượng người lớn là bắt buộc"),
  childCount: Yup.number()
    .min(0, "Số lượng trẻ em không thể là số âm")
    .required("Số lượng trẻ em là bắt buộc"),
  pickupLocation: Yup.string().required("Điểm đón là bắt buộc"),
  notes: Yup.string(),
});

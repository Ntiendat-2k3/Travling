import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Cài đặt mặc định cho react-slick slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const TourDetailModal = ({ tour, onClose }) => {
  const tourPackage = tour.main?.tourPackage;
  const tourPackageStyle = tour.main?.tourPackageStyle?.listStyle;
  const childrenPolicyStyle = tour.main?.childrenPolicyStyle?.listStyle;

  return (
    <Modal
      isOpen={!!tour}
      onRequestClose={onClose}
      contentLabel="Tour Detail"
      ariaHideApp={false}
      appElement={document.getElementById("root")}
      className="w-full max-w-4xl mx-auto my-6 bg-white rounded-lg p-6 shadow-lg modal-content"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{tour.name}</h2>
        <button onClick={onClose} className="text-xl text-gray-600">
          <FaTimes />
        </button>
      </div>

      {/* Hiển thị slide ảnh tour */}
      {tour.main?.imgReview && tour.main.imgReview.length > 0 && (
        <div className="mb-4">
          <Slider {...sliderSettings}>
            {tour.main.imgReview.map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  alt={`Tour Image ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Phần nội dung modal - cần cuộn khi nội dung vượt quá */}
      <div className="mt-4 max-h-[60vh] overflow-y-auto">
        <h3 className="text-lg font-bold">{tour.main?.title}</h3>
        <p>
          <strong>Thời gian:</strong> {tour.main?.time}
        </p>
        <p>
          <strong>Mô tả:</strong> {tour.main?.content}
        </p>
        <div className="mt-2">
          <h4 className="font-semibold">Các gói tour:</h4>
          {tourPackage && typeof tourPackage === "object" ? (
            <ul className={tourPackageStyle}>
              {Object.keys(tourPackage).map((key) => (
                <li key={key}>
                  {key}: {tourPackage[key].toLocaleString()} VND
                </li>
              ))}
            </ul>
          ) : (
            <p>Không có thông tin về các gói tour</p>
          )}
        </div>
        <div className="mt-2">
          <h4 className="font-semibold">Chính sách trẻ em:</h4>
          <ul className={childrenPolicyStyle}>
            {tour.main?.childrenPolicy?.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h4 className="font-semibold">Ghi chú:</h4>
          <p>{tour.main?.note}</p>
        </div>
      </div>
    </Modal>
  );
};

export default TourDetailModal;

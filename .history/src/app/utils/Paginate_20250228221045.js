import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Paginate = ({ data, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event) => {
    setCurrentPage(event.selected);
  };

  // Tính toán các item hiển thị cho trang hiện tại
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Hiển thị các TourCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, index) => renderItem(item, index))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          previousLabel={<FaChevronLeft className="text-xl text-white" />}
          nextLabel={<FaChevronRight className="text-xl text-white" />}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={
            "pagination flex items-center justify-center space-x-2 "
          }
          pageClassName={"mx-1 px-3 py-1"}
          activeClassName={"bg-dark2d text-white rounded-md"}
          disabledClassName={"text-gray-400"}
          previousClassName={
            "p-1 rounded-md text-white bg-dark2d hover:bg-[#3c3b70] transition duration-300"
          }
          nextClassName={
            "p-1 rounded-md text-white bg-dark2d hover:bg-[#3c3b70] transition duration-300"
          }
        />
      </div>
    </div>
  );
};

export default Paginate;

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, index) => renderItem(item, index))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex justify-center"}
          pageClassName={"mx-1"}
          activeClassName={"bg-blue-500 text-white rounded-md"}
          disabledClassName={"text-gray-400"}
        />
      </div>
    </div>
  );
};

export default Paginate;

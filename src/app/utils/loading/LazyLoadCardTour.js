// Một cách tối ưu khác là sử dụng IntersectionObserver để chỉ tải CardTour khi nó nằm trong vùng nhìn thấy của người dùng. Điều này rất hữu ích nếu bạn có một danh sách dài các tour mà không muốn tải toàn bộ ngay từ đầu.

import React, { useEffect, useState, useRef } from "react";

const LazyLoadCardTour = ({ tour, renderTourCard }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Save the current ref value
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // When the card is in the viewport
        }
      },
      { threshold: 0.1 } // When 10% of the card is in the viewport
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Cleanup
    };
  }, []);

  return <div ref={ref}>{isVisible && renderTourCard(tour)}</div>;
};

export default LazyLoadCardTour;

const SkeletonLoader = ({ height, width, borderRadius = "8px" }) => {
  return (
    <div
      style={{
        height: height || "20px",
        width: width || "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: borderRadius,
        animation: "pulse 1.5s infinite ease-in-out",
      }}
    />
  );
};

export default SkeletonLoader;

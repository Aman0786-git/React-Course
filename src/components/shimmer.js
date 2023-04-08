const shimmerSkelton = () => {
  return Array(4)
    .fill("")
    .map((e, index) => (
      <div key={index-10} className="wrapper">
        <div className="image-card animate">
          <div className="image"></div>
          <div className="title"></div>
          <div className="rating"></div>
        </div>
      </div>
    ));
};

const Shimmer = () => {
  return Array(3)
    .fill("")
    .map((e, index) => <div key={index+99} className="shimmer">{shimmerSkelton()}</div>);
};

export default Shimmer;

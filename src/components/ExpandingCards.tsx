const IMAGE_URL_1 =
  "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

const ExpandingCards = () => {
  const setActive = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
  };

  return (
    <div className="container">
      <div
        onClick={setActive}
        className="panel active"
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={setActive}
        className="panel"
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={setActive}
        className="panel"
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={setActive}
        className="panel"
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={setActive}
        className="panel"
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
    </div>
  );
};

export default ExpandingCards;

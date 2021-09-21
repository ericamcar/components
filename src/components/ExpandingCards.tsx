import { useState } from "react";

const IMAGE_URL_1 =
  "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

const ExpandingCards = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container">
      <div
        onClick={() => setActive(1)}
        className={`panel ${active === 1 && "active"}`}
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={() => setActive(2)}
        className={`panel ${active === 2 && "active"}`}
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={() => setActive(3)}
        className={`panel ${active === 3 && "active"}`}
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={() => setActive(4)}
        className={`panel ${active === 4 && "active"}`}
        style={{
          backgroundImage: `url(${IMAGE_URL_1})`,
        }}
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      </div>
      <div
        onClick={() => setActive(5)}
        className={`panel ${active === 5 && "active"}`}
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

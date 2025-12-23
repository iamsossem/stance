import listDate from "../../assets/data/Item.json";
import "./ProductSection.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const ProductSection = () => {
  const bestItems = listDate.filter((item) => item.category === "best");
  return (
    <section id="best-seller">
      <h2>BEST SELLER</h2>
      <ul>
        {bestItems.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/Shoes/${item.image}`)}
              alt={item.sub1}
            />
            <span>
              <FaRegHeart />
            </span>
            <div className="best-txt">
              <h2>{item.id}</h2>
              <p>{item.title}</p>
              <p>{item.sub1}</p>
              <div className="price">
                <p>{Number(item.price1).toLocaleString()}</p>
                <p>{Number(item.price2).toLocaleString()}원</p>
              </div>
            </div>
          </li>
        ))}
        <div className="btn">
          <div className="prev">
            <IoIosArrowBack />
          </div>
          <div className="next">
            <IoIosArrowForward />
          </div>
        </div>
      </ul>
      <div className="indi-bottom">
        <div className="indicator">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

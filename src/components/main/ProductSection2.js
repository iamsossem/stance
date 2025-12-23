import listDate from "../../assets/data/Item.json";
import "./ProductSection2.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const ProductSection2 = () => {
  const bestItems = listDate.filter((item) => item.category === "pick");
  return (
    <section id="paceypick">
      <h2>PACEY PICK</h2>
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
                <p>{item.price1}</p>
                <p>{item.price2}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="indi-bottom">
        <div className="indicator">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="indi-txt">
            <p>
              상품 더 보기 <IoIosArrowForward />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection2;

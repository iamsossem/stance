import "./BottomBlog.scss";
import listDate from "../../assets/data/Keyword.json";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const BottomBlog = () => {
  return (
    <section id="keyword">
      <h2>#HOT PEACY KEYWORD</h2>
      <ul>
        {listDate.map((item, idx) => (
          <li key={idx}>
            <img
              src={require(`../../assets/images/keyword/${item.image}`)}
              alt={item.title}
            />
            <h2>#{item.title}</h2>
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
    </section>
  );
};

export default BottomBlog;

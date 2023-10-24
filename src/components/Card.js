import { IMG_CDN_URL } from "../../constants";
const Card = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props;

  return (
    <div className="card">
      <img className="img" alt="img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
export default Card;

import { IMG_CDN_URL } from "../../constants"
const Card = (props) => {
    const { name, cuisines, rating, cloudinaryId } = props;
    return (
        <div className='card'>
            <img className='img' alt="img" src={IMG_CDN_URL + cloudinaryId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{rating} Stars</h4>
        </div>

    )
}
export default Card
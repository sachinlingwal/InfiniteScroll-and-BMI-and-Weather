import Test from "../assets/images/Test.png";
import classes from "./Card.module.css";
const CardInfo = ({ post }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imgContainer}>
        <img src={Test} alt="test" />
      </div>
      <h2>userid : {post.id}</h2>
      <h5 className={classes.title}>{post.title}</h5>
      <p>{post.body}</p>
    </div>
  );
};

export default CardInfo;

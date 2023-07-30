
import '../assets/Card.css';
 export const Card = (props) => {
  return (
    <div className="card">
    <img className="card-img" src={props.image}/>
    <div className="card-info">
      <p className="text-title">{props.Nombre}</p>
      <p className="text-body">{props.vision}</p>
    </div></div>
  );
};

//export default Card;

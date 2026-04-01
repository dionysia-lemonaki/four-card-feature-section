const Card = ({ title, description, icon, variant }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={icon} alt="" />
    </div>
  );
};

export default Card;

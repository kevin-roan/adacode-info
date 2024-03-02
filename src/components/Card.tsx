interface Props {
  imgUrl: string;
  username: string;
  designation: string;
  details: string;
}

const Card: React.FC<Props> = ({ imgUrl, username, designation, details }) => {
  return (
    <div className="card">
      <section className="image_container">
        <img src={imgUrl} alt="image" className="useravatar" />
      </section>
      <section>
        <h1 id="username">{username}</h1>
        <h4 id="designation">{designation}</h4>
        <p className="details">{details}</p>
        <img
          src="https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_1280.png"
          alt="qr code"
          className="qrcode"
        />
        <div className="placecard">Contact</div>
      </section>
    </div>
  );
};

export default Card;

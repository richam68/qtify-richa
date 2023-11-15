
import "./cards.css";


export default function Card({imageSrc, follows, title}) {

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame" >
          <img
            src={imageSrc}
            alt="card-pic"
          />
        </div>
        <div className="card-content">
          <span className="card-pill">
           {follows}
           </span>
        </div>
      </div>

      <p className="card-label">{title}</p>
    </div>
  );
}

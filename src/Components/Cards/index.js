import "./cards.css";
export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img
            src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="card-pic"
          />
        </div>
        <div className="card-content">
          <span className="card-pill">
           100 Follows
           </span>
        </div>
      </div>

      <p className="card-label">New Bollywood</p>
    </div>
  );
}

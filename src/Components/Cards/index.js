import "./cards.css";
import NewAlbum from "./NewAlbums";

export default function Card() {
  return (
    <div className="card-body">
      <div className="card-section">
        <div className="btn-container">
          <button className="btn" style={{ color: " #fff" }}>
            Top Albums
          </button>
          <button className="btn" style={{ color: "#34C94B" }}>
            Show All
          </button>
        </div>
        <div className="card-container">
          <div>
            <img src="Group 7479.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>

          <div>
            <img src="Group 7480.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>

          <div>
            <img src="Group 7479.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>
          <div>
            <img src="Group 7480.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>
          <div>
            <img src="Group 7479.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>
          <div>
            <img src="Group 7479.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>
          <div>
            <img src="Group 7479.png" alt="cardimage1" />
            <p>New Bollywood</p>
          </div>

        </div>
        <br/>
        <NewAlbum/>


      </div>

    </div>
  );
}

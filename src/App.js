import "./App.css";
import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="image">
          <img src={qr} alt="qr-code" />
        </div>
        <div className="query">
          <p style={{ fontSize: "25px", fontWeight: 700, color: "#1F3251" }}>
            Improve your front-end
            <br />
            skills by building projects
          </p>
          <br />
          <p style={{ fontSize: "15px", fontWeight: 400, color: "#9DA1A7" }}>
            Scan the QR code to visit Frontend
            <br />
            Mentor and take your coding skills to
            <br />
            the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

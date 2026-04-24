import { useNavigate, Link } from "react-router-dom";
import "./Splash.css";

function Splash() {
  const navigate = useNavigate();

  return (
    <main className="splash-page">
      <section className="splash-content">
        <div className="splash-main">
          <div className="logo-block">
            <div className="logo-aura"></div>
            <div className="logo-mist"></div>
            <div className="logo-flare logo-flare-left"></div>
            <div className="logo-flare logo-flare-right"></div>

            <img
              src="/logo.png"
              alt="Jukskei Tournament Logo"
              className="splash-logo"
            />
          </div>

          <div className="splash-text">
            <p className="splash-eyebrow">Namibia Ope Jukskei Toernooi</p>
            <h1 className="splash-heading">Welkom by Jukskei</h1>
            <p className="splash-subtitle">
              Volg spanne, wedstryde, uitslae, galery-oomblikke en
              toernooi-opdaterings op een plek.
            </p>
          </div>
        </div>

        <div className="splash-side">
          <div className="splash-powered">
            <p>Powered By</p>
            <img
              src="/schoemans-logo.png"
              alt="Schoemans Logo"
              className="sponsor-logo"
            />
          </div>

          <button
            className="splash-button"
            type="button"
            onClick={() => navigate("/splash2")}
          >
            Get Started <span aria-hidden="true">→</span>
          </button>

          <Link to="/splash2" className="auth-link">
            Don’t have an account?{" "}
            <span className="signup-highlight">Sign up</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Splash;

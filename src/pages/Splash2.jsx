import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Splash2.css";

function Splash2() {
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = useMemo(
    () => [
      {
        image: "/player.jpeg",
        alt: "Jukskei Player",
        title: "Welkom by Jukskei 25",
        text: "Vier 25 jaar van jukskei-uitnemendheid en passie. Volg wedstryde, skedules en beleef die toernooi op een plek.",
      },
      {
        image: "/family.jpeg",
        alt: "Jukskei Family",
        title: "Jukskei Familie",
        text: "Viering van sport, gemeenskap en samewerking. Geniet die toernooi en wees deel van die jukskei-erfenis.",
      },
    ],
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      goToNext();
    } else if (swipeDistance < -minSwipeDistance) {
      goToPrevious();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <main
      className="splash2-page"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={currentSlide.image}
        alt={currentSlide.alt}
        className="splash2-image"
      />

      <div className="splash2-fade" />

      <section className="splash2-content">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.text}</p>

        <div className="splash2-slider-controls" aria-label="Splash slides">
          <div
            className="splash2-dots"
            role="tablist"
            aria-label="Slide picker"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`splash2-dot ${
                  index === currentIndex ? "is-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="splash2-login-button"
          onClick={() => navigate("/home")}
        >
          Login →
        </button>

        <Link to="/splash2" className="auth-link2">
          Don’t have an account?{" "}
          <span className="signup-highlight2">Sign up</span>
        </Link>
      </section>
    </main>
  );
}

export default Splash2;

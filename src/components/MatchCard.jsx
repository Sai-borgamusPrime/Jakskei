function MatchCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  homeLogo,
  awayLogo,
  date,
  time,
}) {
  return (
    <article className="match-card">
      <div className="match-card-top">
        <div className="match-datetime">
          <span className="match-date">{date}</span>
          <span className="match-time">{time}</span>
        </div>

        <span className={`match-status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="match-card-body">
        <div className="team-block">
          <img src={homeLogo} alt={homeTeam} className="team-logo" />
          <span className="team-name">{homeTeam}</span>
        </div>

        <div className="match-score">
          <span>{homeScore}</span>
          <span className="score-divider">:</span>
          <span>{awayScore}</span>
        </div>

        <div className="team-block">
          <img src={awayLogo} alt={awayTeam} className="team-logo" />
          <span className="team-name">{awayTeam}</span>
        </div>
      </div>

      <button className="watch-button">Watch</button>
    </article>
  );
}

export default MatchCard;

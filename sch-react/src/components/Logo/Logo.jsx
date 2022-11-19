import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <section className="section">
      <header className="logo-container">
        <Link to={"/"}>
          <img
            src="public/assets/SCH.webp"
            className="logo-sch"
            alt="Logo de SCHmecanica"
            width="90"
            height="90"
          />
        </Link>
      </header>
    </section>
  );
};

export default Logo;

export default function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Hight <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src="/img/clock.svg" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/img/teamwork.svg" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/img/diaphragm.svg" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/img/money.svg" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/img/home2.png" />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make </h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography that you have. we have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <Image src="/img/home1.png" alt="Guy with a camera" height={754} width={503} />
      </div>
    </div>
  );
}

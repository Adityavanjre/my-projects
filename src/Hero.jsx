import heroImage from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects Demo</h1>
          <p>
            Typewriter vice etsy keffiyeh, jean shorts pinterest wayfarers
            listicle single-origin coffee. Health goth mumblecore before they
            sold out deep v pok pok authentic lo-fi shabby chic wayfarers beard
            etsy. 3 wolf moon lumbersexual shabby chic artisan ennui ramps
            bespoke pabst four loko locavore.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImage} alt="Demo version" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero

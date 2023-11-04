import heroImage from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects Demo</h1>
          <p>
            I invite you to explore my web demos and see firsthand the results
            of my passion for web development and design. If you're ready to
            embark on a digital journey or need a web solution that reflects
            your vision, don't hesitate to get in touch. Your project could be
            the next addition to my ever-evolving portfolio. Let's create
            something amazing together!
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

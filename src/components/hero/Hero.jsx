import './Hero.scss';
import mode from '../../assets/amico.png';
import play from '../../assets/play-btn.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <div className='hero__leftSide'>
            <div className='hero__leftSide-text'>
              <h1>Work at the speed of thought</h1>
              <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
            </div>
            <div className='hero__leftSide-button'>
              <button className='start-btn'>Get started</button>
              <button className='watch-btn'>
                <img src={play} alt="play" /> Watch the Video
              </button>
            </div>
          </div>
          <div className='hero__rightSide'>
            <img src={mode} alt="social media img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
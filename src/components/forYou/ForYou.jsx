import './ForYou.scss';
import cursor from '../../assets/curson-icon.svg';
import design from '../../assets/design-icon.svg';
import like from '../../assets/like-icon.svg';
import time from '../../assets/time-icon.svg';

const ForYou = () => {
  return (
    <section className='forYou'>
      <div className='container'>
        <div className='forYou__container'>
          <h2>Product  was Built Specifically <br />for You</h2>
          <ul>
            <li>
              <div className='forYou__card-icon'>
                <img src={cursor} alt="cursor icon" />
              </div>
              <div className='forYou__card-text'>
                <h4>First click tests</h4>
                <p>While most people enjoy casino gambling,</p>
              </div>
            </li>
            <li>
              <div className='forYou__card-icon'>
                <img src={design} alt="cursor icon" />
              </div>
              <div className='forYou__card-text'>
                <h4>Design surveys</h4>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
            </li>
            <li>
              <div className='forYou__card-icon'>
                <img src={like} alt="cursor icon" />
              </div>
              <div className='forYou__card-text'>
                <h4>Preference tests</h4>
                <p>The Myspace page defines the individual.</p>
              </div>
            </li>
            <li>
              <div className='forYou__card-icon'>
                <img src={time} alt="cursor icon" />
              </div>
              <div className='forYou__card-text'>
                <h4>Five second tests</h4>
                <p>Personal choices and the overall personality of the person.</p>
              </div>
            </li>
          </ul>
          <button className='forYou__btn'>SIGN UP NOW</button>
        </div>
      </div>
    </section>
  )
}

export default ForYou
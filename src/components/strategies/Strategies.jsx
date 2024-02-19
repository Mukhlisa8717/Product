import './Strategies.scss' ;
import increasing from '../../assets/strategies1.png';
import motivation from '../../assets/strategies2.png';
import success from '../../assets/strategies3.png';

const Strategies = () => {
  return (
    <section className='strategies'>
        <div className='container'>
            <div className='strategies__container'>
              <h1>Contents Strategies</h1>
              <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
              <ul>
                <li>
                  <img src={increasing} alt="increasing" />
                  <h5>By <span>Wahid Ari</span> |  03 March 2019</h5>
                  <h3>Increasing Prosperity With Positive Thinking</h3>
                </li>
                <li>
                  <img src={motivation} alt="increasing" />
                  <h5>By <span>Wahid Ari</span> |  03 March 2019</h5>
                  <h3 className='strategies__item-title'>Motivation Is The First Step To Success</h3>
                </li>
                <li>
                  <img src={success} alt="increasing" />
                  <h5>By <span>Wahid Ari</span> |  03 March 2019</h5>
                  <h3>Success Steps For Your Personal Or Business</h3>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Strategies
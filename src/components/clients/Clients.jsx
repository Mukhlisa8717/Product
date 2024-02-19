import './Clients.scss';
import rating from '../../assets/rating.png';
import userPhoto1 from '../../assets/user-photo1.png';

const Clients = () => {
  return (
    <section className='clients'>
        <div className='container'>
            <div className='clients__container'>
                <h1>What Clients Say</h1>
                <h5>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </h5>
                <ul>
                    <li>
                        <img src={rating} alt="rating" />
                        <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                        <div className='clients__userInf'>
                            <img src={userPhoto1} alt="user phot 1" />
                            <div>
                                <h5>Wahid Ari</h5>
                                <h6>Designer</h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={rating} alt="rating" />
                        <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                        <div className='clients__userInf'>
                            <img src={userPhoto1} alt="user phot 1" />
                            <div>
                                <h5>Wahid Ari</h5>
                                <h6>Designer</h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={rating} alt="rating" />
                        <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                        <div className='clients__userInf'>
                            <img src={userPhoto1} alt="user phot 1" />
                            <div>
                                <h5>Wahid Ari</h5>
                                <h6>Designer</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Clients
import './Price.scss';

const Price = () => {
  return (
    <section className='price'>
        <div className='container'>
            <div className='price__container'>
                <h1>Price Table</h1>
                <p>We offer competitive price</p>
                <ul>
                    <li>
                        <h3>Free</h3>
                        <h6>Brief price description</h6>
                        <div className='price__item-box'>
                            <h1>0</h1>
                            <div className='price__details'>
                                <h3>$</h3>
                                <h6>Per / month</h6>
                            </div>
                        </div>
                        <div className='price__item-information'>
                            <h6>Only 2 Operators</h6>
                            <h6>Notifications</h6>
                            <h6>Landing Pages</h6>
                        </div>
                        <button className='price__item-btn'>Order Now</button>
                    </li>
                    <li className='price__standart-item'>
                        <h3>Standard</h3>
                        <h6>Brief price description</h6>
                        <div className='price__item-box'>
                            <h1>5</h1>
                            <div className='price__details'>
                                <h3>$</h3>
                                <h6>Per / month</h6>
                            </div>
                        </div>
                        <div className='price__item-information'>
                            <h6>5+ Operators</h6>
                            <h6>Notifications</h6>
                            <h6>Landing Pages</h6>
                        </div>
                        <button className='price__item-btn'>Order Now</button>
                    </li>
                    <li>
                        <h3>Premium</h3>
                        <h6>Brief price description</h6>
                        <div className='price__item-box'>
                            <h1>10</h1>
                            <div className='price__details'>
                                <h3>$</h3>
                                <h6>Per / month</h6>
                            </div>
                        </div>
                        <div className='price__item-information'>
                            <h6>10+ Operators</h6>
                            <h6>Notifications</h6>
                            <h6>Landing Pages</h6>
                        </div>
                        <button className='price__item-btn'>Order Now</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Price
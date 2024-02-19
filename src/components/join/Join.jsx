import './Join.scss';
import joinImg from '../../assets/join-img.png';

const Join = () => {
  return (
    <section className='join'>
        <div className='container'>
            <div className='join__container'>
                <div className='join__leftSide'>
                    <h1>Join 100 Compannies who boost their business with Product</h1>
                    <button className='join__leftSide-btn'>Get This</button>
                </div>
                <div className='join__rightSide'>
                    <img src={joinImg} alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Join
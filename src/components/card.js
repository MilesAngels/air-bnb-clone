import star from '../img/star.png';
import woman from '../img/woman.png'

export default function Card() {
    return(
        <div className="card">
            <img src={woman} className="card-image" alt="Katie Zaferes"/>
            <div className="card-content">
                <span><img className="star" src={star} alt="star"/>5.0</span>
                <span className="gray-text">(6) •</span>
                <span className="gray-text">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
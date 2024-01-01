import star from '../img/star.png';

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if (props.item.location === "Online"){
        badgeText = "ONLINE";
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`./img/${props.item.coverImg}`} className="card-image" alt={props.title}/>
            <div className="card-content">
                <span><img className="star" src={star} alt="star"/>{props.item.stats.rating}</span>
                <span className="gray-text">({props.item.stats.reviewCount}) •</span>
                <span className="gray-text">{props.item.location}</span>
            </div>
            <h2 className="card-title">{props.item.title}</h2>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
import hero from '../img/photo-grid.png';

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-image" src={hero} alt="Experience Gallery Grid"/>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    )
}
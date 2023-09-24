import data from "../assets/data.jsx"
import Card from "./Card.jsx"

function CardRoll() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    }
    )

    return (
        <section className="cardroll">
            {cards}
        </section>
    )
}

export default CardRoll
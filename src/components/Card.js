import locationicon from "../img/location-icon.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="Mount Fuji" className="card-img" />
            <div className="card-content">
                <div className="card-location">
                    <img src={locationicon} alt="location" className="loc-icon" />
                    <span className="location-name">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-title">{props.title}</div>
                <div className="trip-date">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="card-detail">{props.description}</div>
            </div>
        </div>
    );
}

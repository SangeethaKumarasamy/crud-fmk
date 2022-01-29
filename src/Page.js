
export function Page({ name, explain, image, image1, image2, deletebutton, editbutton, infobutton }) {
    console.log(explain);
    return (
        <div>
            <p>{name}</p>
            <div className="flower-pic">
                <img src={image} alt={name} />
                <img src={image1} alt={name} />
                <img src={image2} alt={name} />
                {/* <img className="movie-pic" src={image} alt={name} /> */}
            </div>
            <div>
                <p>{explain}</p>
            </div>
            <div>
                <span className="btn">{deletebutton}</span>
                <span className="btn">{editbutton}</span>
                <span className="btn">{infobutton}</span>
            </div>

        </div>
    );
}
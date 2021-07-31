import "../home/index.css"

const Home  = () => {
    return(
        <>
        <div className="home-card">
            <h1 className="home-heading">Clothes that get you noticed</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothesImage" className="home-img"/>
            <p className="home-para">Fashion is a part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in you own way.</p>
            <button className="home-btn">Shop Now</button>
        </div>
        <div className="home-card-lg">
            <div className="home-content">
                <h1 className="home-heading-lg">Clothes that get you noticed</h1>
                <p className="home-para-lg">Fashion is a part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in you own way.</p>
                <button className="home-btn">Shop Now</button>
            </div>
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothesImage" className="home-img-lg"/>
        </div>
    </>
    )
}

export default Home
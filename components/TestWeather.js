import {useEffect,useState} from "react";
// import { getServerSideProps } from "../pages";
function TestWeather() {
    const API_KEY="6dd903f9c530498fb50d1d8ac04aa5a6";
    const news_url=`https://newsapi.org/v2/everything?q=Apple&from=2021-06-02&sortBy=popularity&apiKey=${API_KEY}`;
    
    const [weather,setWeather] = useState();
    const [locLoaded,setLocLoaded] = useState(false);
    const [news,setNews] = useState();
    const [loc,setLoc] = useState([]);
    const weather_url = `http://api.weatherapi.com/v1/current.json?key=fba7906bf7154fa0b8264334210306&q=${loc[0]},${loc[1]}&aqi=yes`;
    const onSuccess = (location) => {
        setLoc([location.coords.latitude,location.coords.longitude])
        setLocLoaded(true);
    };
    const fetchLatLong = () =>{
        navigator.geolocation.getCurrentPosition(onSuccess);
        

    }
    const fetchNews = () => {
        fetch(news_url)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }
    useEffect(()=>{
        fetchLatLong();
        
        if(locLoaded){
            fetch(weather_url)
            .then(res => res.json())
            .then(data => setWeather(data))
        }
        fetchNews();
        
        
    },[locLoaded])

    
    return (
        <div>
            
            {
                news?.map((n)=>(
                    <div>
                        <h1>{n.title}</h1>
                    </div>
                ))
            }
            <p>{weather.location.name}</p>
            
        </div>
    )
}


export default TestWeather

import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Animecomponent() {
    let AnimeObjects = [
        {
            id: 1,
            Animename: "Jujutsu Kaisen",
            Character: 'GOJO SATORU',
            imgSrc: require('./assets/gojo.png'),
            rating: 9.9,
            progress: '20%',
        },
        {
            id: 2,
            Animename: "One Piece",
            Character: 'Monkey D. Luffy',
            imgSrc: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/luffy-is-grinning-in-the-movie.jpg',
            rating: '10.0',
            progress: '50%',
        },
        {
            id: 3,
            Animename: "Heavenly Dillusion",
            Character: 'Maru',
            imgSrc: 'https://inasianspaces.files.wordpress.com/2023/04/heavenly-delusion-ep-1-lawless-generation-kiruko-and-maru.png?w=1200',
            rating: 9.7,
            progress: '72%',
        },
        {
            id: 4,
            Animename: "Hell's Paradise",
            Character: 'Shinko',
            imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/9902a4dd25b2552b79662c712c6967d2ba2c7bb99fdaff7546dd457ea0839271.jpg',
            rating: 9.5,
            progress: '70%',
        },
        {
            id: 5,
            Animename: "Attack On Titan",
            Character: 'Eren Eager',
            imgSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo',
            rating: 9.8,
            progress: '100%',
        },
        {
            id: 6,
            Animename: "One Punch Man",
            Character: 'Hero Saitama',
            imgSrc: 'https://i.kym-cdn.com/photos/images/newsfeed/001/620/770/3aa.jpg',
            rating: '9.0',
            progress: '85%',
        },
        {
            id: 7,
            Animename: "Demon Slayer",
            Character: 'Kamado Tanjiro',
            imgSrc: 'https://staticg.sportskeeda.com/editor/2022/01/b50e2-16417952205524.png',
            rating: 9.7,
            progress: "72%",
        },
        {
            id: 8,
            Animename: "Blue Lock",
            Character: 'Isagi',
            imgSrc: 'https://i.ytimg.com/vi/UOGG1P32z5k/maxresdefault.jpg',
            rating: 9.7,
            progress: '65%',
        },
        {
            id: 9,
            Animename: "Bleach",
            Character: 'Kurosaki Ichigo',
            imgSrc: 'https://wallpapers.com/images/hd/bleach-pictures-4t2ieybhrb5agrn6.jpg',
            rating: 9.4,
            progress: '83%',
        },
        {
            id: 10,
            Animename: "Naruto",
            Character: 'Naruto Uzumaki',
            imgSrc: 'https://dw9to29mmj727.cloudfront.net/products/1974740935.jpg',
            rating: 9.8,
            progress: '84%',
        },
        {
            id: 11,
            Animename: "Dragon Ball Super",
            Character: 'Son Goku',
            imgSrc: 'https://w0.peakpx.com/wallpaper/479/289/HD-wallpaper-dragon-ball-super-anime-goku-movie-vegeta.jpg',
            rating: 9.8,
            progress: '81%',
        },
        {
            id: 12,
            Animename: "Tokyo Revengers",
            Character: 'Hanagaki Takimichi',
            imgSrc: 'https://wallpapercave.com/wp/wp10556553.jpg',
            rating: 8.2,
            progress: '92%',
        },
    ];

    let AnimeObject = JSON.parse(localStorage.getItem('AnimeData')) || [];
    const [searchString, setString] = useState('');
    const [filterProducts, setSearchobj] = useState([...AnimeObjects, ...AnimeObject]);
    const [save, setSave] = useState([]);

    const searchYourObj = (value) => {
        setSearchobj(AnimeObjects.filter(object =>
            object.Animename.toLowerCase().startsWith(value.toLowerCase())
        ));
    };

    const filterbyProgress = (value) => {
        setSearchobj(AnimeObjects.filter(object =>
            (object.progress.substring(0, 2) >= value.split(',')[0]) &&
            (object.progress.substring(0, 2) <= value.split(',')[1])
        ));
    };

    useEffect(() => {
        if (save[0]) localStorage.setItem('AnimeData', JSON.stringify(save));
    }, [save]);

    const savechanges = () => {
        const storedImgUrl = document.getElementById('imglink').value;
        const newAnimeObj = {
            id: filterProducts.length + 1,
            Animename: document.getElementsByClassName('AnimeName')[0].value,
            Character: document.getElementsByClassName('AnimeChar')[0].value,
            imgSrc: storedImgUrl,
            rating: document.getElementsByClassName('AnimeRating')[0].value,
            progress: document.getElementsByClassName('AnimeProgress')[0].value,
        };
        setSave(prev => [...prev, newAnimeObj]);
        setSearchobj(prev => [...prev, newAnimeObj]);
    };

    return (
        <div className='container'>
            <div className='row mb-3'>
                <div className='row mx-1 d-flex justify-content-center searchBar'>
                    <div className='col-md-4 col-12 mb-2'>
                        <input type="text" onChange={(e) => searchYourObj(e.target.value)} className="form-control mt-2" placeholder="Search your anime requirement..." />
                    </div>
                    <div className='col-md-4 col-12 text-center'>
                        <button type="button" className="btn mt-2 mybuttom" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            + Add New Item
                        </button>
                        <form>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Enter Details</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <label>Enter Anime name</label>
                                            <input className="form-control mt-2 mb-2 AnimeName" />
                                            <label>Enter Anime Character</label>
                                            <input className="form-control mt-2 mb-2 AnimeChar" />
                                            <label>Enter rating</label>
                                            <input className="form-control mt-2 mb-2 AnimeRating" />
                                            <label>Enter Progress of anime</label>
                                            <input className="form-control mt-2 mb-2 AnimeProgress" />
                                            <label>Enter Image address of anime</label>
                                            <input id='imglink' className="form-control mt-2 mb-2" />
                                        </div>
                                        <div className="modal-footer">
                                            <input type='reset' value="Reset" className='btn btn-outline-danger' />
                                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={savechanges}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='row d-flex flex-wrap justify-content-center text-center mb-3'>
                <div className='col-6 col-md-2 mb-2'><button value={['20', '50']} onClick={(e) => filterbyProgress(e.target.value)} className='btn btn-success w-100'>20% - 50%</button></div>
                <div className='col-6 col-md-2 mb-2'><button value={['50', '60']} onClick={(e) => filterbyProgress(e.target.value)} className='btn btn-success w-100'>50% - 60%</button></div>
                <div className='col-6 col-md-2 mb-2'><button value={['70', '80']} onClick={(e) => filterbyProgress(e.target.value)} className='btn btn-success w-100'>70% - 80%</button></div>
                <div className='col-6 col-md-2 mb-2'><button value={['90', '100']} onClick={(e) => filterbyProgress(e.target.value)} className='btn btn-success w-100'>90% - 100%</button></div>
            </div>

            {filterProducts.map(animeobj => (
                <div className="row mt-3 align-items-center" key={animeobj.id}>
                    <div className="col-12 col-md-4 mb-2 text-center">
                        <img src={animeobj.imgSrc} className="img-fluid anime-img" alt='Anime' />
                    </div>
                    <div className="col-12 col-md-8">
                        <h1>{animeobj.Animename}</h1>
                        <h4>{animeobj.Character}</h4>
                        <div className='d-flex align-items-center mb-2'>
                            <label className='btn btn-success rating'><i className="fa-regular fa-star"></i>{animeobj.rating}</label>
                        </div>
                        <p>Progress</p>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: animeobj.progress }}>{animeobj.progress}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Animecomponent;
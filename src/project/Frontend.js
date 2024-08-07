
// import { Link } from 'react-router-dom'
// import './Frontend.css';
// const Homepage = () => {
//     return (
//         <div className='container'>
//             <h3>Maruthi Suzuki Arena</h3>
//             <div className="car-list">
//                 <div className="car-item">
//                     <Link to='/Register'>
//                     <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220818055347_Alto.jpg&w=700&c=1" alt="Alto K10" />
//                     <h1>ALTO K10</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src="https://media.zigcdn.com/media/model/2023/Feb/s-presso_930x620.jpg" alt="S-presso" />
//                         <h1>S-PRESSO</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src="https://oneauto.in/wp-content/uploads/2015/12/Celerio-Car-png.png" alt="CELERIO" />
//                         <h1>CELERIO</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src='https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/112947/wagon-r-2022-exterior-front-view.jpeg?isig=0&q=80' alt='Wagon R' />
//                         <h1>WAGON R</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src='https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2017-04%2Fnew-generation-maruti-suzuki-dzire_827x510_61493035950.jpg&w=1080&q=75' alt='Dzire' />
//                         <h1>Dzire</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src="https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2022-suzuki-swift-62257dd23ee46.webp" alt="Swift" />
//                         <h1>Swift</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg/1280px-2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg' alt='Brezza' />
//                         <h1>Brezza</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg' alt='Ertiga' />
//                         <h1>Ertiga</h1>
//                     </Link>
//                 </div>
//                 <div className="car-item">
//                 <Link to='/Register'>
//                         <img src='https://5.imimg.com/data5/TI/SS/MY-28759191/blue-1000x1000.png' alt='Eeco' />
//                         <h1>EECO</h1>
//                     </Link>
//                 </div>
//             </div>

//         </div>
//     );

// }

// export default Homepage;

import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Frontend.css';

const Homepage = () => {
    return (
        <div className='container'>
            <h3 className='text-center'>Maruthi Suzuki Arena</h3>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000} // Adjust the interval as needed
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false} // Set to false for fixed height
                className='carousel'
            >
                {carData.map(car => (
                    <div className="car-item" key={car.id}>
                        <Link to='/Register'>
                            <img src={car.imgSrc} alt={car.altText} />
                            <h1 className='mb-5'>{car.name}</h1>
                            <h1>{car.TotalSavings}</h1>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

const carData = [
    {
        id: 1,
        imgSrc: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220818055347_Alto.jpg&w=700&c=1",
        altText: "Alto K10",
        name: "ALTO K10",
    },
    {
        id: 2,
        imgSrc: "https://media.zigcdn.com/media/model/2023/Feb/s-presso_930x620.jpg",
        altText: "S-presso",
        name: "S-PRESSO",
       
    },
    {
        id: 3,
        imgSrc: "https://oneauto.in/wp-content/uploads/2015/12/Celerio-Car-png.png",
        altText: "CELERIO",
        name: "CELERIO"
    },
    {
        id: 4,
        imgSrc: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/112947/wagon-r-2022-exterior-front-view.jpeg?isig=0&q=80',
        altText: 'Wagon R',
        name: 'WAGON R'
    },
    {
        id: 5,
        imgSrc: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2017-04%2Fnew-generation-maruti-suzuki-dzire_827x510_61493035950.jpg&w=1080&q=75',
        altText: 'Dzire',
        name: 'Dzire'
    },
    {
        id: 6,
        imgSrc: "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2022-suzuki-swift-62257dd23ee46.webp",
        altText: "Swift",
        name: "Swift"
    },
    {
        id: 7,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg/1280px-2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg',
        altText: 'Brezza',
        name: 'Brezza'
    },
    {
        id: 8,
        imgSrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg',
        altText: 'Ertiga',
        name: 'Ertiga'
    },
    {
        id: 9,
        imgSrc: 'https://5.imimg.com/data5/TI/SS/MY-28759191/blue-1000x1000.png',
        altText: 'Eeco',
        name: 'EECO'
    }
];

export default Homepage;


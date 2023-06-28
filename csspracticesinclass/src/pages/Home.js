import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

import CatFactsCard from '../components/catFacts/CatFactsCard';
import Boxes from '../components/boxes/Boxes';
import OrangeSky from '../components/orangeSky/OrangeSky';
import VerticalBackground from '../components/verticalBackground/VerticalBackground';

import "./Home.scss";
import HomeRender from './HomeRender';

const Home = () => {
    
    const components = [
        {
            id: 1,
            component: <Boxes />,
            src: "./images/one.png"
        },

        {
            id: 2,
            component: <CatFactsCard />
        },

        {
            id: 3,
            component: <OrangeSky />
        },

        {
            id: 4,
            component: <VerticalBackground />
        }

    ]

    
    // const [component, setComponent] = useState([]);

    // useEffect(() => {
    //     axios.get(`${components}/component`)
    //     .then((res) => setComponent(res.data))
    //     .catch((c) => console.warn("catch", c))
    // }, [components])

  return (
    <div className='home'>
        <ul className='home__ul'>
            {components.map(({id, component, src}) => {
                return (
                    <li key={id}>
                        <HomeRender key={component.id} component={component} src={src} />
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Home;
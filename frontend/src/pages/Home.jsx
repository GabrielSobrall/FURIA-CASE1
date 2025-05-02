import {useLocation} from 'react-router-dom';

function Home(){
    const location = useLocation();
    const nick =location.state?.nick;
    
    

}

export default Home;
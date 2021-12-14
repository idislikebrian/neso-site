import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://neso-server.herokuapp.com/blogs/');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h3><BlogList blogs={blogs} title="All Bulletins"/></h3>
        </div>
     );
}

export default Home;
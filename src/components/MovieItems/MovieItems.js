import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import routes from './../../routes';

const MovieItems = ({results, location}) => {

    // const url = match.url === '/' ? routes.movies : match.url

    return (
        <ul className="movieItems">
            {results.map(({id, title, name, poster_path}) => (
                <li key={id}>
                    <Link to={{
                        pathname:`/movies/${id}`,
                        state:{from:location}
                    }}>
                        {poster_path != null ? 
                            <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt={title ? title : name} />
                            : <img src={`https://dummyimage.com/220x330/2a2a2a/ffffff&text=No+image`} alt="No image" />
                        }
                        <h4>{title ? title : name}</h4>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

MovieItems.defaultProps = {
    MovieItems:[]
}

MovieItems.propTypes = {
    MovieItems:PropTypes.array.isRequired
}

export default withRouter(MovieItems);
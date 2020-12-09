import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieItems({results, url}){
    return (
        <ul className="movieItems">
            {results.map(({id, title, name, poster_path}) => (
                <li key={id}>
                    {poster_path && <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt={title ? title : name} />}
                    <Link to={`${url}/${id}`}>{title ? title : name}</Link>
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
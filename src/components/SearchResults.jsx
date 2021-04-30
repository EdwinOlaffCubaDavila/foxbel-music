import React from 'react';
import { connect } from 'react-redux';
import { setPlaying, addToQueue } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/SearchResults.scss';

const SearchResults = ({ results, setPlaying, addToQueue }) => {
  const handlePlaying = data => {
    setPlaying({
      id: data.id,
      title: data.title_short,
      name: data.artist.name,
      cover: data.album.cover,
      preview: data.preview
    });
    addToQueue({
      id: data.id,
      title: data.title_short,
      name: data.artist.name,
      cover: data.album.cover,
      preview: data.preview
    });
  }

  return (
    <div className="search-results">
      <h2>Resultados</h2>

      <div className="results">

        {(results) ?
          results?.map(rItem => (
            <div className="item" key={rItem.id}>
              <div className="image">
                <img src={rItem.album.cover} alt="img" />
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => handlePlaying(rItem)}
                />
              </div>


              <div className="desc">
                <h3>{`${rItem.title_short}`}</h3>
                <h4>{`${rItem.artist.name}`}</h4>
              </div>
            </div>
          )) :
          <h1>No hay</h1>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.search
  }
};
const mapDispatchToProps = {
  setPlaying,
  addToQueue
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
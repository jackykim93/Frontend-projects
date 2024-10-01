import React, { useRef } from 'react'
import "./MovieModal.css";
import useOnClickOutside from '../../Hooks/useOnClickOutside';

const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) => {

  const ref = useRef();  

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

  return (
    <div className='presentation' role="presentation">
        <div className='wrapper-modal'>
            <div className='modal' ref={ref}>
                <span
                    onClick={() => setModalOpen(false)}
                    className='modal-close'
                    >
                    X
                </span>

                <img 
                    className='modal_poster-img'
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt="modal-img"
                />

                <div className='modal_content'>
                    <p className='modal_details'>
                        <span className='modal_user_perc'>100% for you</span>{" "}
                        {release_date ? release_date : first_air_date}
                    </p>

                    <h2 className='modal_title'> {title ? title : name}</h2>
                    <p className='modal_overview'>평정: {vote_average}</p>
                    <p className='modal_overview'>{overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModal
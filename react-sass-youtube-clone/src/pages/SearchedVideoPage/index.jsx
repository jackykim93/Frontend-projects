import React, { useContext, useEffect, useState } from 'react'
import {SearchContext} from '../../context/SearchContext';
import {getVideoInfo} from '../../helpers/fetchingData';
import VideoCard from '../../components/VideoCard/index';
import { SidebarContext } from '../../context/SidebarContext';

const SearchedVideoPage = () => {
  const [searchedVideos, setSearchedVideos] = useState([]);
  const { searchQuery } = useContext(SearchContext);
  const { setIsToggled } = useContext(SidebarContext);
  const loadVideoInfo = async () => {
    setIsToggled(true);
    const videos = await getVideoInfo(searchQuery.videos);
      setSearchedVideos(videos);
    }

  useEffect(() => {
    loadVideoInfo();
  }, [loadVideoInfo])

  const searchedVideosMarkup = searchedVideos?.map(video => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      img={video.snippet.thumbnails.medium.url}
      info={video.snippet}
      eInfo={video.extrainfo}
      channelInfo={video.channelInfo}
    />
  ))

  return (
    <section className='searchedVideos'>
      {searchedVideosMarkup}
    </section>
  )
}

export default SearchedVideoPage
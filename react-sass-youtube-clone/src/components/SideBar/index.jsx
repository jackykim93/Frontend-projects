import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize';
import SmallSideBar from './SmallSideBar';
import BigSideBar from './BigSideBar';
import { SidebarContext } from '../../context/SidebarContext';

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SidebarContext);

  useEffect(() => {
    width <= 1320
      ? setIsToggled(false)
      : location.pathname.startsWith('/video')
        ? setIsToggled(false)
        : setIsToggled(true)
  }, [location.pathname, setIsToggled, width])

  return (
    <>
      {
        location.pathname.startsWith('/video/')
          ? (isToggled
            ? <BigSideBar />
            : null
          )
          : width < 792
            ? null
            : (
              isToggled
                ? <BigSideBar />
                : <SmallSideBar />
            )
      }
    </>
  )
}

export default SideBar
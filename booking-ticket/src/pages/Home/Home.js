import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

//kết nối redux
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../../component/Movies/Movie';
import MultipleRows from '../../component/RSlick/MultipleRowSlick';


export default function Home(props) {

  const { arrMovie } = useSelector(state => state.QuanLyPhimReducer);

  const renderMovie = () => {
    return arrMovie.map((phim, index) => {
      return <Movie key={index} />

    })
  }


  return (
    <div>
      Home Page !!!


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrMovie={arrMovie}/>
          {/* <div className="flex flex-wrap -m-4"> */}
          {renderMovie()}
          {/* </div> */}
        </div>

        <div className="mx-auto">
          <HomeMenu />
        </div>

      </section>



    </div>
  )
}

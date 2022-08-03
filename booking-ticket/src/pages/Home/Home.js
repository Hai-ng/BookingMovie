import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

//kết nối redux
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../../component/Movies/Movie';
import MultipleRows from '../../component/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';


export default function Home(props) {

  const { arrMovie } = useSelector(state => state.QuanLyPhimReducer);

  const { arrRap } = useSelector(state => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  console.log("arr Home", arrMovie);
  // const renderMovie = () => {
  //   return arrMovie.map((phim, index) => {
  //     return <Movie key={index} />

  //   })
  // }

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachRapAction());
  }, [])

  return (
    <div>
      <HomeCarousel />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrMovie={arrMovie} />
        </div>

        <div className="mx-auto">
          <HomeMenu arrRap={arrRap} />
        </div>

      </section>

    </div>
  )
}

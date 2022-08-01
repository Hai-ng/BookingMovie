import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css'
import Movie_Flip from "../Movies/Movie_Flip";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";
import './MultipleRowSlick.module.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block", color: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", color: 'black' }}
      onClick={onClick}
    />
  );
}



const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);

  let activeMovieDC = dangChieu === true ? 'active_Movie' : 'none_active_Movie';
  let activeMovieSC = sapChieu === true ? 'active_Movie' : 'none_active_Movie';

  const renderMovies = () => {
    return props.arrMovie.slice(0, 12).map((item, index) => {
      // return <div className={`${styleSlick['width-item']}`} key={index}  >
      return <div key={index}  >
        {/* <Movie phim={item}/> */}
        <Movie_Flip item={item} />
      </div>
    })
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <button type="button" className={`${activeMovieDC} px-8 py-3 font-semibold rounded-full bg-black text-white`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU }
          dispatch(action);
        }} > ĐANG CHIẾU</button>

      <button type="button" className={`${activeMovieSC} px-8 py-3 font-semibold rounded-full bg-black text-white`}
        onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU }
          dispatch(action);
        }}> SẮP CHIẾU</button>


      <Slider {...settings}>


        {renderMovies()}

      </Slider>
    </div>
  );

}

export default MultipleRowSlick;
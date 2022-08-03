import React, { useEffect } from 'react'
import './Detail.css';
import './circle.css';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
// import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions';
import moment from 'moment';
// import { StarOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom'

const { TabPane } = Tabs;

export default function Detail(props) {
  const movieDetail = useSelector(state => state.QuanLyPhimReducer.movieDetail);

  // console.log('movie detail', movieDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    //lay ttin param từ url
    let { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));

  }, [])


  return (
    <div className="App" style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, display: 'flex', minHeight: '100vh' }}>

      <div className="box1">
        <div className='grid grid-cols-12 mt-32 ml-10'>
          <div className='col-span-5 col-start-3'>
            <div className='grid grid-cols-3'>
              <img src={movieDetail.hinhAnh} style={{ width: '100%', height: 300 }} alt={movieDetail.tenPhim} />
              <div className='col-span-2 ml-5 text-white' style={{ marginTop: '25%' }}>
                <p className='text-sm'>Ngày Chiếu: {moment(movieDetail.ngayKhoiChieu).format('DD.MM.YY')}</p>
                <p className='text-4xl leading-3'>{movieDetail.tenPhim}</p>
                <p>{movieDetail.moTa}</p>
              </div>
            </div>
          </div>

          <div className='col-span-4'>
            <h1 style={{ marginRight: '50%' }} className='text-yellow-500 text-xl'>
              <Rate allowHalf value={movieDetail.danhGia / 2} />
            </h1>
            <div className="c100 p50 big green">
              <span>{movieDetail.danhGia * 10}</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>

          </div>

        </div>

        <div className='mt-20 ml-60 w-2/3 container bg-white px-5 py-5'>

          <div>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 350 }}>
                <div>
                  <Tabs tabPosition={'left'}>
                    {movieDetail.heThongRapChieu?.map((htr, index) => {
                      return <TabPane tab=
                        {<div>
                          <img src={htr.logo} width={50} height={50} />
                          {htr.tenHeThongRap}
                        </div>}
                        key={index}>
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return <div className='mt-5' key={index}>
                            <div className='flex flex-row'>
                              <img />
                              <div className='ml-2'>
                                <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }}>{cumRap.tenCumRap}</p>
                                <p className='text-gray-400' style={{ marginTop: 0 }}>{cumRap.tenCumRap}</p>
                              </div>
                            </div>
                          <div className='grid grid-cols-4'>
                            {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu, index) => {
                              return <NavLink to='/' key={index} className='col-span-1  text-green-600 font-bold'>
                                {moment(lichChieu.nggayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                          </div>
                          </div>
                        })}

                      </TabPane>
                    })}
                  </Tabs>
                </div>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>

          {/* 
          <Tabs tabPosition={'left'}>
            {movieDetail.heThongRapChieu?.map((htr, index) => {
              return <TabPane tab=
                {<div>
                  <img src={htr.logo} width={50} height={50} />
                  {htr.tenHeThongRap}
                </div>}
                key={index}>
                Content of Tab 1
              </TabPane>
            })}
          </Tabs> */}

        </div>
      </div>

      {/* <div className="box2">
        <div className='col-span-4'>
          <div class="c100 p50 big green">
            <span>50%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

import { Tabs } from 'antd';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom'



const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {

    state = {
        tabPosition: 'left',
    }

    // const changeTabPosition = (e) => {
    //     setState({ tabPosition: e.target.value });
    // };

    renderArrRap = () => {
        let { tabPosition } = this.state;
        return this.props.arrRap?.map((heThongRap, index) => {
            return <TabPane tab={<img src={heThongRap.logo} className='rounded-full' width="100" />} key={index}>
                {/* {heThongRap.tenHeThongRap} */}
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane
                            tab={
                                <div style={{ width:'350px', display: 'flex' }}>
                                    <img src={heThongRap.logo} className='' width="80" />
                                    <div className='ml-1'>
                                        <h1 className='text-left font-bold'>
                                            {cumRap.tenCumRap}
                                        </h1>
                                        <p style={{ display: 'flex' }}>{cumRap.diaChi}</p>
                                        {/* <p className='text-red-500 text-left'>Chi tiet</p> */}
                                    </div>

                                </div>
                            }
                            key={index}>
                            {/* load phim tuong ung */}
                            {cumRap.danhSachPhim.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5' style={{ display: 'flex' }} >
                                        <div style={{ display: 'flex' }}>
                                            <img src={phim.hinhAnh} alt={phim.tenPhim} style={{ height: 150, width: 100 }} />
                                            <div className='ml-2'>
                                                <h1 className='font-bold text-xl'>{phim.tenPhim}</h1>
                                                <div className='grid grid-cols-5 gap-6'>
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-sm text-green-400" to='/' key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}

                        </TabPane>
                    })}

                </Tabs>
            </TabPane>
        })
    }

    render() {
        const { tabPosition } = this.state;

        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    {this.renderArrRap()}
                </Tabs>
            </>
        )

    }

}

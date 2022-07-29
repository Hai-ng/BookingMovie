import React, { useEffect } from 'react' //useEffect: auto kich hoat call api
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import './HomeCarousel.css';


export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer)
    // console.log("arrImg", arrImg);

    const dispatch = useDispatch();

    useEffect(() => {
        // const action = getCarouselAction;
        // dispatch(action);

        dispatch(getCarouselAction);

        //disptach nhận vào 2 loại
        //1 Object action = ('type', data)
        //2 ( cài middleware) callBack function 

    }, [])


    const renderImg = () => {
        return arrImg.map((item, index) => {
            const contentStyle = {
                height: '600px',
                color: '#fff',
                lineHeight: '160px',
                textAlign: 'center',
                background: '#364d79',
                // backgroundSize: 'cover',
            };

            return <div key={index}>
                <div>
                    <div style={contentStyle}>
                        <img src={item.hinhAnh} className='w-full h-full' alt={item.hinhAnh} />
                    </div>
                </div>
            </div>
        })
    }

    return (
     

        <Carousel effect="fade">

            {renderImg()}     

        </Carousel>
    )
}

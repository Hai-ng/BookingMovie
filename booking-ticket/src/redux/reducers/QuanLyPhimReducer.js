
const stateDefault = {
    arrMovie: [
        {
            "maPhim": 1435,
            "tenPhim": "Mad Max: Fury Road 2",
            "biDanh": "mad-max-fury-road-2",
            "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
            "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            "maNhom": "GP02",
            "ngayKhoiChieu": "2022-05-04T10:33:02.673",
            "danhGia": 7,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        },
        {
            "maPhim": 1435,
            "tenPhim": "Mad Max: Fury Road 2",
            "biDanh": "mad-max-fury-road-2",
            "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg",
            "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            "maNhom": "GP02",
            "ngayKhoiChieu": "2022-05-04T10:33:02.673",
            "danhGia": 7,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        }
    ]
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {


        default: return { ...state }
    }
}
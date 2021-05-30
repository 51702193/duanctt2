
import { Carousel } from 'antd';
import dummy from 'data/duan.json';
import anhduan from 'data/Recidence.png';
import anhduan2 from 'data/Recidence2.png';
import { useEffect, useState } from 'react';
import './styles.scss';

const ViewDetails = () => {
    const [duan, setDuAn] = useState(dummy[0]);
    const loadData = async () => {
        const fetchData = await fetch("https://duancntt2-be.herokuapp.com/api/home",{mode: 'cors'});
        const data = await fetchData.json();
        console.log("fetch completed", data);
        setDuAn(data[0]);
    }
    useEffect(() => {
        // "https://duancntt2-be.herokuapp.com/api/home"
        loadData();
    },[]);
    
    return (
        <div className="view-details-page">
            <Carousel className="carousel-container" autoplay >
                <img className="image-carousel" src={anhduan}></img>
                <img className="image-carousel" src={anhduan2}></img>
            </Carousel>
            <section class="section novi-background section-sm section-first">
                <div class="container">
                    <div class="row row-50">
                        <div class="col-xl-8 ">
                            <ul class="list-xl">
                                <li>
                                    <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Dự án {duan.tenduan}</h1>
                                    <div className="container-detail">
                                        <div className="detail-title">Tên dự án</div><p>{duan.tenduan}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Vị trí</div><p>{duan.vitri}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Chủ đầu tư</div><p>{duan.chudautu}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Đơn vị phát triển dự án</div><p>{duan.donviphattrien}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Loại hình sản phẩm</div><p>{duan.loaihinhsanpham}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Tổng diện tích</div><p>{duan.tongdientich}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Mật độ đất ở chiếm</div><p>{duan.matdodato}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Tiện ích công cộng</div><p>{duan.tienichcongcong}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Bao gồm</div><p>{duan.baogom}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Diện tích</div><p>{duan.dientich}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Giá bán</div><p>{duan.giaban}</p>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ fontSize: 25, color: 'black', fontWeight: 600 }}>Mô tả</div>
                                    <span style={{whiteSpace: 'pre-line'}}>{duan.mota}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default ViewDetails;
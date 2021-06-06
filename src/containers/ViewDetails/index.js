import { Carousel } from 'antd';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

import anhduan from 'data/Recidence.png';
import anhduan2 from 'data/Recidence2.png';


import './styles.scss';

const ViewDetails = ({ BE_API_ROUTE }) => {
    let { id } = useParams();
    const { isLoading, data } = useFetch(`${BE_API_ROUTE.local}/tintuc/${id}`);

    if(isLoading){
        return <></>;
    }

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
                                    <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Dự án {data.tenduan}</h1>
                                    <div className="container-detail">
                                        <div className="detail-title">Tên dự án</div><p>{data.tenduan}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Vị trí</div><p>{data.vitri}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Chủ đầu tư</div><p>{data.chudautu}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Đơn vị phát triển dự án</div><p>{data.donviphattrien}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Loại hình sản phẩm</div><p>{data.loaihinhsanpham}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Tổng diện tích</div><p>{data.tongdientich}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Mật độ đất ở chiếm</div><p>{data.matdodato}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Tiện ích công cộng</div><p>{data.tienichcongcong}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Bao gồm</div><p>{data.baogom}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Diện tích</div><p>{data.dientich}</p>
                                    </div>
                                    <div className="container-detail">
                                        <div className="detail-title">Giá bán</div><p>{data.giaban}</p>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ fontSize: 25, color: 'black', fontWeight: 600 }}>Mô tả</div>
                                    <span style={{ whiteSpace: 'pre-line' }}>{data.mota}</span>
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
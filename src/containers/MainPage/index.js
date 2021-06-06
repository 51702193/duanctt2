import { Layout, Menu, Dropdown, Button, Row, Col, Carousel } from 'antd';
import useFetch from "react-fetch-hook";

import './styles.scss';

function MainPage({ BE_API_ROUTE }) {
    const { isLoading, data } = useFetch(`${BE_API_ROUTE.heroku}/tintuc`);

    const { Content } = Layout;
    const dropdownMenu = (
        <Menu>
            <Menu.Item disabled={true}>
                <a href="/view-details" className>
                    1st menu item
        </a>
            </Menu.Item>
            <Menu.Item disabled={true}>
                <a href="/view-details" className>
                    2nd menu item
        </a>
            </Menu.Item>
            <Menu.Item disabled={true}>
                <a href="/view-details" className>
                    3rd menu item
        </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Content>
            <div className="home-banner" style={{ position: 'relative' }}>
                <img alt="home-banner" src="https://storage.googleapis.com/vinhomes-data-01/3.jpg" style={{ width: '100%' }} />
                <Row gutter={16} style={{
                    position: 'absolute', left: '25%', bottom: '10%', width: '80vh', backgroundColor: 'white', padding: '20px 0px', borderRadius: '20px'
                }} className="search-banner">
                    <Col span={6}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#707070',
                            }}>Hình thức</div>
                            <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                                <Button>Chọn hình thức</Button>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#707070',
                            }}>Loại</div>
                            <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                                <Button>Chọn Loại</Button>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#707070',
                            }}>Tỉnh/Thành phố</div>
                            <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                                <Button>Chọn Tỉnh/Thành phố</Button>
                            </Dropdown>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#707070',
                            }}>Quận/Huyện</div>
                            <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                                <Button>Chọn Quận/Huyện</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>

                {/* <div className="search-banner" style={{
            position: 'absolute', left: '25%', bottom: '10%', width: '80vh', height: '100px', backgroundColor: 'white', display: 'flex'
          }}>
            < div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Hình thức</div>
              <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                <Button>Chọn hình thức</Button>
              </Dropdown>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Hình thức</div>
              <Dropdown overlay={dropdownMenu} placement="bottomCenter">
                <Button>Chọn hình thức</Button>
              </Dropdown>
            </div>
          </div> */}

            </div>

            <div className="hot-news">
                <div className="hot-news__title">DỰ ÁN MỚI NHẤT</div>
                <div className="hot-news__content">Tiên phong mang đến trải nghiệm sống lý tưởng giữa lòng đô thị với những khu dân cư được quy hoạch chuyên nghiệp, tiện ích dịch vụ đồng bộ, môi trường xanh sạch, giúp định hình phong cách sống mới cho người dân Việt Nam.</div>
                <Carousel autoplay>
                    <div className="hot-news__content__carousel">
                        {/* <h3 style={contentStyle}>1</h3> */}
                        <Row>
                            <Col span={12}>
                                <div className="slogan">Thành phố Biển hồ giữa lòng Hà Nội</div>
                                <h1 className="pj-title">VINHOMES <br /> OCEAN PARK</h1>
                                <div className="desc">Kiến tạo nên một Thành phố mới với Thiên nhiên – Cuộc sống và Con người với một diện mạo mới mẻ và tinh thần hứng khởi, sẵn sàng cho những trải nghiệm tưởng không thể mà lại là có thể.</div>
                                <a href="/view-details" className="link">KHÁM PHÁ DỰ ÁN</a>
                            </Col>
                            <Col span={12}>
                                <a href="/view-details"><img style={{ width: '100%', height: '100%' }} src="https://storage.googleapis.com/vinhomes-data-01/styles/images_870_x_530/public/2021_02/Secton 1 (Headbanner)_2.jpg?itok=XlBvEIRS" alt="VINHOMES <br> OCEAN PARK" /></a>
                            </Col>
                        </Row>
                    </div>
                    <div className="hot-news__content__carousel">
                        {/* <h3 style={contentStyle}>1</h3> */}
                        <Row>
                            <Col span={12}>
                                <div className="slogan">Thành phố Biển hồ giữa lòng Hà Nội</div>
                                <h1 className="pj-title">VINHOMES <br /> OCEAN PARK</h1>
                                <div className="desc">Kiến tạo nên một Thành phố mới với Thiên nhiên – Cuộc sống và Con người với một diện mạo mới mẻ và tinh thần hứng khởi, sẵn sàng cho những trải nghiệm tưởng không thể mà lại là có thể.</div>
                                <a href="/view-details" className="link">KHÁM PHÁ DỰ ÁN</a>
                            </Col>
                            <Col span={12}>
                                <a href="/view-details"><img style={{ width: '100%', height: '100%' }} src="https://storage.googleapis.com/vinhomes-data-01/styles/images_870_x_530/public/2021_02/Secton 1 (Headbanner)_2.jpg?itok=XlBvEIRS" alt="VINHOMES <br> OCEAN PARK" /></a>
                            </Col>
                        </Row>
                    </div>
                    <div className="hot-news__content__carousel">
                        {/* <h3 style={contentStyle}>1</h3> */}
                        <Row>
                            <Col span={12}>
                                <div className="slogan">Thành phố Biển hồ giữa lòng Hà Nội</div>
                                <h1 className="pj-title">VINHOMES <br /> OCEAN PARK</h1>
                                <div className="desc">Kiến tạo nên một Thành phố mới với Thiên nhiên – Cuộc sống và Con người với một diện mạo mới mẻ và tinh thần hứng khởi, sẵn sàng cho những trải nghiệm tưởng không thể mà lại là có thể.</div>
                                <a href="/view-details" className="link">KHÁM PHÁ DỰ ÁN</a>
                            </Col>
                            <Col span={12}>
                                <a href="/view-details"><img style={{ width: '100%', height: '100%' }} src="https://storage.googleapis.com/vinhomes-data-01/styles/images_870_x_530/public/2021_02/Secton 1 (Headbanner)_2.jpg?itok=XlBvEIRS" alt="VINHOMES <br> OCEAN PARK" /></a>
                            </Col>
                        </Row>
                    </div>
                    <div className="hot-news__content__carousel">
                        <Row>
                            <Col span={12}>
                                <div className="slogan">Thành phố Biển hồ giữa lòng Hà Nội</div>
                                <h1 className="pj-title">VINHOMES <br /> OCEAN PARK</h1>
                                <div className="desc">Kiến tạo nên một Thành phố mới với Thiên nhiên – Cuộc sống và Con người với một diện mạo mới mẻ và tinh thần hứng khởi, sẵn sàng cho những trải nghiệm tưởng không thể mà lại là có thể.</div>
                                <a href="/view-details" className="link">KHÁM PHÁ DỰ ÁN</a>
                            </Col>
                            <Col span={12}>
                                <a href="/view-details"><img style={{ width: '100%', height: '100%' }} src="https://storage.googleapis.com/vinhomes-data-01/styles/images_870_x_530/public/2021_02/Secton 1 (Headbanner)_2.jpg?itok=XlBvEIRS" alt="VINHOMES <br> OCEAN PARK" /></a>
                            </Col>
                        </Row>
                    </div>
                </Carousel>
            </div>

            <div
                className="dailynews-banner"
            >
                <div className="dailynews-banner__top">
                    <h2 className="title">Bất động sản dành cho bạn</h2>
                </div>
                <Row gutter={[16, 24]} className="dailynews-banner__body">
                    {!data ? <div style={{ fontSize: '25px', fontWeight: 600 }}>Hiện không có tin tức</div> : data.map(tintuc => {
                        const ViewDetailsUrl = `/view-details/${tintuc.id}`
                        return (
                            <Col className="home-product" span={6} key={tintuc.id}>
                                <div className="product-thumb ">
                                    <a href={ViewDetailsUrl}>
                                        <img className=" ls-is-cached lazyloaded" data-src="https://file4.batdongsan.com.vn/crop/257x147/2020/12/16/20201216114223-8f4b_wm.jpg" alt="Bán nhà phố 3 tầng, biển Bãi Dài Nha Trang, sổ hồng lâu dài, thanh toán 1 lần hoặc trả 1%/1 tháng" src="https://file4.batdongsan.com.vn/crop/257x147/2020/12/16/20201216114223-8f4b_wm.jpg" />
                                    </a>
                                </div>
                                <div className="home-product-bound">
                                    <a href={ViewDetailsUrl} className="product-title">{tintuc.tenduan}</a>
                                    <div className="product-price">{tintuc.dientich}</div>
                                    <a href="/" className="product-address">{tintuc.vitri}</a>
                                    <div className="product-date">{new Date(tintuc.created_at).toString()}</div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Content >
    );
}

export default MainPage;





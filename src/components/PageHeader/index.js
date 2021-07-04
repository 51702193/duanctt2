import React from "react";
import "antd/dist/antd.css";
import { Modal } from 'antd';
import { useSelector } from 'react-redux'

import { getUserOauth2 } from 'redux/selectors'

import GoogleSignInButton from 'components/GoogleSignInOutButton';

import 'css/style.css';
import 'css/fonts.css';
import images1 from 'images/logo-default-151x44.png';


function PageHeader() {
  const user = useSelector(getUserOauth2)

  return (
    <>
      <div className="rd-navbar-wrap">
        <nav className="rd-navbar rd-navbar-corporate rd-navbar-original rd-navbar-static" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-lg-stick-up="true" data-lg-stick-up-offset="118px" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xl-stick-up="true" data-xl-stick-up-offset="118px" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-stick-up-offset="118px" data-xxl-stick-up="true">
          <div className="rd-navbar-aside-outer">
            <div className="rd-navbar-aside">
              <div className="rd-navbar-panel">
                <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"><span></span></button>
                <a className="rd-navbar-brand" style={{ display: "inline-block" }} href='/'><img src={images1} alt="" width="151" height="44"></img></a>
              </div>
              <div className="rd-navbar-collapse">
                <button className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1 toggle-original" data-rd-navbar-toggle="#rd-navbar-collapse-content-1"><span></span></button>
                <div className="rd-navbar-collapse-content toggle-original-elements" id="rd-navbar-collapse-content-1">
                  <article className="unit align-items-center">
                    <div className="unit-left"><span className="icon novi-icon icon-md icon-modern mdi mdi-phone"></span></div>
                    <div className="unit-body">
                      <ul className="list-0">
                        <li><a className="link-default">1-800-1234-567</a></li>
                        <li><a className="link-default">1-800-8763-765</a></li>
                      </ul>
                    </div>
                  </article>
                  <article className="unit align-items-center">
                    <div className="unit-left"><span className="icon novi-icon icon-md icon-modern mdi mdi-map-marker"></span></div>
                    <div className="unit-body"><a className="link-default" >2130 Fulton Street <br></br> San Diego, CA 94117-1080</a></div>
                  </article>
                  {user?.accessToken ? <><div>Welcome, {user.ct.Ue}</div> <GoogleSignInButton /></> : <GoogleSignInButton />}
                </div>
              </div>
            </div>
          </div>
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              <div className="rd-navbar-nav-wrap toggle-original-elements" id="rd-navbar-nav-wrap-1">
                <ul className="rd-navbar-nav">
                  <li className="rd-nav-item active"><a className="rd-nav-link" href="/">Home</a>
                  </li>
                  <li className="rd-nav-item"><a className="rd-nav-link" href='/dang-tin'>Đăng tin tức</a>
                  </li>
                  <li className="rd-nav-item"><a className="rd-nav-link" href='/view-all'>Xem tất cả tin tức</a>
                  </li>
                  <li className="rd-nav-item"><a className="rd-nav-link" href='/admin'>Admin Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Modal visible={false} onOk={() => { }} onCancel={() => { }}>
        <div>Lần đầu đăng nhập</div>
        <div>Xin hãy đăng ký thành viên</div>
      </Modal>
    </>
  );
}

export default PageHeader;
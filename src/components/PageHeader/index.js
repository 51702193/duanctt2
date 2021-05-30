import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";

import { routes } from 'constants/paths';
import { Layout, Menu } from 'antd';
import { GoogleAuthProvider, useGoogleAuth } from 'components/GoogleAuth';
import GoogleSignInButton from 'components/GoogleSignInOutButton';

import 'css/style.css';
import 'css/fonts.css';
import images1 from 'images/logo-default-151x44.png';


function PageHeader() {
    const { isSignedIn, googleUser } = useGoogleAuth();
    return (
        <div class="rd-navbar-wrap">
          <nav class="rd-navbar rd-navbar-corporate rd-navbar-original rd-navbar-static" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-lg-stick-up="true" data-lg-stick-up-offset="118px" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xl-stick-up="true" data-xl-stick-up-offset="118px" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-stick-up-offset="118px" data-xxl-stick-up="true">
            <div class="rd-navbar-aside-outer">
              <div class="rd-navbar-aside">
                <div class="rd-navbar-panel">
                  <button class="rd-navbar-toggle toggle-original" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"><span></span></button>
                  <a class="rd-navbar-brand" style={{ display: "inline-block" }} href='/'><img src={images1} alt="" width="151" height="44"></img></a>
                </div>
                <div class="rd-navbar-collapse">
                  <button class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1 toggle-original" data-rd-navbar-toggle="#rd-navbar-collapse-content-1"><span></span></button>
                  <div class="rd-navbar-collapse-content toggle-original-elements" id="rd-navbar-collapse-content-1">
                    <article class="unit align-items-center">
                      <div class="unit-left"><span class="icon novi-icon icon-md icon-modern mdi mdi-phone"></span></div>
                      <div class="unit-body">
                        <ul class="list-0">
                          <li><a class="link-default">1-800-1234-567</a></li>
                          <li><a class="link-default">1-800-8763-765</a></li>
                        </ul>
                      </div>
                    </article>
                    <article class="unit align-items-center">
                      <div class="unit-left"><span class="icon novi-icon icon-md icon-modern mdi mdi-map-marker"></span></div>
                      <div class="unit-body"><a class="link-default" >2130 Fulton Street <br></br> San Diego, CA 94117-1080</a></div>
                    </article>
                    {isSignedIn ? <><div>Welcome, {googleUser.Et.Ue}</div> <GoogleSignInButton /></> : <GoogleSignInButton />}
                  </div>
                </div>
              </div>
            </div>
            <div class="rd-navbar-main-outer">
              <div class="rd-navbar-main">
                <div class="rd-navbar-nav-wrap toggle-original-elements" id="rd-navbar-nav-wrap-1">
                  <ul class="rd-navbar-nav">
                    <li class="rd-nav-item active"><a class="rd-nav-link" href="/">Home</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href='/dang-tin'>Đăng tin tức</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href='/view-details'>Thông tin chi tiết</a>
                    </li>
                    {/* <li class="rd-nav-item"><a class="rd-nav-link">Typography</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link">Contacts</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
    );
  }
  
  export default PageHeader;
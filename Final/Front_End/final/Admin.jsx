

import React from 'react';
import '../assets/css/Admin.css'; 

const Admin = () => {
    
          return (
            
                    <div>
                      <meta charSet="utf-8" />
                      <link rel="apple-touch-icon" sizes="76x76" href="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/apple-icon.png" />
                      <link rel="icon" type="image/png" href="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/favicon.ico" />
                      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                      <title>Light Bootstrap Dashboard - Free Bootstrap 4 Admin Template by Creative Tim</title>
                      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport" />
                      {/* Canonical SEO  */}
                      <link rel="canonical" href="https://www.creative-tim.com/product/light-bootstrap-dashboard" />
                      {/*  Social tags      */}
                      <meta name="keywords" content="creative tim, html dashboard, html css dashboard, web dashboard, freebie, free bootstrap dashboard, bootstrap, css3 dashboard, bootstrap admin, light bootstrap dashboard, frontend, responsive bootstrap dashboard, bootstrap 4 admin, bootstrap 4 template, bootstrap 4 dashboard, bootstrap 4, free bootstrap 4" />
                      <meta name="description" content="A bootstrap 4 admin dashboard template designed to be simple and beautiful." />
                      {/* Schema.org markup for Google+ */}
                      <meta itemProp="name" content="Light Bootstrap Dashboard - Free Bootstrap 4 Admin Template by Creative Tim" />
                      <meta itemProp="description" content="A bootstrap 4 admin dashboard template designed to be simple and beautiful." />
                      <meta itemProp="image" content="https://s3.amazonaws.com/creativetim_bucket/products/32/original/opt_lbd_thumbnail.jpg" />
                      {/* Twitter Card data */}
                      <meta name="twitter:card" content="product" />
                      <meta name="twitter:site" content="@creativetim" />
                      <meta name="twitter:title" content="Light Bootstrap Dashboard - Free Bootstrap 4 Admin Template by Creative Tim" />
                      <meta name="twitter:description" content="A bootstrap 4 admin dashboard template designed to be simple and beautiful." />
                      <meta name="twitter:creator" content="@creativetim" />
                      <meta name="twitter:image" content="https://s3.amazonaws.com/creativetim_bucket/products/32/original/opt_lbd_thumbnail.jpg" />
                      <meta name="twitter:data1" content="Light Bootstrap Dashboard - Free Bootstrap 4 Admin Template by Creative Tim" />
                      <meta name="twitter:label1" content="Product Type" />
                      <meta name="twitter:data2" content="Free" />
                      <meta name="twitter:label2" content="Price" />
                      {/* Open Graph data */}
                      <meta property="fb:app_id" content={655968634437471} />
                      <meta property="og:title" content="Light Bootstrap Dashboard - Free Bootstrap 4 Admin Template by Creative Tim" />
                      <meta property="og:type" content="article" />
                      <meta property="og:url" content="https://demos.creative-tim.com/light-bootstrap-dashboard/dashboard" />
                      <meta property="og:image" content="https://s3.amazonaws.com/creativetim_bucket/products/32/original/opt_lbd_thumbnail.jpg" />
                      <meta property="og:description" content="A bootstrap 4 admin dashboard template designed to be simple and beautiful." />
                      <meta property="og:site_name" content="Creative Tim" />
                      {/* Fonts and icons     */}
                      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
                      {/* CSS Files */}
                      <link href="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/css/bootstrap.min.css" rel="stylesheet" />
                      <link href="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/css/light-bootstrap-dashboard.css?v=2.0.1" rel="stylesheet" />
                      {/* CSS Just for demo purpose, don't include it in your project */}
                      <link href="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/css/demo.css" rel="stylesheet" />
                      {/* Google Tag Manager */}
                      {/* End Google Tag Manager */}
                      {/* Google Tag Manager (noscript) */}
                      <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"
                        height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
                      {/* End Google Tag Manager (noscript) */}
                      <div className="wrapper">
                        <div className="sidebar" data-image=".https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-5.jpg">
                          {/*
                      Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"
              
                      Tip 2: you can also add an image using data-image tag
                  */}
                          <div className="sidebar-wrapper">
                            <div className="logo">
                              <a href="https://www.creative-tim.com" className="simple-text">
                               EVENT U
                              </a>
                            </div>
                            <ul className="nav nav-mobile-menu">
                              <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                  <i className="nc-icon nc-palette" />
                                  <span className="d-lg-none">Dashboard</span>
                                </a>
                              </li>
                              <li className="dropdown nav-item">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                  <i className="nc-icon nc-planet" />
                                  <span className="notification">5</span>
                                  <span className="d-lg-none">Notification</span>
                                </a>
                                <ul className="dropdown-menu">
                                  <a className="dropdown-item" href="#">Notification 1</a>
                                  <a className="dropdown-item" href="#">Notification 2</a>
                                  <a className="dropdown-item" href="#">Notification 3</a>
                                  <a className="dropdown-item" href="#">Notification 4</a>
                                  <a className="dropdown-item" href="#">Another notification</a>
                                </ul>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  <i className="nc-icon nc-zoom-split" />
                                  <span className="d-lg-block">&nbsp;Search</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                  <span className="no-icon">Account</span>
                                </a>
                              </li>
                              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <span className="no-icon">Dropdown</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <a className="dropdown-item" href="#">Something</a>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                  <div className="divider" />
                                  <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                  <span className="no-icon">Log out</span>
                                </a>
                              </li>
                            </ul><ul className="nav">
                              <li className="nav-item active">
                                <a className="nav-link" href="dashboard.html">
                                  <i className="nc-icon nc-chart-pie-35" />
                                  <p>Dashboard</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./user.html">
                                  <i className="nc-icon nc-circle-09" />
                                  <p>Profile</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./table.html">
                                  <i className="nc-icon nc-notes" />
                                  <p>Message</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./typography.html">
                                  <i className="nc-icon nc-paper-2" />
                                  <p>Edit Events</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./icons.html">
                                  <i className="nc-icon nc-atom" />
                                  <p>Home</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./maps.html">
                                  <i className="nc-icon nc-pin-3" />
                                  <p>Maps</p>
                                </a>
                              </li>
                              <li>
                                <a className="nav-link" href="./notifications.html">
                                  <i className="nc-icon nc-bell-55" />
                                  <p>Logout</p>
                                </a>
                              </li>
                              {/* <li className="nav-item active active-pro">
                                <a className="nav-link active" href="upgrade.html">
                                  <i className="nc-icon nc-alien-33" />
                                  <p>Upgrade to PRO</p>
                                </a>
                              </li> */}
                            </ul>
                          </div>
                          <div className="sidebar-background" style={{backgroundImage: 'url(https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-5.jpg)'}} /></div>
                        <div className="main-panel" style={{paddingLeft:"250px",width:"90%"}}>
                          {/* fixed plugin  */}
                          <div className="fixed-plugin">
                            {/* <div className="dropdown show-dropdown show">
                              <a href="#" data-toggle="dropdown">
                                <i className="fa fa-cog fa-2x"> </i>
                              </a>
                              <ul className="dropdown-menu">
                                <li className="header-title"> Sidebar Style</li>
                                <li className="adjustments-line">
                                  <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Background Image</p>
                                    <label className="switch">
                                      <div className="bootstrap-switch-on bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate" style={{width: '72px'}}><div className="bootstrap-switch-container" style={{width: '122px', marginLeft: '0px'}}><span className="bootstrap-switch-handle-on bootstrap-switch-primary" style={{width: '50px'}}>ON</span><span className="bootstrap-switch-label" style={{width: '30px'}}>&nbsp;</span><span className="bootstrap-switch-handle-off bootstrap-switch-primary" style={{width: '50px'}}>OFF</span><input type="checkbox" data-toggle="switch" defaultChecked data-on-color="primary" data-off-color="primary" /></div></div>
                                      <span className="toggle" />
                                    </label>
                                    <div className="clearfix" />
                                  </a>
                                </li>
                                <li className="adjustments-line">
                                  <a href="javascript:void(0)" className="switch-trigger background-color">
                                    <p>Filters</p>
                                    <div className="pull-right">
                                      <span className="badge filter badge-black" data-color="black" />
                                      <span className="badge filter badge-azure" data-color="azure" />
                                      <span className="badge filter badge-green" data-color="green" />
                                      <span className="badge filter badge-orange" data-color="orange" />
                                      <span className="badge filter badge-red" data-color="red" />
                                      <span className="badge filter badge-purple active" data-color="purple" />
                                    </div>
                                    <div className="clearfix" />
                                  </a>
                                </li>
                                <li className="header-title">Sidebar Images</li>
                                <li className="active">
                                  <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-1.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-3.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-4.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/sidebar-5.jpg" alt="" />
                                  </a>
                                </li>
                                <li className="button-container">
                                  <div className>
                                    <a href="https://www.creative-tim.com/product/light-bootstrap-dashboard" target="_blank" className="btn btn-info btn-block btn-fill">Download, it's free!</a>
                                  </div>
                                </li>
                                <li className="button-container">
                                  <div className>
                                    <a href="https://demos.creative-tim.com/light-bootstrap-dashboard/documentation/tutorial-components.html" target="_blank" className="btn btn-default btn-block btn-fill">Viee Documentation</a>
                                  </div>
                                </li>
                                <li className="header-title pro-title text-center">Want more components?</li>
                                <li className="button-container">
                                  <div className>
                                    <a href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro" target="_blank" className="btn btn-warning btn-block btn-fill">Get The PRO Version!</a>
                                  </div>
                                </li>
                                <li className="header-title" id="sharrreTitle">Thank you for sharing!</li>
                                <li className="button-container">
                                  <button id="twitter" className="btn btn-social btn-outline btn-twitter btn-round sharrre twitter-sharrre"><i className="fa fa-twitter" /> · 256</button>
                                  <button id="facebook" className="btn btn-social btn-outline btn-facebook btn-round sharrre facebook-sharrre"><i className="fa fa-facebook-square" /> · 426</button>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                          {/* Navbar */}
                          <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
                            <div className=" container-fluid  ">
                              {/* <a className="navbar-brand" href="#pablo"> Dashboard </a>
                              <button href className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar burger-lines" />
                                <span className="navbar-toggler-bar burger-lines" />
                                <span className="navbar-toggler-bar burger-lines" />
                              </button> */}
                              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <ul className="nav navbar-nav mr-auto">
                                  {/* <li className="nav-item">
                                    <a href="#" className="nav-link" data-toggle="dropdown">
                                      <i className="nc-icon nc-palette" />
                                      <span className="d-lg-none">Dashboard</span>
                                    </a>
                                  </li>
                                  <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                      <i className="nc-icon nc-planet" />
                                      <span className="notification">5</span>
                                      <span className="d-lg-none">Notification</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                      <a className="dropdown-item" href="#">Notification 1</a>
                                      <a className="dropdown-item" href="#">Notification 2</a>
                                      <a className="dropdown-item" href="#">Notification 3</a>
                                      <a className="dropdown-item" href="#">Notification 4</a>
                                      <a className="dropdown-item" href="#">Another notification</a>
                                    </ul>
                                  </li> */}
                                  {/* <li className="nav-item">
                                    <a href="#" className="nav-link">
                                      <i className="nc-icon nc-zoom-split" />
                                      <span className="d-lg-block">&nbsp;Search</span>
                                    </a>
                                  </li>
                                </ul>
                                <ul className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                      <span className="no-icon">Account</span>
                                    </a>
                                  </li>
                                  <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <span className="no-icon">Dropdown</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                      <div className="divider" />
                                      <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                      <span className="no-icon">Log out</span>
                                    </a>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </nav>
                          {/* End Navbar */}
                          <div className="content">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="card ">
                                    <div className="card-header ">
                                      <h4 className="card-title">Email Statistics</h4>
                                      <p className="card-category">Last Campaign Performance</p>
                                    </div>
                                    <div className="card-body ">
                                      <div id="chartPreferences" className="ct-chart ct-perfect-fourth"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-pie" style={{width: '100%', height: '100%'}}><g className="ct-series ct-series-c"><path d="M31,96.5A26,26,0,0,0,14.357,102.525L31,122.5Z" className="ct-slice-pie" ct:value={11} /></g><g className="ct-series ct-series-b"><path d="M14.427,102.467A26,26,0,0,0,26.217,148.056L31,122.5Z" className="ct-slice-pie" ct:value={36} /></g><g className="ct-series ct-series-a"><path d="M26.128,148.039A26,26,0,1,0,31,96.5L31,122.5Z" className="ct-slice-pie" ct:value={53} /></g><g><text dx="43.94230553984004" dy="123.72340807314069" textAnchor="middle" className="ct-label">53%</text><text dx="18.408418905327796" dy="125.73296853314311" textAnchor="middle" className="ct-label">36%</text><text dx="26.5964070368112" dy="110.26855000359507" textAnchor="middle" className="ct-label">11%</text></g></svg></div>
                                    </div>
                                    <div className="card-footer ">
                                      <div className="legend">
                                        <i className="fa fa-circle text-info" /> Open
                                        <i className="fa fa-circle text-danger" /> Bounce
                                        <i className="fa fa-circle text-warning" /> Unsubscribe
                                      </div>
                                      <hr />
                                      <div className="stats">
                                        <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="card ">
                                    <div className="card-header ">
                                      <h4 className="card-title">Users Behavior</h4>
                                      <p className="card-category">24 Hours performance</p>
                                    </div>
                                    <div className="card-body ">
                                      <div id="chartHours" className="ct-chart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="245px" className="ct-chart-line" style={{width: '100%', height: '245px'}}><g className="ct-grids"><line y1={210} y2={210} x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="185.625" y2="185.625" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="161.25" y2="161.25" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="136.875" y2="136.875" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="112.5" y2="112.5" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="88.125" y2="88.125" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="63.75" y2="63.75" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="39.375" y2="39.375" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1={15} y2={15} x1={50} x2={51} className="ct-grid ct-vertical" /></g><g><g className="ct-series ct-series-a"><path d="M50,210L50,140.044C50.042,140.044,50.083,116.156,50.125,116.156C50.167,116.156,50.208,90.563,50.25,90.563C50.292,90.563,50.333,90.075,50.375,90.075C50.417,90.075,50.458,74.963,50.5,74.963C50.542,74.963,50.583,67.163,50.625,67.163C50.667,67.163,50.708,39.863,50.75,39.863C50.792,39.863,50.833,40.594,50.875,40.594C50.917,40.594,50.958,26.7,51,26.7C51.042,26.7,51.083,17.925,51.125,17.925C51.167,17.925,51.208,3.787,51.25,3.787C51.292,3.787,51.333,-20.1,51.375,-20.1L51.375,210Z" className="ct-area" ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" /></g><g className="ct-series ct-series-b"><path d="M50,210L50,193.669C50.042,193.669,50.083,172.95,50.125,172.95C50.167,172.95,50.208,175.144,50.25,175.144C50.292,175.144,50.333,151.5,50.375,151.5C50.417,151.5,50.458,140.044,50.5,140.044C50.542,140.044,50.583,128.344,50.625,128.344C50.667,128.344,50.708,103.969,50.75,103.969C50.792,103.969,50.833,103.481,50.875,103.481C50.917,103.481,50.958,78.619,51,78.619C51.042,78.619,51.083,77.887,51.125,77.887C51.167,77.887,51.208,77.4,51.25,77.4C51.292,77.4,51.333,52.294,51.375,52.294L51.375,210Z" className="ct-area" ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" /></g><g className="ct-series ct-series-c"><path d="M50,210L50,204.394C50.042,204.394,50.083,182.456,50.125,182.456C50.167,182.456,50.208,193.669,50.25,193.669C50.292,193.669,50.333,183.675,50.375,183.675C50.417,183.675,50.458,163.688,50.5,163.688C50.542,163.688,50.583,151.744,50.625,151.744C50.667,151.744,50.708,135.169,50.75,135.169C50.792,135.169,50.833,134.925,50.875,134.925C50.917,134.925,50.958,102.994,51,102.994C51.042,102.994,51.083,110.063,51.125,110.063C51.167,110.063,51.208,110.063,51.25,110.063C51.292,110.063,51.333,85.931,51.375,85.931L51.375,210Z" className="ct-area" ct:values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" /></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x={50} y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">9</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.125" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">1</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.25" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">3</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.375" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">6</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.5" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">9</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.625" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">1</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.75" y={215} width="0.125" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">3</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.875" y={215} width={30} height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '30px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">6</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="185.625" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="161.25" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">100</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="136.875" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">200</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="112.5" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">300</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="88.125" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">400</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="63.75" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">500</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="39.375" x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">600</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={15} x={10} height="24.375" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '24px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">700</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={-15} x={10} height={30} width={30}><span className="ct-label ct-vertical ct-start" style={{height: '30px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">800</span></foreignObject></g></svg></div>
                                    </div>
                                    <div className="card-footer ">
                                      <div className="legend">
                                        <i className="fa fa-circle text-info" /> Open
                                        <i className="fa fa-circle text-danger" /> Click
                                        <i className="fa fa-circle text-warning" /> Click Second Time
                                      </div>
                                      <hr />
                                      <div className="stats">
                                        <i className="fa fa-history" /> Updated 3 minutes ago
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="card ">
                                    <div className="card-header ">
                                      <h4 className="card-title">2017 Sales</h4>
                                      <p className="card-category">All products including Taxes</p>
                                    </div>
                                    <div className="card-body ">
                                      <div id="chartActivity" className="ct-chart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="245px" className="ct-chart-bar" style={{width: '100%', height: '245px'}}><g className="ct-grids"><line y1={210} y2={210} x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="188.33333333333334" y2="188.33333333333334" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="166.66666666666666" y2="166.66666666666666" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1={145} y2={145} x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="123.33333333333333" y2="123.33333333333333" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="101.66666666666667" y2="101.66666666666667" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1={80} y2={80} x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="58.33333333333334" y2="58.33333333333334" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1="36.66666666666666" y2="36.66666666666666" x1={50} x2={51} className="ct-grid ct-vertical" /><line y1={15} y2={15} x1={50} x2={51} className="ct-grid ct-vertical" /></g><g><g className="ct-series ct-series-a"><line x1={50} x2={50} y1={210} y2="92.56666666666666" className="ct-bar" ct:value={542} /><line x1={50} x2={50} y1={210} y2="114.01666666666667" className="ct-bar" ct:value={443} /><line x1={50} x2={50} y1={210} y2="140.66666666666669" className="ct-bar" ct:value={320} /><line x1={50} x2={50} y1={210} y2={41} className="ct-bar" ct:value={780} /><line x1={50} x2={50} y1={210} y2="90.18333333333334" className="ct-bar" ct:value={553} /><line x1={50} x2={50} y1={210} y2="111.85" className="ct-bar" ct:value={453} /><line x1={50} x2={50} y1={210} y2="139.36666666666667" className="ct-bar" ct:value={326} /><line x1={50} x2={50} y1={210} y2="115.96666666666667" className="ct-bar" ct:value={434} /><line x1={50} x2={50} y1={210} y2="86.93333333333334" className="ct-bar" ct:value={568} /><line x1={50} x2={50} y1={210} y2="77.83333333333334" className="ct-bar" ct:value={610} /><line x1={50} x2={50} y1={210} y2="46.19999999999999" className="ct-bar" ct:value={756} /><line x1={50} x2={50} y1={210} y2="16.083333333333343" className="ct-bar" ct:value={895} /></g><g className="ct-series ct-series-b"><line x1={51} x2={51} y1={210} y2="120.73333333333333" className="ct-bar" ct:value={412} /><line x1={51} x2={51} y1={210} y2="157.35" className="ct-bar" ct:value={243} /><line x1={51} x2={51} y1={210} y2="149.33333333333334" className="ct-bar" ct:value={280} /><line x1={51} x2={51} y1={210} y2="84.33333333333333" className="ct-bar" ct:value={580} /><line x1={51} x2={51} y1={210} y2="111.85" className="ct-bar" ct:value={453} /><line x1={51} x2={51} y1={210} y2="133.51666666666665" className="ct-bar" ct:value={353} /><line x1={51} x2={51} y1={210} y2={145} className="ct-bar" ct:value={300} /><line x1={51} x2={51} y1={210} y2="131.13333333333333" className="ct-bar" ct:value={364} /><line x1={51} x2={51} y1={210} y2="130.26666666666665" className="ct-bar" ct:value={368} /><line x1={51} x2={51} y1={210} y2="121.16666666666667" className="ct-bar" ct:value={410} /><line x1={51} x2={51} y1={210} y2="72.19999999999999" className="ct-bar" ct:value={636} /><line x1={51} x2={51} y1={210} y2="59.41666666666666" className="ct-bar" ct:value={695} /></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x={50} y={215} width="0.08333333333333333" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.083333333333336" y={215} width="0.08333333333333333" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">F</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.166666666666664" y={215} width="0.08333333333333334" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.25" y={215} width="0.08333333333333331" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">A</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.333333333333336" y={215} width="0.08333333333333331" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.416666666666664" y={215} width="0.08333333333333337" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.5" y={215} width="0.08333333333333326" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.583333333333336" y={215} width="0.08333333333333337" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">A</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.666666666666664" y={215} width="0.08333333333333337" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">S</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.75" y={215} width="0.08333333333333326" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">O</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.833333333333336" y={215} width="0.08333333333333337" height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '0px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">N</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="50.916666666666664" y={215} width={30} height={20}><span className="ct-label ct-horizontal ct-end" style={{width: '30px', height: '20px'}} xmlns="http://www.w3.org/1999/xhtml">D</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="188.33333333333334" x={10} height="21.666666666666668" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="166.66666666666669" x={10} height="21.666666666666668" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">100</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={145} x={10} height="21.666666666666664" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">200</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="123.33333333333333" x={10} height="21.66666666666667" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">300</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="101.66666666666667" x={10} height="21.666666666666657" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">400</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={80} x={10} height="21.66666666666667" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">500</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="58.33333333333334" x={10} height="21.666666666666657" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">600</span></foreignObject><foreignObject style={{overflow: 'visible'}} y="36.66666666666666" x={10} height="21.666666666666686" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">700</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={15} x={10} height="21.666666666666657" width={30}><span className="ct-label ct-vertical ct-start" style={{height: '22px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">800</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={-15} x={10} height={30} width={30}><span className="ct-label ct-vertical ct-start" style={{height: '30px', width: '30px'}} xmlns="http://www.w3.org/1999/xhtml">900</span></foreignObject></g></svg></div>
                                    </div>
                                    <div className="card-footer ">
                                      <div className="legend">
                                        <i className="fa fa-circle text-info" /> Tesla Model S
                                        <i className="fa fa-circle text-danger" /> BMW 5 Series
                                      </div>
                                      <hr />
                                      <div className="stats">
                                        <i className="fa fa-check" /> Data information certified
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="card  card-tasks">
                                    <div className="card-header ">
                                      <h4 className="card-title">Tasks</h4>
                                      <p className="card-category">Backend development</p>
                                    </div>
                                    <div className="card-body ">
                                      <div className="table-full-width">
                                        <table className="table">
                                          <tbody>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Sign contract for "What are conference organizers afraid of?"</td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                              </td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultChecked />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultValue />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Read "Following makes Medium better"</td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <div className="form-check">
                                                  <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" defaultValue disabled />
                                                    <span className="form-check-sign" />
                                                  </label>
                                                </div>
                                              </td>
                                              <td>Unfollow 5 enemies from twitter</td>
                                              <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title className="btn btn-info btn-simple btn-link" data-original-title="Edit Task">
                                                  <i className="fa fa-edit" />
                                                </button>
                                                <button type="button" rel="tooltip" title className="btn btn-danger btn-simple btn-link" data-original-title="Remove">
                                                  <i className="fa fa-times" />
                                                </button>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <div className="card-footer ">
                                      <hr />
                                      <div className="stats">
                                        <i className="now-ui-icons loader_refresh spin" /> Updated 3 minutes ago
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <footer className="footer">
                            <div className="container">
                              <nav>
                                <ul className="footer-menu">
                                  <li>
                                    <a href="#">
                                      Home
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Company
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Portfolio
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Blog
                                    </a>
                                  </li>
                                </ul>
                                <p className="copyright text-center">
                                  ©
                                  2018
                                  <a href="https://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                                </p>
                              </nav>
                            </div>
                          </footer>
                        </div>
                      </div>
                      {/*   Core JS Files   */}
                      {/*  Plugin for Switches, full documentation here: https://www.jque.re/plugins/version3/bootstrap.switch/ */}
                      {/*  Google Maps Plugin    */}
                      {/*  Chartist Plugin  */}
                      {/*  Share Plugin */}
                      {/*  Notifications Plugin    */}
                      {/* Control Center for Light Bootstrap Dashboard: scripts for the example pages etc */}
                      {/* Light Bootstrap Dashboard DEMO methods, don't include it in your project! */}
                    </div>
                  );
                }
             
                   
               
            

        //   );
        // }
 

export default Admin;

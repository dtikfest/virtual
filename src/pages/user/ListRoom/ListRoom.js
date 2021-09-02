import React from 'react';

function ListRoom() {
    return (
        <React.Fragment>
            <div>
                <div id="page">
                    <header className="header map_view menu_fixed">
                    <div id="preloader"><div data-loader="circle-side" /></div>{/* /Page Preload */}
                    <div id="logo">
                        <a href="index.html">
                        <img src="img/logo_sticky.png" width={150} height={36} data-retina="true" alt />
                        </a>
                    </div>
                    <ul id="top_menu">
                        <li><a href="cart-1.html" className="cart-menu-btn" title="Cart"><strong>4</strong></a></li>
                        <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li>
                        <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
                    </ul>
                    {/* /top_menu */}
                    <a href="#menu" className="btn_mobile">
                        <div className="hamburger hamburger--spin" id="hamburger">
                        <div className="hamburger-box">
                            <div className="hamburger-inner" />
                        </div>
                        </div>
                    </a>
                    <nav id="menu" className="main-menu">
                        <ul>
                        <li><span><a href="#0">Home</a></span>
                            <ul>
                            <li><a href="index.html">Home Default</a></li>
                            <li><a href="index-2.html">Home Slider</a></li>
                            <li><a href="index-3.html">Home Video BG</a></li>
                            <li><a href="index-4.html">Home Layer Slider</a></li>
                            <li><a href="index-5.html">Home Search 2</a></li>
                            <li><a href="index-10.html">Home Search 3 <strong>New!</strong></a></li>
                            <li><a href="index-7.html">Home Search 4</a></li>
                            <li><a href="index-6.html">Home GDPR (EU law)</a></li>
                            <li><a href="index-8.html">Address Autocomplete</a></li>
                            <li><a href="index-9.html">Home AirBnb</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Tours</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Tours Grid</a></span>
                                <ul>
                                <li><a href="tours-grid-isotope.html">Tours Grid Isotope</a></li>
                                <li><a href="tours-grid-sidebar.html">Tours Grid Sidebar</a></li>
                                <li><a href="tours-grid-sidebar-2.html">Tours Grid Sidebar 2</a></li>
                                <li><a href="tours-grid.html">Tours Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Tours List</a></span>
                                <ul>
                                <li><a href="tours-list-isotope.html">Tours List Isotope</a></li>
                                <li><a href="tours-list-sidebar.html">Tours List Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2.html">Tours List Sidebar 2</a></li>
                                <li><a href="tours-list.html">Tours List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="tours-half-screen-map.html">Tours Half Screen Map</a></li>
                            <li><a href="tour-detail.html">Tour Detail</a></li>
                            <li><a href="detail-working-contact-form.html">Detail Contact Form <strong>New!</strong></a></li>
                            <li>
                                <span><a href="#0">Open Street Map</a></span>
                                <ul>
                                <li><a href="tours-half-screen-map-leaflet.html">Tours Half Screen Map</a></li>
                                <li><a href="tours-list-isotope-leaflet.html">Tours Grid Isotope</a></li>
                                <li><a href="tours-list-sidebar-leaflet.html">Tours Grid Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2-leaflet.html">Tours Grid Sidebar 2</a></li>
                                <li><a href="tours-list-leaflet.html">Tours Grid Simple</a></li>
                                <li><a href="tours-list-isotope-leaflet.html">Tours List Isotope</a></li>
                                <li><a href="tours-list-sidebar-leaflet.html">Tours List Sidebar</a></li>
                                <li><a href="tours-list-sidebar-2-leaflet.html">Tours List Sidebar 2</a></li>
                                <li><a href="tours-list-leaflet.html">Tours List Simple</a></li>
                                <li><a href="tour-detail-leaflet.html">Tour Detail</a></li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Hotels</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Hotel Grid</a></span>
                                <ul>
                                <li><a href="hotels-grid-isotope.html">Hotel Grid Isotope</a></li>
                                <li><a href="hotels-grid-sidebar.html">Hotel Grid Sidebar</a></li>
                                <li><a href="hotels-grid-sidebar-2.html">Hotel Grid Sidebar 2</a></li>
                                <li><a href="hotels-grid.html">Hotel Grid Simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Hotel List</a></span>
                                <ul>
                                <li><a href="hotels-list-isotope.html">Hotel List Isotope</a></li>
                                <li><a href="hotels-list-sidebar.html">Hotel List Sidebar</a></li>
                                <li><a href="hotels-list-sidebar-2.html">Hotel List Sidebar 2</a></li>
                                <li><a href="hotels-list.html">Hotel List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="hotels-half-screen-map.html">Hotel Half Screen Map</a></li>
                            <li><a href="hotel-detail.html">Hotel Detail</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Eat &amp; Drink</a></span>
                            <ul>
                            <li>
                                <span><a href="#0">Restaurant Grid</a></span>
                                <ul>
                                <li><a href="restaurants-grid-isotope.html">Restaurant Grid Isotope</a></li>
                                <li><a href="restaurants-grid-sidebar.html">Restaurant Grid Sidebar</a></li>
                                <li><a href="restaurants-grid-sidebar-2.html">Restaurant Grid Sidebar 2</a></li>
                                <li><a href="restaurants-grid.html">Restaurant Grid simple</a></li>
                                </ul>
                            </li>
                            <li>
                                <span><a href="#0">Restaurant List</a></span>
                                <ul>
                                <li><a href="restaurants-list-isotope.html">Restaurant List Isotope</a></li>
                                <li><a href="restaurants-list-sidebar.html">Restaurant List Sidebar</a></li>
                                <li><a href="restaurants-list-sidebar-2.html">Restaurant List Sidebar 2</a></li>
                                <li><a href="restaurants-list.html">Restaurant List Simple</a></li>
                                </ul>
                            </li>
                            <li><a href="restaurants-half-screen-map.html">Half Screen Map</a></li>
                            <li><a href="restaurant-detail.html">Restaurant Detail</a></li>
                            </ul>
                        </li>
                        <li><span><a href="adventure.html">Adventure</a></span></li>
                        <li><span><a href="#0">Pages</a></span>
                            <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="media-gallery.html">Media gallery</a></li>
                            <li><a href="help.html">Help Section</a></li>
                            <li><a href="faq.html">Faq Section</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="bootstrap-modal.html">Bootstrap Modal <strong>New!</strong></a></li>
                            <li><a href="modal-version-2.html">Another Modal <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-2.html">Pricing Tables 1 <strong>New!</strong></a></li>
                            <li><a href="pricing-tables-3.html">Pricing Tables 2 <strong>New!</strong></a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Extra</a></span>
                            <ul>
                            <li><a href="menu-options.html">Menu Position Options</a></li>
                            <li><a href="tour-detail-singlemonth-datepicker.html">Single month Datepicker</a></li>
                            <li><a href="404.html">404 Error page</a></li>
                            <li><a href="cart-1.html">Cart page 1</a></li>
                            <li><a href="cart-2.html">Cart page 2</a></li>
                            <li><a href="cart-3.html">Cart page 3</a></li>
                            <li><a href="pricing-tables.html">Responsive pricing tables</a></li>
                            <li><a href="coming_soon/index.html">Coming soon</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="icon-pack-1.html">Icon pack 1</a></li>
                            <li><a href="icon-pack-2.html">Icon pack 2</a></li>
                            <li><a href="icon-pack-3.html">Icon pack 3</a></li>
                            <li><a href="icon-pack-4.html">Icon pack 4</a></li>
                            <li><a href="hamburgers.html">Animated Hamburgers</a></li>
                            </ul>
                        </li>
                        <li><span><a href="#0">Buy template</a></span></li>
                        </ul>
                    </nav>
                    </header>
                    {/* /header */}
                    <main>
                    <div className="container-fluid full-height">
                        <div className="row row-height">
                        <div className="col-lg-5 content-left order-md-last order-sm-last order-last">
                            <div id="results_map_view">
                            <div className="container-fluid">
                                <div className="row">
                                <div className="col-10">
                                    <h4><strong>145</strong> results</h4>
                                </div>
                                <div className="col-2">
                                    <a href="#0" className="search_map btn_search_map_view" /> {/* /open search panel */}
                                </div>
                                </div>
                                {/* /row */}
                                <div className="search_map_wp">
                                <div className="custom-search-input-2 map_view">
                                    <div className="form-group">
                                    <input className="form-control" type="text" placeholder="What are you looking for..." />
                                    <i className="icon_search" />
                                    </div>
                                    <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Where" />
                                    <i className="icon_pin_alt" />
                                    </div>
                                    <select className="wide">
                                    <option>All Categories</option>	
                                    <option>Shops</option>
                                    <option>Hotels</option>
                                    <option>Restaurants</option>
                                    <option>Bars</option>
                                    <option>Events</option>
                                    <option>Fitness</option>
                                    </select>
                                    <input type="submit" defaultValue="Search" />
                                </div>
                                </div>
                                {/* /search_map_wp */}
                            </div>
                            {/* /container */}
                            </div>
                            {/* /results */}
                            <div className="filters_listing version_3">
                            <div className="container-fluid">
                                <ul className="clearfix">
                                <li>
                                    <div className="switch-field">
                                    <input type="radio" id="all" name="listing_filter" defaultValue="all" defaultChecked />
                                    <label htmlFor="all">All</label>
                                    <input type="radio" id="popular" name="listing_filter" defaultValue="popular" />
                                    <label htmlFor="popular">Popular</label>
                                    <input type="radio" id="latest" name="listing_filter" defaultValue="latest" />
                                    <label htmlFor="latest">Latest</label>
                                    </div>
                                </li>
                                <li><a className="btn_filt_map" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
                                </ul>
                            </div>
                            {/* /container */}
                            </div>
                            {/* /filters */}
                            <div className="collapse map_view" id="filters">
                            <div className="container-fluid margin_30_5">
                                <h6>Category</h6>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="filter_type">
                                    <ul>
                                        <li>
                                        <label className="container_check">All <small>(945)</small>
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        </li>
                                        <li>
                                        <label className="container_check">Museums <small>(45)</small>
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        </li>
                                        <li>
                                        <label className="container_check">Churches <small>(30)</small>
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="filter_type">
                                    <ul>
                                        <li>
                                        <label className="container_check">Historic <small>(25)</small>
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        </li>
                                        <li>
                                        <label className="container_check">Walking <small>(56)</small>
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="add_bottom_30">
                                    <h6>Distance</h6>
                                    <div className="distance"> Radius around selected destination <span /> km</div>
                                    <input type="range" min={10} max={100} step={10} defaultValue={30} data-orientation="horizontal" />
                                    </div>
                                </div>
                                </div>
                                {/* /row */}
                            </div>
                            </div>
                            {/* /Filters */}
                            <div className="box_list map_view">
                            <div className="row no-gutters add_top_20">
                                <div className="col-4">
                                <figure>
                                    <small>Museum</small>
                                    <a href="tour-detail.html"><img src="img/tour_1.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                </figure>
                                </div>
                                <div className="col-8">
                                <div className="wrapper">
                                    <a href="#0" className="wish_bt" />
                                    <h3><a href="tour-detail.html">Louvre</a></h3>
                                    <span className="price">From <strong>$54</strong> /per person</span>
                                </div>
                                <ul>
                                    <li>
                                    <a href="#0" onclick="onHtmlClick('Marker',2)" className="address">On Map</a>
                                    </li>
                                    <li>
                                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* /box_list */}
                            <div className="box_list map_view">
                            <div className="row no-gutters">
                                <div className="col-4">
                                <figure>
                                    <small>Historic</small>
                                    <a href="tour-detail.html"><img src="img/tour_2.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                </figure>
                                </div>
                                <div className="col-8">
                                <div className="wrapper">
                                    <a href="#0" className="wish_bt" />
                                    <h3><a href="tour-detail.html">Madeleine</a></h3>
                                    <span className="price">From <strong>$124</strong> /per person</span>
                                </div>
                                <ul>
                                    <li>
                                    <a href="#0" onclick="onHtmlClick('Marker',11)" className="address">On Map</a>
                                    </li>
                                    <li>
                                    <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* /box_list */}
                            <div className="box_list map_view">
                            <div className="row no-gutters">
                                <div className="col-4">
                                <figure>
                                    <small>Walking</small>
                                    <a href="tour-detail.html"><img src="img/tour_3.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                </figure>
                                </div>
                                <div className="col-8">
                                <div className="wrapper">
                                    <a href="#0" className="wish_bt" />
                                    <h3><a href="tour-detail.html">St. Germain</a></h3>
                                    <span className="price">From <strong>$45</strong> /per person</span>
                                </div>
                                <ul>
                                    <li>
                                    <a href="#0" onclick="onHtmlClick('Marker',7)" className="address">On Map</a>
                                    </li>
                                    <li>
                                    <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* /box_list */}
                            <div className="box_list map_view">
                            <div className="row no-gutters">
                                <div className="col-4">
                                <figure>
                                    <small>Walking</small>
                                    <a href="tour-detail.html"><img src="img/tour_4.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                </figure>
                                </div>
                                <div className="col-8">
                                <div className="wrapper">
                                    <a href="#0" className="wish_bt" />
                                    <h3><a href="tour-detail.html">Tour Eiffel</a></h3>
                                    <span className="price">From <strong>$25</strong> /per person</span>
                                </div>
                                <ul>
                                    <li>
                                    <a href="#0" onclick="onHtmlClick('Marker',4)" className="address">On Map</a>
                                    </li>
                                    <li>
                                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* /box_list */}
                            <div className="box_list map_view">
                            <div className="row no-gutters">
                                <div className="col-4">
                                <figure>
                                    <small>Walking</small>
                                    <a href="tour-detail.html"><img src="img/tour_5.jpg" className="img-fluid" alt width={800} height={533} /></a>
                                </figure>
                                </div>
                                <div className="col-8">
                                <div className="wrapper">
                                    <a href="#0" className="wish_bt" />
                                    <h3><a href="tour-detail.html">Montparnasse</a></h3>
                                    <span className="price">From <strong>$65</strong> /per person</span>
                                </div>
                                <ul>
                                    <li>
                                    <a href="#0" onclick="onHtmlClick('Marker',5)" className="address">On Map</a>
                                    </li>
                                    <li>
                                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            {/* /box_list */}			
                            <p className="text-center add_top_30"><a href="#0" className="btn_1 rounded"><strong>Load more</strong></a></p>
                        </div>
                        {/* /content-left*/}
                        <div className="col-lg-7 map-right">
                            <div id="map" />
                            {/* map*/}
                        </div>
                        {/* /map-right*/}
                        </div>
                        {/* /row*/}
                    </div>
                    {/* /container-fluid */}	
                    </main>
                    {/*/main*/}
                </div>
                {/* page */}
                {/* Sign In Popup */}
                <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
                    <div className="small-dialog-header">
                    <h3>Sign In</h3>
                    </div>
                    <form>
                    <div className="sign-in-wrapper">
                        <a href="#0" className="social_bt facebook">Login with Facebook</a>
                        <a href="#0" className="social_bt google">Login with Google</a>
                        <div className="divider"><span>Or</span></div>
                        <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" id="email" />
                        <i className="icon_mail_alt" />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" id="password" defaultValue />
                        <i className="icon_lock_alt" />
                        </div>
                        <div className="clearfix add_bottom_15">
                        <div className="checkboxes float-left">
                            <label className="container_check">Remember me
                            <input type="checkbox" />
                            <span className="checkmark" />
                            </label>
                        </div>
                        <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                        </div>
                        <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
                        <div className="text-center">
                        Don’t have an account? <a href="register.html">Sign up</a>
                        </div>
                        <div id="forgot_pw">
                        <div className="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                            <i className="icon_mail_alt" />
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                        </div>
                    </div>
                    </form>
                    {/*form */}
                </div>
            </div>
        </React.Fragment>
    );
}


    //External Link JS
    document.writeln("<script type='text/javascript' src='assets/js/common_scripts.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/main.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/assets/validate.js'></script>");
    document.writeln("<script type='text/javascript' src='http://maps.googleapis.com/maps/api/js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/markerclusterer.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/map_tours_half_screen.js'></script>");
    document.writeln("<script type='text/javascript' src='assets/js/infobox.js'></script>");
 

export default ListRoom;
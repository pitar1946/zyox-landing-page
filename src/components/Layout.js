import React, { Component } from 'react';


class Layout extends Component {
  render() {
    return (
      <header className="header text-center text-white d-flex">
       <div className="container my-auto">
        <div className="row">
        <div className="col-lg-10 mx-auto mb-5">
        <h1>
        <strong>We design thoughtful, livable spaces.</strong>
         </h1>
        </div>
        <div className="col-lg-8 mx-auto">
         <a className="btn btn-primary btn-xl js-scroll-trigger mt-5" href="mailto:youremailaddress">Contact</a>
        </div>
       </div>
      </div>
     </header>
    );
  }
}

export default Layout;

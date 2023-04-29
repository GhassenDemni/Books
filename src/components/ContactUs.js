import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns2">
            <p className="lead">
              Contactez-moi pour toute question ou collaboration future
            </p>
            <button className="email-table ">
              <a href="mailto:ghassendemni474@gmail.com">Email</a>
            </button>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              {/* <h4>Linked in :{resumeData.linkedinId}</h4> */}
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

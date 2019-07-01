import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap" onClick={()=>{window.location = `${item.githublink}`}}>
                    {/* <a href={`${item.link}`}> */}
                      <img src={`${item.imgurl}`} className="item-img" 
                        style={{"width": "100%", 
                                "height": "170px"}}/>
                      <div className="overlay" style={{"cursor": "pointer"}}>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
	let {title, description, imageUrl, newsUrl} = this.props;
	return (
	  <div className="my-4">
		<div className="card" style={{width: "18rem"}}>
			<img src={imageUrl ?imageUrl :"https://thumbs.dreamstime.com/b/news-42301371.jpg"} className="card-img-top" alt="Not available" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read more</a>
			</div>
		</div>
	  </div>
	)
  }
}

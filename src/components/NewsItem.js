import React from 'react'

export default function NewsItem(props) {
	return (
	  <div className="my-4">
		<div className="card" style={{width: "18rem"}}>
			<img src={props.imageUrl ?props.imageUrl :"https://thumbs.dreamstime.com/b/news-42301371.jpg"} className="card-img-top" alt="Not available" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a rel="noreferrer" href={props.newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read more</a>
			</div>
		</div>
	  </div>
	)
}
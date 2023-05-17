import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'

export default class News extends Component {

	static defaultProps = 
	{
		pageSize : 6,
		country : "in",
		category : "general"
	}
	static propTypes = 
	{
		pageSize : PropTypes.number,
		country : PropTypes.string,
		category : PropTypes.string
	}
	// In this particular example, the articles array is initially defined as a class property outside the component's state. If you were to directly use this.articles.map() in the render() method, any changes to articles would not trigger a re-render of the component. This means that if the articles array were to be updated dynamically (e.g., fetching new articles from an API), the component would not reflect those changes in the UI

	constructor()
	{
		super();
		this.state = {
			articles : [],
			loading : false,
			page : 1
		};

		//To access the state objects in a user defined method, you can either bind the method to this explicitly in the constructor(as done here) or convert it into an arrow function
		this.getNews = this.getNews.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePrevClick = this.handlePrevClick.bind(this);
	}
	async getNews(offset)
	{
		this.setState({loading : true});
		let url = `https://newsapi.org/v2/top-headlines?apiKey=04eaa632340142b4ae8e0081ce868ede&country=${this.props.country}&category=${this.props.category}&page=${this.state.page + offset}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({	articles : parsedData.articles, 
						page : this.state.page + offset,
						loading : false
					 });
	}
	async componentDidMount() //cdm runs after render() is called, so data is populated on 2nd render of page
	{
		this.getNews(0);
	}
	handleNextClick()
	{
		this.getNews(1);
	}
	handlePrevClick()
	{
		this.getNews(-1);
	}
	populateEle(element) 
	{
		//element describes each element of articles array
		return (
		//key should be unique for each element so we choose url as key
		<div className="col-md-4" key={element.url}>
			<NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
		</div>
		)
	}

  render() { //We cannot modify states inside render(), it is a pure method
	return (
	  <div className="container my-4">
		<h2>NewsMonkey- Top headlines!</h2>
		{this.state.loading && <Loader/>}

		<div className="row">
			{!this.state.loading &&
				this.state.articles.map((element) => { return this.populateEle(element)} )
				//For every element of articles array, call populateEle()
				//By assigning this.articles to this.state.articles, the initial articles are made accessible within the component as this.state.articles. This allows the component to access and manipulate the articles using this.state.articles.
  			}
		</div>
		<div className="container d-flex justify-content-between">
			<button disabled = {this.state.page <=1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
			<button disabled = {this.state.articles.length === 0} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick} >Next &rarr;</button>
		</div>
	  </div>
	)
  }
}

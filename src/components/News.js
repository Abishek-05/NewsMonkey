import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) 
{
	const [articles, setArticles] = useState([]);

	let totalResults = 40;
	let idx = 0; //acts as unique key for each element in populateEle()

	async function getNews()
	{
		props.setProgress(10); //Loading bar
		let url = `https://gnews.io/api/v4/top-headlines?apikey=c7f999d87e9dcf0d2851cf6450794afd&language=en&country=${props.country}&category=${props.category}&max=${props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();

		setArticles(articles.concat(parsedData.articles));
		props.setProgress(100);
	}
	useEffect( () => {
		getNews(); //eslint-disable-next-line
	},[]);

	async function fetchMoreData()
	{
		getNews();
	}
	function populateEle(element)
	{
		return (
		<div className="col-md-4" key={idx++}>
			<NewsItem title = {element.title} description = {element.description} imageUrl = {element.image} newsUrl = {element.url}/>
		</div>
		)
	}
	return ( //We cannot modify states inside render(), it is a pure method
		<div style={{marginTop:'80px'}}>
			<h2 className="text-center my-3">NewsMonkey- Top headlines!</h2>
			<InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loader/>} >
				<div className="container my-2">
					<div className="row">
						{ articles.map((element) => { return populateEle(element)} ) }
					</div>
				</div>
			</InfiniteScroll>
		</div>
	)
}
News.defaultProps = {
	pageSize : 10,
	country : "in",
	category : "general"
}
News.propTypes = {
	pageSize : PropTypes.number,
	country : PropTypes.string,
	category : PropTypes.string
}
import React from 'react';
import Article from '../components/article/Article'
import Burger from '../components/Nav/Burger';
import Footer from '../components/footer/Footer'
import useFetch from '../hooks/useFetch';
import SVGLoader from '../components/icon/SVGLoader';
import { NewsContainerStyled } from '../styles/newsContainer';

const API_URL = 'https://saurav.tech/NewsAPI/';
const businesses = 'top-headlines/category/business/us.json'

const Business = () => {
    const { loading, data: news } = useFetch(
        `${API_URL}${businesses}`
    );

    if (loading) {
        return <SVGLoader />
    }

    return (
        <>
            <Burger />
            <NewsContainerStyled>
                {news?.articles.map((article) => (
                    <Article key={article.title} urlToImage={article.urlToImage} title={article.title} description={article.description} url={article.url}
                    />
                ))}
            </NewsContainerStyled>
            <Footer />
        </>
    );
};

export default Business;
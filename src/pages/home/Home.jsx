import React from 'react';
import Article from '../../components/article/Article'
import Heading from '../../components/heading/Heading'
import Burger from '../../components/Nav/Burger';
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch';
import SVGLoader from '../../components/icon/SVGLoader';
import { NewsContainerStyled } from '../../styles/newsContainer';

const API_URL = 'https://saurav.tech/NewsAPI/';
const everything = 'everything/cnn.json';

const Home = () => {
    const { loading, data: news } = useFetch(
        `${API_URL}${everything}`
    );

    if (loading) {
        return <SVGLoader />
    }

    return (
        <>
            <Burger />
            <Heading />
            <NewsContainerStyled>
                {news?.articles.slice(0, 4).map((article) => (
                    <Article key={article.title} urlToImage={article.urlToImage} title={article.title} description={article.description} url={article.url} />
                ))}
            </NewsContainerStyled>
            <Footer />
        </>
    );
};

export default Home;

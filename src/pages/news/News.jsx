import React, { useState } from "react";
import Article from "../../components/article/Article";
import useFetch from "../../hooks/useFetch";
import Burger from "../../components/Nav/Burger";
import SVGLoader from "../../components/icon/SVGLoader";
import styled from "styled-components";
import "./news.css";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const API_URL = "https://saurav.tech/NewsAPI/";
const everything = "everything/cnn.json";

const News = () => {
    const [searchWord, setSearchWord] = useState("");
    const { loading, data: news } = useFetch(`${API_URL}${everything}`);

    if (loading) {
        return <SVGLoader />
    }

    return (
        <>
            <Burger />
            <div className="wrap">
                <div className="search">
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => {
                                setSearchWord(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <StyledContainer>
                {news?.articles
                    .filter((val) => {
                        if (searchWord === "") {
                            return val;
                        } else if (
                            val.title.toLowerCase().includes(searchWord.toLowerCase())
                        ) {
                            return val;
                        }
                        return false;
                    })
                    .map((article) => (
                        <Article
                            articleRow
                            key={article.title}
                            urlToImage={article.urlToImage}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                        />
                    ))}
            </StyledContainer>
        </>
    );
};

export default News;

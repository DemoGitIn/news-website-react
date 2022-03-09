import React from 'react';
import './article.css';

const Article = ({ articleRow, urlToImage, title, description, url }) => {
    return (
        <div>
            <div className={`${articleRow  ? 'articleRow' : ''} article`}>      
                <div className="img"><img src={urlToImage} alt="" /></div>
                <div className="article-info">
                    <h2 className="article-title">{title}</h2>
                    <h3 className="article-description">{description}</h3>
                    <a className="article-body" href={url}>
                        {url}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Article;
import React,{useState} from 'react';
import renderHTML from 'react-render-html';

const ReadingPage=(props)=>{
    const article=props.location.state;
    return(
        <div className="container">
            <div className="wrap-articles">
                <h1>{renderHTML(article.titre)}</h1>
                <div className="article-contenu">
                {renderHTML(article.contenu)}
                </div>
                <div className="comments">
                </div>
            </div>
            <div className="sidebar-content">
                <div className="content">
                    <h2>Sidebar content</h2>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    )
}
export default ReadingPage;
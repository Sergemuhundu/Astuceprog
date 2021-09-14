import React,{useState, Fragment, useEffect} from 'react';
import firebase from '../tools/Config';
import {Link} from 'react-router-dom';
import {posts} from "../Assets/post";
import pcImg from "../Assets/pc.jpg";
import renderHTML from 'react-render-html';

const BlogPage=()=>{
    const [articles, setArticles]=useState();


    useEffect(()=>{
        //readArticles();
        setArticles(posts);
    },[]);

    const readArticles= async () =>{
        var articleList=[];
        var snapshot= await firebase.firestore()
        .collection('Articles')
        .get()
      
            snapshot.forEach((doc)=>{
            articleList.push(doc.data());
          })
    
          setArticles(articleList);
        console.log(articleList);
    }
    function showArticles(){
        if(articles==undefined){
            return(
                <h4>Veillez patienter...</h4>
            )
        }
        else{
            return(
                articles.map((item)=>(
                    <Fragment>
                        <Link  to={{
                    pathname: "/Blog/"+item.titre, state:item}} >
                    <div className="card mb-3" style="max-width: 540px;" style={{float : 'left', paddingRight : '5px', margin : '20px'}}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={pcImg} alt="..." width="80" height="40"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h3 className="card-title">{item.titre}</h3>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  </Fragment>
                )

                )
            )

        }
    }
    return(
        <div className="container">
            <div className="sous-container">
            <div className="wrap-articles">
                
            {showArticles()}
            </div>
            <div className="sidebar-content">
                <div className="content">
                    <h2>Sidebar content</h2>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                    <p>le contenu du sidebar</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default BlogPage;
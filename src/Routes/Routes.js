import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from '../Components/Auth/Signin';
import EditorScreen from '../Components/Admin/Editor/Editor';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import HomePage from "../Components/HomePage";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";
import Header from "../Components/Header";
import BlogPage from "../Components/BlogPage";
import NotFound from "../Components/NotFound";
import ReadingPage from "../Components/Reading";
import Footer from "../Components/Footer";
import Main from "../Components/Admin/main/Main";
import Signup from "../Components/Auth/Signup";

function Routes() {
    return (
<Fragment>
  <Header/>
  <Switch>
  <Route path='/' exact component={HomePage}/>
  <Route exact path='/Contacts' component={ContactPage} />
  <Route exact path='/Services' component={Services} />
  <Route exact path='/Blog' component={BlogPage}/>
  <Route exact path='/Blog/:titre' component={ReadingPage}/>
  <Route exact path='/Admin/Panel' component={AdminDashboard}/>
  <Route exact path='/Signin' component={Signin}/>
  <Route exact path="/Signup" component={Signup}/>
  <Route component={NotFound}/>
  </Switch>
  <Footer/>
</Fragment>


    );
  }

  export default Routes;
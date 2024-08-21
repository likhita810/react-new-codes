import React from 'react'
import ChildComp from './Comp/ChildComp';
import Comp from './Algolia/Comp';
import ContactManager from './contact-manager/Comp';
import ApiCall from './ApiCall.js';
import ClothingCategory from './clothing-electronic/ClothingCategory.js';
import ElectronicCategory from './clothing-electronic/ElectronicCategory.js';
import ImgSearchApi from './ImgSearchApi.js';
import clothing from './clothing-electronic/clothing.js';
import productDetails from './clothing-electronic/electronic.js'
import LifeCycleMethods from './Components/LifeCycleMethod';
import PureComp from './Components/PureComp'
import StateDemo from './Components/StateDemo.js'
import RootComp from './Components/RootComp.js';
import ToDoComp from './to-do-app/ToDoComp.js';
import FormElements from './FormExamples/FormElement.js';
import {BrowserRouter, Link,NavLink, Route, Routes} from 'react-router-dom'
import SignInComp from './FormExamples/SignInComp.js';
import AfterSubmit from './FormExamples/AfterSubmit.js';
import Board from './ScoreBoard.js/Board.js';
import RankSort from './ScoreBoard.js/RankSort.js';
import AgeSort from './ScoreBoard.js/AgeSort.js';
import ScoreSort from './ScoreBoard.js/ScoreSort.js';
import './ScoreBoard.js/board.css'
import NameSort from './ScoreBoard.js/NameSort.js';
import LoginPage from './NestedRoutes/LoginPage.js';
import DashBoardComp from './NestedRoutes/DashBoardComp.js';
import UserPage from './NestedRoutes/UserPage.js';
import PageNotFound from './NestedRoutes/PageNotFound.js';
import LoginPageFunc from './RouterHooks/LoginPageFunc.js';
import DashBoardHooks from './RouterHooks/DashBoardHooks.js';
import InvalidUsername from './RouterHooks/Invalid.js';
import Dashbrd from './RouterHooks-LocalHost/Dashbrd.js';
import LoginPg from './RouterHooks-LocalHost/LogInPg.js';
import SignInFunc from './RouterHooks-LocalHost/SignInFunc.js';
// import PageNotFnd from './RouterHooks-LocalHost/PageNotFnd.js'

function App() {
  return (
    <div className="App">
      {/* <ChildComp></ChildComp> */}
      {/* <Comp></Comp> */}
      {/* <ContactManager></ContactManager> */}

      {/* <ClothingCategory data={clothing}></ClothingCategory>
      <p>-------------------------------------------------------------------------------</p>
      <ElectronicCategory data={productDetails}></ElectronicCategory> */}

      {/* <ApiCall></ApiCall> */}

      {/* <ImgSearchApi></ImgSearchApi> */}

      {/* <LifeCycleMethods msg='value from dsp method'></LifeCycleMethods> */}
      {/* <PureComp></PureComp> */}
      {/* <StateDemo></StateDemo> */}
      {/* <RootComp></RootComp> */}
      {/* <ToDoComp></ToDoComp> */}

      {/* <FormElements></FormElements> */}
      {/* <SignInComp></SignInComp> */}
      {/* <AfterSubmit></AfterSubmit> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Board></Board>}></Route>
          <Route path='/rank' element={<RankSort></RankSort>}></Route>
          <Route path='/name' element={<NameSort></NameSort>}></Route>
          <Route path='/age' element={<AgeSort></AgeSort>}></Route>
          <Route path='/points' element={<ScoreSort></ScoreSort>}></Route>

        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>

        <Routes>
          <Route path='/' element={<UserPage></UserPage>}>
            <Route path='login' element={<LoginPage></LoginPage>}></Route>
            <Route path='dashboard' element={<DashBoardComp userData = {{userName: 'likhi', role: 'sde'}}></DashBoardComp>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

      </BrowserRouter> */}

      {/* <BrowserRouter>

        <NavLink to='/'>
          {
            ({isActive})=>
            (
              <button className={isActive?'activeStatus':'.inActiveStatus'}>Login</button>
            )
          }
        </NavLink>

        <NavLink to='/dashboard/:username/:role'>
          {
            ({isActive})=>
            (
              <button className={isActive?'activeStatus':'.inActiveStatus'}>dashboard</button>
            )
          }
        </NavLink>

        <Routes>
          <Route path='/' element={<LoginPageFunc></LoginPageFunc>}></Route>
          <Route path='/dashboard/:username/:role' element={<DashBoardHooks></DashBoardHooks>}></Route>
          <Route path='/*' element={<InvalidUsername></InvalidUsername>}></Route>
        </Routes>

      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPg></LoginPg>}></Route>
          <Route path='/dashboard/:username/:role' element={<Dashbrd></Dashbrd>}></Route>
          <Route path='/signin' element={<SignInFunc></SignInFunc>}></Route>
          {/* <Route path='/notfound' element={<PageNotFnd></PageNotFnd>}></Route> */}
        </Routes>

      </BrowserRouter>    

    </div>
  );
}

export default App;

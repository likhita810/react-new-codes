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
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import SignInComp from './FormExamples/SignInComp.js';
import AfterSubmit from './FormExamples/AfterSubmit.js';


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
      <AfterSubmit></AfterSubmit>
    </div>
  );
}

export default App;

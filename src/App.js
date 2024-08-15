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
import MainComp from './to-do-app-hoc/Main.js';
import LifeCycleMethods from './Components/LifeCycleMethod';
import PureComp from './Components/PureComp'
import StateDemo from './Components/StateDemo.js'
import RootComp from './Components/RootComp.js';
import ToDoComp from './to-do-app/ToDoComp.js';


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

      {/* <MainComp></MainComp> */}

      {/* <LifeCycleMethods msg='value from dsp method'></LifeCycleMethods> */}
      {/* <PureComp></PureComp> */}
      {/* <StateDemo></StateDemo> */}
      {/* <RootComp></RootComp> */}
      <ToDoComp></ToDoComp>
    </div>
  );
}

export default App;

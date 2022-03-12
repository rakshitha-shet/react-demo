import { FunCmp } from "./Demo/FunCmp";
import ClsCmp from "./Demo/ClsCmp";
import Visitor from "./Demo/Visitor";
import Counter from "./Demo/Counter";
import FunEvent from "./Demo/FunEvent";
import ClsEvent from "./Demo/ClsEvent";
import Parent from "./ParentChild/Parent";
import Style from "./Style";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCouter";
import CC from "./RenderProps/CC";
import HC from "./RenderProps/HC";
import Count from "./RenderProps/Count";
import PostList from "./HTTP/PostList";
import { UState }  from "./Hooks/uState";
import { UEffect } from "./Hooks/UEffect";
import PostEffect from "./HTTP/PostEffect";
import OnePost from "./HTTP/OnePost";
import C from "./Context/C";
import UReducer from "./Hooks/UReducer";

function App() {
  return (
   <> 
   <OnePost/>
   <C/>
  <UReducer/>
    <FunCmp name="function component"/>
    <ClsCmp name="class component" />
    <Visitor/>
    <Counter step={5}/>
    <FunEvent/>
    <ClsEvent/>
    <hr/>
    <Parent/>
    <hr/>
    <Style pop={"primary"}/>
    <hr/>
    <ClickCounter name="pop"/>
    <HoverCounter age="10"/>
    <hr/>
    <UState/>
    <UEffect/>
    <hr/>
    {/* <CC/>
    <HC/> */}
    <Count render={(count, incCount) => (<CC count={count} incCount={incCount}/>)}/> 
    <Count render={(count, incCount) => (<HC count={count} incCount={incCount}/>)}/> 
    <hr/>
    <PostList/>
    <hr/>
    <PostEffect/>
   </>
  );
}

export default App;

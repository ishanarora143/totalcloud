(window.webpackJsonptotalcloud=window.webpackJsonptotalcloud||[]).push([[0],{44:function(e,t,a){e.exports=a(66)},49:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},51:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),o=a.n(r),c=(a(49),a(50),a(51),a(26)),i=a(17),l=a(18),m=a(20),u=a(19),h=a(21),p=a(80),g=a(79),f=a(4),d=a(81),k=a(82),E=a(83),b=a(84),v=a(86),y=a(85),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onListClick=function(e){a.setState({index:e},(function(){}))},a.state={index:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{xs:12,lg:5,md:5},s.a.createElement(p.a,{className:t.paper},s.a.createElement(d.a,{className:t.root},this.props.items.map((function(t,a){return a==e.state.index?s.a.createElement(k.a,{key:a,onClick:function(){return e.onListClick(a)},button:!0,style:{backgroundColor:"grey"}},s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement("img",{src:t.image}))),s.a.createElement(v.a,{primary:t.name})):s.a.createElement(k.a,{key:a,onClick:function(){return e.onListClick(a)},button:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement("img",{src:t.image}))),s.a.createElement(v.a,{primary:t.name}))}))))),s.a.createElement(g.a,{xs:6,lg:1,md:1,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement(y.a,{style:{backgroundColor:"#1e88e5"},onClick:function(){return e.props.onListClick(e.state.index)}},"Invoke")))}}]),t}(n.Component),j=Object(f.a)((function(e){return{paper:{marginTop:"10vh",marginBottom:"10vh",marginLeft:"10%",marginRight:"10%",height:"50vh",overflowY:"scroll"}}}))(C),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onListClick2=function(e){a.setState({index:e},(function(){console.log(a.state.index)}))},a.state={index:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{xs:6,lg:1,md:1,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement(y.a,{style:{backgroundColor:"#1e88e5"},onClick:function(){return e.props.onListClick2(e.state.index)}},"Revoke")),s.a.createElement(g.a,{xs:12,lg:5,md:5},s.a.createElement(p.a,{className:t.paper},s.a.createElement(d.a,{className:t.root},this.props.items.map((function(t,a){return a==e.state.index?s.a.createElement(k.a,{key:a,onClick:function(){return e.onListClick2(a)},button:!0,style:{backgroundColor:"grey"}},s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement("img",{src:t.image}))),s.a.createElement(v.a,{primary:t.name})):s.a.createElement(k.a,{key:a,onClick:function(){return e.onListClick2(a)},button:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement("img",{src:t.image}))),s.a.createElement(v.a,{primary:t.name}))}))))))}}]),t}(n.Component),O=Object(f.a)((function(e){return{paper:{height:"50vh",marginTop:"10vh",marginBottom:"10vh",marginLeft:"10%",marginRight:"10%",overflowY:"scroll"}}}))(w),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onListClick=function(e){var t=e;e>=a.state.A.length&&(t=0),a.state.A.length<1?window.alert("There are no more resources to allocate"):(console.log(e),null!=t?a.setState({B:[].concat(Object(c.a)(a.state.B),[a.state.A[t]])},(function(){a.state.A.splice(t,1),a.setState({A:a.state.A})})):(t=0,a.setState({B:[].concat(Object(c.a)(a.state.B),[a.state.A[t]])},(function(){a.state.A.splice(t,1),a.setState({A:a.state.A})}))))},a.onListClick2=function(e){var t=e;e>=a.state.B.length&&(t=0),a.state.B.length<1?window.alert("there are no more resources to un-allocate"):null!=t?a.setState({A:[].concat(Object(c.a)(a.state.A),[a.state.B[t]])},(function(){a.state.B.splice(t,1),a.setState({B:a.state.B})})):(t=0,a.setState({A:[].concat(Object(c.a)(a.state.A),[a.state.B[t]])},(function(){a.state.B.splice(t,1),a.setState({B:a.state.B})})))},a.state={A:[{name:"ishan",image:"https://source.unsplash.com/user/ishan"},{name:"piyush",image:"https://source.unsplash.com/user/piyush"},{name:"raman",image:"https://source.unsplash.com/user/erondu"},{name:"sonaksh",image:"https://source.unsplash.com/user/john"},{name:"hritik",image:"https://source.unsplash.com/user/tom"},{name:"roshan",image:"https://source.unsplash.com/user/ishan"},{name:"kunal",image:"https://source.unsplash.com/user/piyush"},{name:"bheji",image:"https://source.unsplash.com/user/erondu"},{name:"monaksh",image:"https://source.unsplash.com/user/john"},{name:"tarun",image:"https://source.unsplash.com/user/tom"}],B:[{name:"daspa",image:"https://source.unsplash.com/user/ishan"},{name:"rawat",image:"https://source.unsplash.com/user/piyush"},{name:"negi",image:"https://source.unsplash.com/user/raman"},{name:"mayank",image:"https://source.unsplash.com/user/john"},{name:"phantom",image:"https://source.unsplash.com/user/rhino"}]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{style:{backgroundImage:"linear-gradient(to bottom right, blue, white)",paddingTop:"5vh",paddingBottom:"2vh"}},s.a.createElement("h1",{style:{color:"white",fontFamily:"italic"}},"Resource Allocator"),s.a.createElement(p.a,{className:e.paper},s.a.createElement(g.a,{container:!0},s.a.createElement(g.a,{xs:12,lg:12,md:12,container:!0},s.a.createElement(j,{items:this.state.A,onListClick:this.onListClick}),s.a.createElement(O,{items:this.state.B,onListClick2:this.onListClick2})))))}}]),t}(n.Component),x=Object(f.a)((function(e){return{paper:{height:"70%",width:"90%",marginLeft:"auto",marginRight:"auto",marginTop:"15vh"}}}))(B);var A=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.141c8986.chunk.js.map
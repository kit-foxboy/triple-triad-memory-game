(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(28)},16:function(e,t,r){},26:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(7),s=r.n(c),o=(r(16),r(2)),i=r(8),l=r(4),d=r(3),u=r(5),p=r(9),m=r.n(p);var g=function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,e.message),n.a.createElement("h2",null,"Current Score: ",e.currentScore),n.a.createElement("h2",null,"Top Score: ",e.topScore))},h=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(r=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={hasBeenClicked:!1},r.render=function(){return n.a.createElement("div",{className:"card",onClick:function(){return r.clickCard(r.props.onClick)}},n.a.createElement("img",{src:r.props.cardName,alt:r.props.cardName.replace(".png","")+" card"}))},r.clickCard=function(e){r.setState({hasBeenClicked:!r.state.hasBeenClicked}),e(r.state.hasBeenClicked)},r}return Object(u.a)(t,e),t}(a.Component),f=(r(26),function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(r=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={message:"Click to Start",currentScore:0,topScore:0,cards:[]},r.render=function(){return n.a.createElement("div",null,n.a.createElement(g,{message:r.state.message,currentScore:r.state.currentScore,topScore:r.state.topScore}),r.state.cards.map(function(e){return e}))},r.cardClickHandler=function(e){var t=e?0:r.state.currentScore+1,a=t>r.state.topScore?t:r.state.topScore;r.setState({message:e?"Incorrect! You lose...":"Correct!",currentScore:t,topScore:a,cards:e?r.renderCards():r.shuffleArray(r.state.cards)})},r.renderCards=function(){for(var e=[],t=0;t<r.props.images.length;t++)e.push(n.a.createElement(h,{key:m.a.generate(),cardName:r.props.images[t],onClick:r.cardClickHandler}));return e},r.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*t),a=e[t];e[t]=e[r],e[r]=a}return e},r}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({message:this.state.message,currentScore:this.state.currentScore,topScore:this.state.topScore,cards:this.renderCards()})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,{images:["images/cards/aerith.png","images/cards/barret.png","images/cards/cait.png","images/cards/choco.png","images/cards/cid.png","images/cards/cloud.png","images/cards/red.png","images/cards/seph.png","images/cards/squall.png","images/cards/tifa.png","images/cards/vincent.png","images/cards/yuffie.png"]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.1404046a.chunk.js.map
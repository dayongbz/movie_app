(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),s=(n(19),n(8)),c=n(1),l=n.n(c),m=n(7),u=n(2),d=n(3),v=n(5),p=n(4),h=n(6),g=(n(21),n(11)),f=n.n(g),_=n(12),w=n.n(_),E=(n(26),function(e){function t(){return Object(u.a)(this,t),Object(v.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.poster,a=e.genres,i=e.synopsis,o=e.rating+1;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Rating"},o),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(b,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(M,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(w.a,{text:i,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}}]),t}(a.Component));function b(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,className:"Movie__Poster"})}function M(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},"#",t)}M.prototype={genres:f.a.string.isRequired};var y=E,j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={page:1,adding:!1},n._infiniteScroll=function(){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);Math.max(document.documentElement.scrollTop,document.body.scrollTop)+document.documentElement.offsetHeight>=e&&n._addMovies()},n._getMovies=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi(n.state.page);case 2:t=e.sent,n.setState({movies:t,page:n.state.page+1});case 4:case"end":return e.stop()}},e)})),n._callApi=function(e){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count&limit=10&page="+e).then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e,t){return r.a.createElement(y,{title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id,rating:t})})},n._addMovies=Object(m.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.adding){e.next=4;break}return e.abrupt("return",alert("\ubd88\ub7ec\uc624\ub294 \uc911 \uc785\ub2c8\ub2e4."));case 4:return n.setState({adding:!n.state.adding}),e.next=7,n._callApi(n.state.page);case 7:t=e.sent,n.setState({movies:[].concat(Object(s.a)(n.state.movies),Object(s.a)(t)),page:n.state.page+1}),n.setState({adding:!n.state.adding});case 10:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.movies?"App":"App-loading"},this.state.movies?this._renderMovies():"Loading",this.state.movies?r.a.createElement("div",{className:"change",onClick:this._addMovies},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"white"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))):"")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.c7244777.chunk.js.map
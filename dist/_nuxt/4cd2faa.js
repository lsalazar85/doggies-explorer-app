(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{268:function(t,n,e){"use strict";e.r(n);e(26),e(23),e(30);var r=e(1),o=e(192),c=Object(r.c)({__name:"CardDescription",setup:function(t){var n={isLoading:Object(r.a)((function(){return o.store.state.nft.isLoading})),thumbnail:Object(r.a)((function(){return o.store.state.nft.data.thumbnail})),name:Object(r.a)((function(){return o.store.state.nft.data.name})),description:Object(r.a)((function(){return o.store.state.nft.data.description})),listOfTraits:Object(r.a)((function(){return o.store.state.nft.data.listOfTraits})),owner:Object(r.a)((function(){return o.store.state.nft.data.owner}))};return{__sfc:!0,description:n.description,thumbnail:n.thumbnail,name:n.name,isLoading:n.isLoading,listOfTraits:n.listOfTraits,owner:n.owner}}}),f=e(45),component=Object(f.a)(c,(function(){var t=this,n=t._self._c,e=t._self._setupProxy;return e.isLoading,n("div",[n("p",[t._v(t._s(e.owner))]),t._v(" "),n("p",[t._v(t._s(e.thumbnail))]),t._v(" "),n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),t._l(e.listOfTraits,(function(e){return n("li",[n("span",[t._v(t._s(e.trait_type)+" - "+t._s(e.value))])])}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);
/*! rader 22-08-2013 */
!function(a,b){function c(a){throw new Error(a)}var d=a.jQuery,e=function(a){return a=a||{},a.root=a.root||this,d=a.$||d,new f(a)},f=function(a){function e(){return!1}function f(a){C(document,"selectstart",e,a?"off":"on")}function g(a){for(var b=-1/0,c=0,d=a.length;d>c;c++)b<a[c]&&(b=a[c]);return b}function h(a){for(var b=1/0,c=0,d=a.length;d>c;c++)b>a[c]&&(b=a[c]);return b}function i(a,b){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function j(a){return a>A&&(a=A),0>a&&(a=0),a}function k(c){return Q[c]===b&&(Q[c]=j((c-a.start)/z*A)),Q[c]}function l(c){return R[c]===b&&(R[c]=c/A*z+a.start),R[c]}function m(b){var c=a.values[0],d=a.values[a.values.length-1];if(!a.values)return b;for(var e=0;a.pointsPos[e+1]&&!(b>=a.pointsPos[e]&&b<=a.pointsPos[e+1]);)e++;var f,g=a.pointsPos[e],h=a.pointsPos[e+1]||g,i=a.values[e],j=a.values[e+1]||i;return 0>=h-g&&(h=a.end,g=a.start),f="log"==a.scale?Math.exp((b-g)/(h-g)*(Math.log(j)-Math.log(i))+Math.log(i)):(b-g)/(h-g)*(j-i)+i,c>f?c:f>d?d:f}function n(b){var c=a.pointsPos[0],d=a.pointsPos[a.pointsPos.length-1];if(!a.pointsPos)return b;for(var e=0;a.values[e+1]&&!(b>=a.values[e]&&b<=a.values[e+1]);)e++;var f,g=a.values[e],h=a.values[e+1],i=a.pointsPos[e],j=a.pointsPos[e+1];return f="log"==a.scale?(Math.log(b)-Math.log(g))/(Math.log(h)-Math.log(g))*(j-i)+i:(b-g)/(h-g)*(j-i)+i,c>f?c:f>d?d:f}function o(b){for(var c,d,e=b,f=9999,g=0;g<a.pointsPos.length;g++)d=k(a.pointsPos[g]),c=Math.abs(d-b),f>c&&(e=d,f=c);return e}function p(b,c){var d,e,f,g=1/0,h=b,i=o(b);if(f=Math.abs(i-b),f>a.stickingRadius)return b;for(var l=0;l<a.pointsPos.length;l++)d=k(a.pointsPos[l]),e=Math.abs(d-b),d*c>b*c&&g>e&&(g=e,h=d);return g<a.stickingRadius?h:g>=a.stickingRadius?(b=j(b-f*c+a.stickingRadius*c),Math.abs(h-b)<a.stickingRadius?h:b):void 0}function q(c,d,e){function f(a){return a+1*g}var g;if(e>L[c])g=1;else{if(!(e<L[c]))return!1;g=-1}e=j(e),c!=d&&(e=p(e,g));var h=o(e);if(h!==b&&h!==e&&Math.abs(h-e)<a.stickingRadius&&(!P&&a.transCls&&(D(H.track).addClass(a.transCls),P=setTimeout(function(){D(H.track).removeClass(a.transCls),P=b},500)),e=h),L[f(d)]!==b&&(L[f(d)]-e<a.bumpRadius&&g>0||e-L[f(d)]<a.bumpRadius&&0>g)){var i=q(c,f(d),e+g*a.bumpRadius);e*g>(i-a.bumpRadius*g)*g&&(e=p(i-a.bumpRadius*g,-g))}L[d]=e;var k={};return k[I.start]=L[d]+"px",D(H.runners[d]).css(k),e}function r(b){if(a.pointInRangeCls){var c,d=N.slice();for(c=0;c<H.points.length;c++)N[c]=k(a.pointsPos[c])>=L[0]&&k(a.pointsPos[c])<=L[L.length-1]?1:0;for(c=0;c<N.length;c++)(N[c]!=d[c]||b)&&(N[c]?D(H.points[c]).addClass(a.pointInRangeCls):D(H.points[c]).removeClass(a.pointInRangeCls))}}function s(a){r(a);var b={};b[I.start]=h(L)+"px",b[I.size]=g(L)-h(L)+"px",D(H.trackActive).css(b)}function t(a,b){if(a){var c,d=a.clientX-F;c=k(K[J])+d;for(var e=0;e<L.length;e++)M[e]=L[e];q(J,J,j(c))}(!i(L,M)||b)&&s(b)}function u(){var b=h(L),c=g(L),d=m(l(b)),e=m(l(c));if(a.collapseVals&&c-b<=a.bumpRadius+1){var f=o(b);0==f-b?e=d:d=e}return{minPos:b,maxPos:c,minVal:d,maxVal:e}}function v(){a.change&&a.change(u())}function w(){a.move&&a.move(u())}function x(){K=a.runnersPos.slice();for(var b=0;b<a.runnersPos.length;b++)L[b]=k(K[b])}function y(){A=H.track[I.client],Q=[],R=[];var b,c;for(c=0;c<a.pointsPos.length;c++)b={},b[I.start]=k(a.pointsPos[c])+"px",D(H.points[c]).css(b);for(c=0;c<K.length;c++)b={},L[c]=k(K[c]),b[I.start]=L[c]+"px",D(H.runners[c]).css(b);var d=k(K[0]),e=k(K[K.length-1]);b={},b[I.start]=d+"px",b[I.size]=Math.abs(e-d)+"px",D(H.trackActive).css(b)}var z,A,B,C,D,E,F,G,H={},I={start:"left",client:"clientWidth",offset:"offsetWidth",size:"width"},J=-1,K=[],L=[],M=[],N=[];this.elements=H,this.params=a,C=a.event||function(a,b,c,e){d(a)[e||"on"](b,c)},D=a.dom||d,E=a.selector||d,H.track=a.root[0],H.trackActive=a.trackActive,H.points=a.points,H.runners=a.runners,B={stickingRadius:0,bumpRadius:H.runners[0][I.offset],points:[],pointsPos:[0,10],runnersPos:[]};for(var O in B)a[O]===b&&(a[O]=B[O]);if(a.start=a.pointsPos[0],a.end=a.pointsPos[a.pointsPos.length-1],a.values||(a.values=a.pointsPos),a.runnersVal&&!a.runnersPos.length)for(G=0;G<a.runnersVal.length;G++)a.runnersPos[G]=n(a.runnersVal[G]);a.runnersPos.length||(a.runnersPos=[a.start,a.end]),z=Math.abs(a.end-a.start),a.runners.length!=H.runners.length&&c("params.runners.length !== elements.runners.length"),E||c("No selector engine found"),D||c("No dom utility found"),C||c("No event manager found");var P,Q=[],R=[];for(G=0;G<a.runnersPos.length;G++)C(H.runners[G],"mousedown",function(a){return function(b){2!=b.button&&(b.preventDefault(),f(),J=a)}}(G));return x(),y(),t(0,1),C(document,"mouseup blur",function(){if(-1!=J){for(var a=0,b=K.length;b>a;a++)K[a]=l(L[a]);v(),f(1)}J=-1}),C(document,"mousedown",function(a){F=a.clientX}),C(document,"mousemove",function(a){-1!=J&&(t(a,0,1),w())}),this.setPosition=function(a,b){var c=k(b);q(a,a,c),K[a]=b,L[a]=c,s(1)},this.setValue=function(a,b){var c=n(b),d=k(c);q(a,a,d),K[a]=c,L[a]=d,s(1)},this.getPosition=function(a){return K[a]},this.getValue=function(a){return m(K[a])},this.invalidate=function(){y(),s(1),w()},this};d&&d.fn&&(d.fn.rader=e),a.rader=e}(window);
const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};ce();function B(){}function X(e){return e()}function D(){return Object.create(null)}function E(e){e.forEach(X)}function le(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let A;function G(e,t){return A||(A=document.createElement("a")),A.href=t,e===A.href}function ie(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function L(){return M(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let R;function N(e){R=e}const k=[],Q=[],S=[],U=[],fe=Promise.resolve();let T=!1;function ae(){T||(T=!0,fe.then(Z))}function F(e){S.push(e)}const I=new Set;let P=0;function Z(){const e=R;do{for(;P<k.length;){const t=k[P];P++,N(t),de(t.$$)}for(N(null),k.length=0,P=0;Q.length;)Q.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];I.has(n)||(I.add(n),n())}S.length=0}while(k.length);for(;U.length;)U.pop()();T=!1,I.clear(),N(e)}function de(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const q=new Set;let x;function he(){x={r:0,c:[],p:x}}function me(){x.r||E(x.c),x=x.p}function O(e,t){e&&e.i&&(q.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),x.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function _e(e){e&&e.c()}function ee(e,t,n,r){const{fragment:o,on_mount:c,on_destroy:a,after_update:d}=e.$$;o&&o.m(t,n),r||F(()=>{const h=c.map(X).filter(le);a?a.push(...h):E(h),e.$$.on_mount=[]}),d.forEach(F)}function te(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(k.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,r,o,c,a,d=[-1]){const h=R;N(e);const l=e.$$={fragment:null,ctx:null,props:c,update:B,not_equal:o,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:D(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};a&&a(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(u,g,...m)=>{const $=m.length?m[0]:g;return l.ctx&&o(l.ctx[u],l.ctx[u]=$)&&(!l.skip_bound&&l.bound[u]&&l.bound[u]($),v&&pe(e,u)),g}):[],l.update(),v=!0,E(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ue(t.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&O(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),Z()}N(h)}class re{$destroy(){te(this,1),this.$destroy=B}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ge(e){let t,n,r,o,c,a,d=e[0].name+"",h,l,v,u=e[0].species+"",g;return{c(){t=b("div"),n=b("img"),c=L(),a=b("h1"),h=M(d),l=L(),v=b("h3"),g=M(u),G(n.src,r=e[0].image)||y(n,"src",r),y(n,"alt",o=e[0].name),y(t,"class","character")},m(m,$){j(m,t,$),p(t,n),p(t,c),p(t,a),p(a,h),p(t,l),p(t,v),p(v,g)},p(m,[$]){$&1&&!G(n.src,r=m[0].image)&&y(n,"src",r),$&1&&o!==(o=m[0].name)&&y(n,"alt",o),$&1&&d!==(d=m[0].name+"")&&J(h,d),$&1&&u!==(u=m[0].species+"")&&J(g,u)},i:B,o:B,d(m){m&&C(t)}}}function $e(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class ye extends re{constructor(t){super(),ne(this,t,$e,ge,Y,{character:0})}}function V(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t,n;return t=new ye({props:{character:e[5]}}),{c(){_e(t.$$.fragment)},m(r,o){ee(t,r,o),n=!0},p(r,o){const c={};o&1&&(c.character=r[5]),t.$set(c)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function be(e){let t,n,r,o,c,a,d,h,l,v,u,g,m,$,w=e[0],s=[];for(let i=0;i<w.length;i+=1)s[i]=W(V(e,w,i));const oe=i=>K(s[i],1,1,()=>{s[i]=null});return{c(){t=b("h1"),t.textContent="Rick and Morty Svelte",n=L(),r=b("div"),o=b("div"),c=b("button"),a=M("Previous"),h=L(),l=b("button"),l.textContent="Next",v=L(),u=b("div");for(let i=0;i<s.length;i+=1)s[i].c();y(t,"class","title"),y(c,"class","btn"),c.disabled=d=e[1]===1,y(l,"class","btn"),y(o,"class","btns"),y(u,"class","grid"),y(r,"class","container")},m(i,_){j(i,t,_),j(i,n,_),j(i,r,_),p(r,o),p(o,c),p(c,a),p(o,h),p(o,l),p(r,v),p(r,u);for(let f=0;f<s.length;f+=1)s[f].m(u,null);g=!0,m||($=[H(c,"click",e[3]),H(l,"click",e[2])],m=!0)},p(i,[_]){if((!g||_&2&&d!==(d=i[1]===1))&&(c.disabled=d),_&1){w=i[0];let f;for(f=0;f<w.length;f+=1){const z=V(i,w,f);s[f]?(s[f].p(z,_),O(s[f],1)):(s[f]=W(z),s[f].c(),O(s[f],1),s[f].m(u,null))}for(he(),f=w.length;f<s.length;f+=1)oe(f);me()}},i(i){if(!g){for(let _=0;_<w.length;_+=1)O(s[_]);g=!0}},o(i){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)K(s[_]);g=!1},d(i){i&&C(t),i&&C(n),i&&C(r),se(s,i),m=!1,E($)}}}function ve(e,t,n){let r=[],o=1;async function c(){const l=await(await fetch("https://rickandmortyapi.com/api/character?page="+o)).json();return n(0,r=l.results),console.log(r),l.results}c();function a(){n(1,o++,o),c()}function d(){n(1,o--,o),c()}return[r,o,a,d]}class we extends re{constructor(t){super(),ne(this,t,ve,be,Y,{})}}new we({target:document.getElementById("app")});

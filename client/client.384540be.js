function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function c(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,m=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const i=e[t].claim_order,o=(r>0&&e[n[r]].claim_order<=i?r+1:p(1,r,(t=>e[n[t]].claim_order),i))-1;s[t]=n[o]+1;const a=o+1;n[a]=t,r=Math.max(a,r)}const i=[],o=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(i.push(e[t-1]);a>=t;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);i.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<o.length;e++){for(;n<i.length&&o[e].claim_order>=i[n].claim_order;)n++;const s=n<i.length?i[n]:null;t.insertBefore(o[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function k(){return E("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,s,r=!1){L(t);const i=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const i=t[s];if(e(i)){const e=n(i);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),i}}for(let s=t.claim_info.last_index-1;s>=0;s--){const i=t[s];if(e(i)){const e=n(i);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,i}}return s()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function R(t,e,n,s){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function j(t,e,n){return R(t,e,n,y)}function O(t,e,n){return R(t,e,n,w)}function H(t,e){return I(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function C(t){return H(t," ")}function U(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t,e){const n=U(t,"HTML_TAG_START",0),s=U(t,"HTML_TAG_END",n);if(n===s)return new z(void 0,e);L(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const i=r.slice(1,r.length-1);for(const e of i)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(i,e)}function K(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=G();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=x(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=x(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}}function V(t){h=t}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function W(t){J().$$.on_mount.push(t)}function F(t){J().$$.after_update.push(t)}function Y(t){J().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}const rt=new Set;let it=0;function ot(){const t=h;do{for(;it<X.length;){const t=X[it];it++,V(t),at(t.$$)}for(V(null),X.length=0,it=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];rt.has(e)||(rt.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,rt.clear(),V(t)}function at(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const lt=new Set;let ct;function ut(){ct={r:0,c:[],p:ct}}function ft(){ct.r||r(ct.c),ct=ct.p}function dt(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(lt.has(t))return;lt.add(t),ct.c.push((()=>{lt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function mt(t,e){const n={},s={},r={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const t in o)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in o)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function bt(t,e,s,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,s),o||st((()=>{const e=l.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function _t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,i,o,a,l,c,u=[-1]){const f=h;V(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(d.root);let p=!1;if(d.ctx=i?i(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&$t(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){m=!0;const t=P(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&dt(e.$$.fragment),bt(e,n.target,n.anchor,n.customElement),m=!1,ot()}V(f)}class wt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let s;const r=new Set;function i(t){if(o(e,t)&&(e=t,s)){const t=!Et.length;for(const t of r)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,a=t){const l=[o,a];return r.add(l),1===r.size&&(s=n(i)||t),o(e),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const kt={};var xt={owner:"imap-fi",repo:"status",sites:[{name:"Sivusto",url:"https://imap.fi"},{name:"Palvelun API",url:"https://api.imap.fi/heartbeat"},{name:"Sähköpostipalvelin",url:"https://server.imap.fi"},{name:"Webmail",url:"https://mail.imap.fi"}],"status-website":{cname:"status.imap.fi",favicon:"https://imap.fi/favicon.png",logoUrl:"https://avatars.githubusercontent.com/u/95940610?s=400&u=7d5835ff20b9769ffe79d26138585f444a3b106b&v=4",name:"imap.fi - tilannehuone",introTitle:"**imap.fi** on suomalainen sähköpostipalvelu.",introMessage:"Katselet tällä hetkellä palvelujemme tilannetta tilannehuoneesamme.",navbar:[{title:"Status",href:"/"},{title:"Sivusto",href:"https://imap.fi/"}]},i18n:{activeIncidents:"Aktiiviset virheet",allSystemsOperational:"Kaikki palvelut toimivat",incidentReport:"Virheen #$NUMBER raportti →",activeIncidentSummary:"Avattu $DATE $POSTS:llä julkaisulla",incidentTitle:"Virheen numero $NUMBER tiedot",incidentDetails:"Virheen tiedot",incidentFixed:"Korjattu",incidentOngoing:"Käynnissä",incidentOpenedAt:"Avattu",incidentClosedAt:"Suljettu",incidentSubscribe:"Tilaa päivitykset",incidentViewOnGitHub:"Katsele GitHubissa",incidentCommentSummary:"Julkaistu $DATE kirjoittajana $AUTHOR",incidentBack:"← Palaa kaikkiin virheisiin",pastIncidents:"Edelliset virheet",pastIncidentsResolved:"Korjattu $MINUTES minuutissa $POSTS:llä vastauksella",liveStatus:"Reaaliaikainen tilanne",overallUptime:"Kokonaispäälläoloaika: $UPTIME",overallUptimeTitle:"Kokonaispäälläoloaika",averageResponseTime:"Keskimääräinen vastausaika: $TIMEms",averageResponseTimeTitle:"Keskimääräinen vastausaika",sevelDayResponseTime:"7-päivän vastausaika",responseTimeMs:"Vastausaika (ms)",up:"Päällä",down:"Alhaalla",degraded:"Heikentynyt",ms:"ms",loading:"Ladataan",navGitHub:"GitHub",footer:"Tämä sivu on [avoimen lähdekoodin]($REPO), moottorina [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Nopeusrajoitus saavutettu",rateLimitExceededIntro:"Olet saavuttanut tunnittaisen kyselyrajan, jotenka joudut odottamaan ennen kuin pääset taas vierailemaan sivustolla. Vaihtoehtoisesti voit lisätä GitHub Personal Access Tokenin jatkaaksesi tämän sivuston käyttöä.",rateLimitExceededWhatDoesErrorMean:"Mitä tämä virhe tarkoittaa?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"Kuinka voin korjata tämän?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Opi Personal Access Tokenin generointi",rateLimitExceededHasSet:"Sinulla on personal access token asetettu.",rateLimitExceededRemoveToken:"Poista token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Kopioi ja liitä tokenisi",rateLimitExceededSaveToken:"Tallenna token",errorTitle:"Ilmeni virhe.",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"Voit kokeilla uudestaan muutaman minuutin kuluttua.",errorHome:"Mene etusivulle",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Alkanut",startsAt:"Alkaa",duration:"Kestää",durationMin:"$DURATION minuuttia",incidentCompleted:"Suoritettu",incidentScheduled:"Ajastettu"},path:"https://status.imap.fi"};function Tt(t,e,n){const s=t.slice();return s[1]=e[n],s}function At(e){let n,s,r,i,o=xt["status-website"]&&!xt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=j(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),l(n.src,s=xt["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=xt["status-website"]&&!xt["status-website"].hideNavTitle&&function(e){let n,s,r=xt["status-website"].name+"";return{c(){n=y("div"),s=E(r)},l(t){n=j(t,"DIV",{});var e=P(n);s=H(e,r),e.forEach(_)},m(t,e){b(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=j(t,"DIV",{});var e=P(n);s=j(e,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=C(i),a&&a.l(i),i.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",i=xt["status-website"].logoHref||xt.path),A(s,"class","logo svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){xt["status-website"]&&!xt["status-website"].hideNavLogo&&o.p(t,e),xt["status-website"]&&!xt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),o&&o.d(),a&&a.d()}}}function Nt(t){let e,n,s,r,i,o,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=E(a),o=S(),this.h()},l(t){e=j(t,"LI",{});var r=P(e);n=j(r,"A",{"aria-current":!0,href:!0,class:!0});var i=P(n);s=H(i,a),i.forEach(_),o=C(r),r.forEach(_),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",i=t[1].href.replace("$OWNER",xt.owner).replace("$REPO",xt.repo)),A(n,"class","svelte-a08hsz")},m(t,r){b(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&_(e)}}}function Pt(e){let n,s,r,i,o,a=xt["status-website"]&&xt["status-website"].logoUrl&&At(),l=xt["status-website"]&&xt["status-website"].navbar&&function(t){let e,n=xt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Nt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(1&r){let i;for(n=xt["status-website"].navbar,i=0;i<n.length;i+=1){const o=Tt(t,n,i);s[i]?s[i].p(o,r):(s[i]=Nt(o),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),c=xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&function(e){let n,s,r,i,o=xt.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=E(o),this.h()},l(t){n=j(t,"LI",{});var e=P(n);s=j(e,"A",{href:!0,class:!0});var i=P(s);r=H(i,o),i.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",i=`https://github.com/${xt.owner}/${xt.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=S(),i=y("ul"),l&&l.c(),o=S(),c&&c.c(),this.h()},l(t){n=j(t,"NAV",{class:!0});var e=P(n);s=j(e,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=C(u),i=j(u,"UL",{class:!0});var f=P(i);l&&l.l(f),o=C(f),c&&c.l(f),f.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){A(i,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){b(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,i),l&&l.m(i,null),g(i,o),c&&c.m(i,null)},p(t,[e]){xt["status-website"]&&xt["status-website"].logoUrl&&a.p(t,e),xt["status-website"]&&xt["status-website"].navbar&&l.p(t,e),xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&c.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),l&&l.d(),c&&c.d()}}}function Lt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class It extends wt{constructor(t){super(),yt(this,t,Lt,Pt,o,{segment:0})}}var Rt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function jt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(t,e){var n,s,r,i,o,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=e||{},f=0;function d(t){var e=Rt[t[1]||""],n=l[l.length-1]==t;return e?e[1]?(n?l.pop():l.push(t),e[0|n]):e[0]:t}function h(){for(var t="";l.length;)t+=d(l[l.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((o=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+jt(Ot(o).replace(/^\n+|\n+$/g,""))+"</code></pre>":(o=r[6])?(o.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),i=Ht(jt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==o?o="blockquote":(o=o.match(/\./)?"ol":"ul",i=i.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+o+">"+i+"</"+o+">"):r[8]?n='<img src="'+Ot(r[8])+'" alt="'+Ot(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Ot(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(o="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ht(r[12]||r[15],u)+"</"+o+">":r[16]?n="<code>"+Ot(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),c+=s,c+=n;return(c+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ct(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function Mt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Kt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=j(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${xt.path}/themes/${(xt["status-website"]||{}).theme||"light"}.css`)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Dt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=j(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(xt["status-website"]||{}).themeUrl)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Gt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=j(t,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){l(n.src,s=e[8].src)||A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=j(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=j(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){b(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n,s,r,i,o,a,l,u,f,d,h,m,p,v,w,E,x,T,N=Ht(xt.i18n.footer.replace(/\$REPO/,`https://github.com/${xt.owner}/${xt.repo}`))+"",L=(xt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(xt["status-website"]||{}).customHeadHtml+"";return{c(){n=new z(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let I=((xt["status-website"]||{}).themeUrl?Dt:Kt)(e),R=(xt["status-website"]||{}).scripts&&function(t){let e,n=(xt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Gt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let i;for(n=(xt["status-website"]||{}).scripts,i=0;i<n.length;i+=1){const o=Mt(t,n,i);s[i]?s[i].p(o,r):(s[i]=Gt(o),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),O=(xt["status-website"]||{}).links&&function(t){let e,n=(xt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let i;for(n=(xt["status-website"]||{}).links,i=0;i<n.length;i+=1){const o=Ut(t,n,i);s[i]?s[i].p(o,r):(s[i]=qt(o),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),H=(xt["status-website"]||{}).metaTags&&function(t){let e,n=(xt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ct(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=k()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=k()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);b(t,e,n)},p(t,r){if(0&r){let i;for(n=(xt["status-website"]||{}).metaTags,i=0;i<n.length;i+=1){const o=Ct(t,n,i);s[i]?s[i].p(o,r):(s[i]=Bt(o),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),U=xt["status-website"].css&&function(e){let n,s,r=`<style>${xt["status-website"].css}</style>`;return{c(){n=new z(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),K=xt["status-website"].js&&function(e){let n,s,r=`<script>${xt["status-website"].js}<\/script>`;return{c(){n=new z(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),D=(xt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(xt["status-website"]||{}).customBodyHtml+"";return{c(){n=new z(!1),s=k(),this.h()},l(t){n=M(t,!1),s=k(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),b(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();m=new It({props:{segment:e[0]}});const G=e[2].default,q=function(t,e,n,s){if(t){const r=c(t,e,n,s);return t[0](r)}}(G,e,e[1],null);return{c(){L&&L.c(),n=k(),I.c(),s=y("link"),r=y("link"),i=y("link"),R&&R.c(),o=k(),O&&O.c(),a=k(),H&&H.c(),l=k(),U&&U.c(),u=k(),K&&K.c(),f=k(),d=S(),D&&D.c(),h=S(),gt(m.$$.fragment),p=S(),v=y("main"),q&&q.c(),w=S(),E=y("footer"),x=y("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=k(),I.l(e),s=j(e,"LINK",{rel:!0,href:!0}),r=j(e,"LINK",{rel:!0,type:!0,href:!0}),i=j(e,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(e),o=k(),O&&O.l(e),a=k(),H&&H.l(e),l=k(),U&&U.l(e),u=k(),K&&K.l(e),f=k(),e.forEach(_),d=C(t),D&&D.l(t),h=C(t),vt(m.$$.fragment,t),p=C(t),v=j(t,"MAIN",{class:!0});var c=P(v);q&&q.l(c),c.forEach(_),w=C(t),E=j(t,"FOOTER",{class:!0});var g=P(E);x=j(g,"P",{}),P(x).forEach(_),g.forEach(_),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${xt.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(xt["status-website"]||{}).faviconSvg||(xt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(i,"rel","icon"),A(i,"type","image/png"),A(i,"href",(xt["status-website"]||{}).favicon||"/logo-192.png"),A(v,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),I.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,i),R&&R.m(document.head,null),g(document.head,o),O&&O.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,l),U&&U.m(document.head,null),g(document.head,u),K&&K.m(document.head,null),g(document.head,f),b(t,d,e),D&&D.m(t,e),b(t,h,e),bt(m,t,e),b(t,p,e),b(t,v,e),q&&q.m(v,null),b(t,w,e),b(t,E,e),g(E,x),x.innerHTML=N,T=!0},p(t,[e]){(xt["status-website"]||{}).customHeadHtml&&L.p(t,e),I.p(t,e),(xt["status-website"]||{}).scripts&&R.p(t,e),(xt["status-website"]||{}).links&&O.p(t,e),(xt["status-website"]||{}).metaTags&&H.p(t,e),xt["status-website"].css&&U.p(t,e),xt["status-website"].js&&K.p(t,e),(xt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),q&&q.p&&(!T||2&e)&&function(t,e,n,s,r,i){if(r){const o=c(e,n,s,i);t.p(o,r)}}(q,G,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(dt(m.$$.fragment,t),dt(q,t),T=!0)},o(t){ht(m.$$.fragment,t),ht(q,t),T=!1},d(t){L&&L.d(t),_(n),I.d(t),_(s),_(r),_(i),R&&R.d(t),_(o),O&&O.d(t),_(a),H&&H.d(t),_(l),U&&U.d(t),_(u),K&&K.d(t),_(f),t&&_(d),D&&D.d(t),t&&_(h),_t(m,t),t&&_(p),t&&_(v),q&&q.d(t),t&&_(w),t&&_(E)}}}function Vt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:i}=e;return t.$$set=t=>{"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[i,r,s]}class Jt extends wt{constructor(t){super(),yt(this,t,Vt,zt,o,{segment:0})}}function Wt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=E(s)},l(t){e=j(t,"PRE",{});var r=P(e);n=H(r,s),r.forEach(_)},m(t,s){b(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&K(n,s)},d(t){t&&_(e)}}}function Ft(e){let n,s,r,i,o,a,l,c,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Wt(e);return{c(){s=S(),r=y("h1"),i=E(e[0]),o=S(),a=y("p"),l=E(f),c=S(),d&&d.c(),u=k(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=C(t),r=j(t,"H1",{class:!0});var n=P(r);i=H(n,e[0]),n.forEach(_),o=C(t),a=j(t,"P",{class:!0});var h=P(a);l=H(h,f),h.forEach(_),c=C(t),d&&d.l(t),u=k(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){b(t,s,e),b(t,r,e),g(r,i),b(t,o,e),b(t,a,e),g(a,l),b(t,c,e),d&&d.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&K(i,t[0]),2&e&&f!==(f=t[1].message+"")&&K(l,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Wt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(o),t&&_(a),t&&_(c),d&&d.d(t),t&&_(u)}}}function Yt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends wt{constructor(t){super(),yt(this,t,Yt,Ft,o,{status:0,error:1})}}function Qt(t){let n,s,r;const i=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return o&&(n=new o(a())),{c(){n&&gt(n.$$.fragment),s=k()},l(t){n&&vt(n.$$.fragment,t),s=k()},m(t,e){n&&bt(n,t,e),b(t,s,e),r=!0},p(t,e){const r=16&e?mt(i,[pt(t[4].props)]):{};if(o!==(o=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{_t(t,1)})),ft()}o?(n=new o(a()),gt(n.$$.fragment),dt(n.$$.fragment,1),bt(n,s.parentNode,s)):n=null}else o&&n.$set(r)},i(t){r||(n&&dt(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&_t(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,s){bt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(dt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function te(t){let e,n,s,r;const i=[Zt,Qt],o=[];function a(t,e){return t[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=k()},l(t){n.l(t),s=k()},m(t,n){o[e].m(t,n),b(t,s,n),r=!0},p(t,r){let l=e;e=a(t),e===l?o[e].p(t,r):(ut(),ht(o[l],1,1,(()=>{o[l]=null})),ft(),n=o[e],n?n.p(t,r):(n=o[e]=i[e](t),n.c()),dt(n,1),n.m(s.parentNode,s))},i(t){r||(dt(n),r=!0)},o(t){ht(n),r=!1},d(t){o[e].d(t),t&&_(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let i={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)i=e(i,r[t]);return n=new Jt({props:i}),{c(){gt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){bt(n,t,e),s=!0},p(t,[e]){const s=12&e?mt(r,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(dt(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){_t(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:i}=e,{segments:o}=e,{level0:a}=e,{level1:l=null}=e,{notify:c}=e;var u,f;return F(c),u=kt,f=s,J().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,i=t.status),"segments"in t&&n(2,o=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[r,i,o,a,l,s,c]}class se extends wt{constructor(t){super(),yt(this,t,ne,ee,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],ie=[{js:()=>Promise.all([import("./index.3c882471.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.ea52cbe8.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.d28bb2c1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.1a24a7b6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.70d9148b.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],oe=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,s){return new(n||(n=Promise))((function(r,i){function o(t){try{l(s.next(t))}catch(t){i(t)}}function a(t){try{l(s.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,fe=1;const de="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<oe.length;n+=1){const s=oe[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),i=s.parts[s.parts.length-1],o=i.params?i.params(r):{},a={host:location.host,path:e,query:n,params:o};return{href:t.href,route:s,match:r,page:a}}}}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const i=ve(r);if(i){ye(i,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),de.pushState({id:ue},"",r.href)}}function _e(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(he[ue]=_e(),t.state){const e=ve(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){ue=t}(fe),de.replaceState({id:ue},"",location.href)}function ye(t,e,n,s){return le(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=_e();he[ue]=t,ue=e=++fe,he[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function ke(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,we(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:Ge(e)}),Se.promise}(e.href)}function xe(t){clearTimeout(Ee),Ee=setTimeout((()=>{ke(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,we(document)));if(n){const s=ye(n,null,e.noscroll);return de[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ne,Pe,Le,Ie=!1,Re=[],je="{}";const Oe={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:St(null),session:St(Ae&&Ae.session)};let He,Ce,Ue;function Me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ke(t){return le(this,void 0,void 0,(function*(){Ne&&Oe.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:Ge(t)}(t),n=Pe={},s=yield e,{redirect:r}=s;if(n===Pe)if(r)yield Te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield De(n,e,Me(e,t.page))}}))}function De(t,e,n){return le(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Ne?Ne.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Le},e.notify=Oe.page.notify,Ne=new se({target:Ue,props:e,hydrate:!0})),Re=t,je=JSON.stringify(n.query),Ie=!0,Ce=!1}))}function Ge(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const i={error:null,status:200,segments:[s[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{i.error="string"==typeof e?new Error(e):e,i.status=t}};if(!Le){const t=()=>({});Le=Ae.preloaded[0]||t.call(o,{host:n.host,path:n.path,query:n.query,params:{}},He)}let a,l=1;try{const r=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>le(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==je)return!0;const r=Re[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,c,r)&&(u=!0),i.segments[l]=s[a+1],!e)return{segment:f};const d=l++;let h;if(Ce||u||!Re[a]||Re[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ie[e.i].js();let i;i=Ie||!Ae.preloaded[a+1]?r?yield r.call(o,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},He):{}:Ae.preloaded[a+1],h={component:s,props:i,segment:f,match:c,part:e.i}}else h=Re[a];return i[`level${d}`]=h})))))}catch(t){i.error=t,i.status=500,a=[]}return{redirect:r,props:i,branch:a}}))}var qe,Be,ze;Oe.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(He=t,!Ie)return;Ce=!0;const e=ve(new URL(location.href)),n=Pe={},{redirect:s,props:r,branch:i}=yield Ge(e);n===Pe&&(s?yield Te(s.location,{replaceState:!0}):yield De(i,r,Me(r,e.page)))})))),qe={target:document.querySelector("#sapper")},Be=qe.target,Ue=Be,ze=Ae.baseUrl,me=ze,pe=Ke,"scrollRestoration"in de&&(de.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{de.scrollRestoration="auto"})),addEventListener("load",(()=>{de.scrollRestoration="manual"})),addEventListener("click",be),addEventListener("popstate",$e),addEventListener("touchstart",ke),addEventListener("mousemove",xe),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:i,error:o}=Ae;Le||(Le=r&&r[0]);const a={error:o,status:i,session:s,level0:{props:Le},level1:{props:{status:i,error:o},component:Xt},segments:r},l=ge(n);De([],a,{host:t,path:e,query:l,params:{},error:o})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;de.replaceState({id:fe},"",e);const n=ve(new URL(location.href));if(n)return ye(n,fe,!0,t)}));export{_t as A,x as B,r as C,Q as D,M as E,l as F,f as G,z as H,B as I,Ht as J,w as K,O as L,Te as M,D as N,T as O,e as P,N as Q,mt as R,wt as S,F as T,Y as U,u as V,pt as W,st as X,q as Y,P as a,H as b,j as c,_ as d,y as e,A as f,b as g,g as h,yt as i,S as j,C as k,ut as l,ht as m,t as n,ft as o,dt as p,W as q,xt as r,o as s,E as t,K as u,k as v,$ as w,gt as x,vt as y,bt as z};

import __inject_styles from './inject_styles.803b7e80.js';
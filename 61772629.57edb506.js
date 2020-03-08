(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(195)),i={id:"docker",title:"Self Hosting with Docker",sidebar_label:"Self Hosting with Docker"},c={id:"self-hosting/docker",title:"Self Hosting with Docker",description:"These instructions make the following assumptions:",source:"@site/docs/self-hosting/docker.md",permalink:"/self-hosting/docker",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/self-hosting/docker.md",lastUpdatedAt:1580461252,sidebar_label:"Self Hosting with Docker",sidebar:"someSidebar",previous:{title:"Self Hosting with EC2 and Nginx",permalink:"/self-hosting/ec2-nginx"},next:{title:"Self Hosting with Heroku",permalink:"/self-hosting/heroku"}},s=[{value:"Getting started",id:"getting-started",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These instructions make the following assumptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You've just finished setting up a Linux server (say, Ubuntu 16.04 64-bit) and have installed Docker on it."),Object(o.b)("li",{parentName:"ul"},"You've configured your security groups to allow for incoming SSH connections from your local IP."),Object(o.b)("li",{parentName:"ul"},"You've configured a domain name (or subdomain) to point to your server's IP address."),Object(o.b)("li",{parentName:"ul"},"You've configured the DNS to enable HTTPS for your domain (say, using Cloudflare).")),Object(o.b)("h3",{id:"getting-started"},"Getting started"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"SSH into your new server:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ ssh -l {user} {IP to the server}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your system:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get update\n$ sudo apt-get upgrade\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Git:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get update\n$ sudo apt-get install -y git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you are in your home directory and clone the Standard Notes Server ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/standardnotes/syncing-server"}),"syncing-server")," project:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~\n$ git clone https://github.com/standardnotes/syncing-server.git\n$ cd syncing-server\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create ",Object(o.b)("inlineCode",{parentName:"p"},".env.production")," file in the project's directory:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cp env.sample .env.production\n")),Object(o.b)("p",{parentName:"li"},"Generate the ",Object(o.b)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE")," with:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ bundle exec rake secret\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Simply run:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose up -d\n")),Object(o.b)("p",{parentName:"li"},"This should load the ",Object(o.b)("inlineCode",{parentName:"p"},"syncing-server")," and MySQL database containers and run the necessary migrations.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Test your access to the server locally:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ curl {domain name}\n<!doctype html>\n<html>\n  ...\n  <body>\n    <h1> Hi! You\'re not supposed to be here. </h1>\n\n    <p> You might be looking for the <a href="https://app.standardnotes.org"> Standard Notes Web App</a> or the main <a href="https://standardnotes.org"> Standard Notes Website</a>. </p>\n\n  </body>\n</html>\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h3",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"You can immediately start using your new server by using the Standard Notes app at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"."),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," when signing in to specify your server."),Object(o.b)("p",null,"Then, register for a new account, and begin using your private new secure Standard Notes server!"))}l.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
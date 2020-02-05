(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),r=(n(0),n(169)),i={id:"publishing",title:"Publishing",sidebar_label:"Publishing"},l={id:"extensions/publishing",title:"Publishing",description:"Once you've crafted the code for your extension, you'll need to create a JSON description of your package, so that it can be imported using the Extension manager.",source:"@site/docs/extensions/publishing.md",permalink:"/extensions/publishing",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/extensions/publishing.md",sidebar_label:"Publishing",sidebar:"someSidebar",previous:{title:"Actions",permalink:"/extensions/actions"},next:{title:"Encryption",permalink:"/specification/encryption"}},c=[{value:"Steps:",id:"steps",children:[]},{value:"Local Installation",id:"local-installation",children:[]},{value:"Autoupdate",id:"autoupdate",children:[]},{value:"Questions?",id:"questions",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Once you've crafted the code for your extension, you'll need to create a JSON description of your package, so that it can be imported using the Extension manager."),Object(r.b)("p",null,"The JSON description must be hosted on a URL the app can reach out to. In these steps, we'll use Listed to generate a JSON endpoint."),Object(r.b)("h3",{id:"steps"},"Steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Create a new note in Standard Notes called "my-extension.json", and enter the following as its contents:')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'---\nmetatype: json\n---\n\n{\n  "identifier": "org.yourdomain.my-markdown-editor",\n  "name": "My Markdown Editor",\n  "content_type": "SN|Component",\n  "area": "editor-editor",\n  "version": "1.0.0",\n  "description": "A fully featured Markdown editor that supports live preview, a styling toolbar, and split pane support.",\n  "url": "https://domain.org/link-to-hosted-extension",\n  "download_url": "https://github.com/sn-extensions/advanced-markdown-editor/archive/1.0.184.zip",\n  "latest_url": "https://listed.to/my-extension-json-link",\n  "marketing_url": "https://standardnotes.org/extensions/advanced-markdown",\n  "thumbnail_url": "https://domain.org/editors/adv-markdown.jpg"\n}\n')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Head over to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://listed.to"}),"listed.to"),', and generate an account by clicking "Generate Author Link". Copy that link, then, in the Extensions menu in Standard Notes, click "Import Extension" in the bottom right corner. Paste in your link, and press enter, then accept.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Back in your "my-extension.json" note, click "Actions" in the menu bar below the note title, then click "Publish to Private Link". Click "Open Private Link" to preview your JSON endpoint.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'In the Extensions window, click "Import Extension", and paste in your JSON endpoint, press Enter, then accept to install your extension.'))),Object(r.b)("h4",{id:"key-descriptions"},"Key Descriptions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"identifier"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A unique, reverse domain style identifier for your extension.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The name of your extension.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"content","_","type"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Generally SN","|","Component, or SN","|","Theme if theme package.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"area"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"One of ","[","editor-editor, editor-stack, themes, note-tags, tags-list","]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"version"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The current version of your extension. Needs to match the version in your GitHub repo's package.json file.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"description"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The description that will be displayed in the Extensions browser.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"url"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Used by the web and mobile app. This value is the location of the hosted extension. It must be a link to either an HTML file ","(","for components",")"," or a CSS file ","(","for themes",")",".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"download","_","url"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'Used by the desktop app. Must be a zip file. Caters strongly to GitHub auto-generated release files. The zip file must contain a package.json file with at least a version key. By default, the desktop app will look for an "index.html" in the root directory of the zip file. ',"(","Note that if using GitHub auto-generated zip files, the contents of the zip file are embedded within a folder. The desktop app automatically unnests the folder contents and moves it up one level so it is on the root level.",")",' If your main file is not called index.html, or if it is a CSS file, please see below in "Local Installation" under "To specify the root file of your extension" instructions.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"marketing","_","url"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'If specified, the Extensions manager will display an "Info" button, which on click, will open a web browser to this location.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"thumbnail","_","url"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The image the Extensions manager will display for your extension.")))),Object(r.b)("h3",{id:"local-installation"},"Local Installation"),Object(r.b)("p",null,"Extensions in Standard Notes desktop support local installation. We recommend using GitHub releases to host your download file."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'In your extension repository on GitHub, go to the Releases tab, then click "Draft New Release".')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click "Publish release" ',"(","you don't need to enter any information",")",'. Standard Notes will use the auto-generated "Source code ',"(","zip",")",'" archive that GitHub generates.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Right click on "Source code ',"(","zip",")",'", then choose the option to Copy Link Address. Use this value for ',Object(r.b)("inlineCode",{parentName:"p"},"download_url")," in your JSON contents."))),Object(r.b)("p",null,"By default, Standard Notes will look for the ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," file located in the root of the project. If your main file is not in the root, you can specify a custom path."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"To specify the root file of your extension:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your extension's repository, create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," if it does not already exist.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the following entry anywhere in the root level of ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'...\n  "sn": {\n    "main": "relative/path/to/index.html"\n  },\n...\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"main")," can also be a CSS file if you're publishing a theme."),Object(r.b)("h3",{id:"autoupdate"},"Autoupdate"),Object(r.b)("p",null,"Standard Notes will ping the ",Object(r.b)("inlineCode",{parentName:"p"},"latest_url"),"endpoint automatically to update extensions. For this value, you can use the same JSON endpoint you're using for ",Object(r.b)("inlineCode",{parentName:"p"},"url")," ","(","your ",Object(r.b)("inlineCode",{parentName:"p"},"my-extension.json")," endpoint",")","."),Object(r.b)("h3",{id:"questions"},"Questions?"),Object(r.b)("p",null,"Join the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/slack"}),"Slack group")," and ask away in the ","#","dev channel."))}b.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
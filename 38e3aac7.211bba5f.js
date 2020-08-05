(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return m})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return l}));var s=t(2),n=t(6),b=(t(0),t(199)),c={id:"markdown-math",title:"Markdown Math",sidebar_label:"Markdown Math",description:"How to use the Standard Notes Markdown Math editor.",keywords:["standard notes","docs","notes app","end-to-end encryption","markdown math"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},m={id:"usage/markdown-math",isDocsHomePage:!1,title:"Markdown Math",description:"How to use the Standard Notes Markdown Math editor.",source:"@site/docs/usage/markdown-math.md",permalink:"/usage/markdown-math",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/usage/markdown-math.md",lastUpdatedAt:1596614831,sidebar_label:"Markdown Math",sidebar:"someSidebar",previous:{title:"Markdown Basic Editor",permalink:"/usage/markdown-basic"},next:{title:"Markdown Pro",permalink:"/usage/markdown-pro"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Style Guide",id:"style-guide",children:[]},{value:"Tables",id:"tables",children:[]},{value:"KaTeX",id:"katex",children:[{value:"KaTeX Tables",id:"katex-tables",children:[]}]},{value:"License",id:"license",children:[]},{value:"Development",id:"development",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],r={rightToc:p};function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(s.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"The Markdown Math editor (aka Math Editor) is a ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://standardnotes.org/help/77/what-are-editors"}),"derived editor")," for Standard Notes. It is derived from the ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/parpalak/upmath.me"}),"Upmath")," editor by ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/parpalak"}),"Roman Parpalak"),", but uses ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://katex.org"}),"KaTeX")," for client-side rendering. Because the original Upmath editor and the Markdown Math editor render math using slightly different methods, some TeX libraries and their environments may be available in the Upmath editor but not in the Markdown Math editor. For a full list of functions supported by KaTeX, please see the ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://katex.org/docs/supported.html"}),"official KaTeX documentation"),"."),Object(b.b)("h2",{id:"features"},"Features"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("span",Object(s.a)({parentName:"li"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mtext",{parentName:"mrow"},"LaTeX")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\LaTeX")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"L"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.36em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.68333em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.904999em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"T"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.46782999999999997em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.7845em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"E")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),Object(b.b)("span",{parentName:"span"})))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"X")))))))," math rendering via ",Object(b.b)("a",Object(s.a)({parentName:"li"},{href:"https://katex.org"}),Object(b.b)("span",Object(s.a)({parentName:"a"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"K"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.68333em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.904999em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"T"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.46782999999999997em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.7845em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"E")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),Object(b.b)("span",{parentName:"span"})))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"X"))))))))),Object(b.b)("li",{parentName:"ul"},"Markdown with side-by-side live rendering"),Object(b.b)("li",{parentName:"ul"},"Option to view the HTML source of the rendered markdown "),Object(b.b)("li",{parentName:"ul"},"Option to overwrite the note text with the contents of a text file on local storage"),Object(b.b)("li",{parentName:"ul"},"Option to download the plain note text as a text file to save on local storage"),Object(b.b)("li",{parentName:"ul"},"Option to download the HTML source of the rendered text as a text file to save on local storage")),Object(b.b)("h2",{id:"style-guide"},"Style Guide"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(s.a)({parentName:"tr"},{align:"left"}),"Result"),Object(b.b)("th",Object(s.a)({parentName:"tr"},{align:"left"}),"Markdown"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Bold")),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"*","*","text","*","*"," or ","_","_","text","_","_")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",{parentName:"td"},"Emphasize")),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"*","text","*"," or ","_","text","_")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),Object(b.b)("del",{parentName:"td"},"Strike-through")),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"~","~","text","~","~")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Link"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"[text]","(","http://)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Image"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"![text]","(","http://)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Inline Code")),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"`","code","`")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Code Block"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"`","`","`","language ",Object(b.b)("br",null),"code ",Object(b.b)("br",null),"`","`","`")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Unordered List"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"*"," item ",Object(b.b)("br",null)," - item ",Object(b.b)("br",null)," + item")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Ordered List"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"1. item")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Blockquote"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),">"," quote")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"H1"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"# Heading")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"H2"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"## Heading")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"H3"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"### Heading")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"H4"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"#### Heading")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),"Section Breaks"),Object(b.b)("td",Object(s.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"---")," or ",Object(b.b)("inlineCode",{parentName:"td"},"***"))))),Object(b.b)("h2",{id:"tables"},"Tables"),Object(b.b)("p",null,"Colons can be used to align columns.",Object(b.b)("br",{parentName:"p"}),"\n","Copy this into your editor to see what it creates:"),Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{}),"| Tables           |      Are      |   Cool    |\n| ---------------- | :-----------: | --------: |\n| col 2 is         |   centered    |    \\$149   |\n| col 3 is         | right-aligned |    \\$4.17  |\n| privacy is       |    neat       |    \\$2.48  |\n| rows don't need to  |be pretty|     what? |\n| the last line is | unnecessary   |   really?\n| one more         |    row        |   Yay! \ud83d\ude06\n")),Object(b.b)("h2",{id:"katex"},Object(b.b)("span",Object(s.a)({parentName:"h2"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"K"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.68333em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.904999em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"T"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.46782999999999997em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.7845em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"E")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),Object(b.b)("span",{parentName:"span"})))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"X")))))))),Object(b.b)("p",null,"The Markdown Math editor requires double dollar signs. For example, ",Object(b.b)("inlineCode",{parentName:"p"},"$$\\int_0^\\infty f(x)dx$$")," or ",Object(b.b)("inlineCode",{parentName:"p"},"$$\\pi$$")," should yield ",Object(b.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("msubsup",{parentName:"mrow"},Object(b.b)("mo",{parentName:"msubsup"},"\u222b"),Object(b.b)("mn",{parentName:"msubsup"},"0"),Object(b.b)("mi",Object(s.a)({parentName:"msubsup"},{mathvariant:"normal"}),"\u221e")),Object(b.b)("mi",{parentName:"mrow"},"f"),Object(b.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(b.b)("mi",{parentName:"mrow"},"x"),Object(b.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(b.b)("mi",{parentName:"mrow"},"d"),Object(b.b)("mi",{parentName:"mrow"},"x")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\int_0^\\infty f(x)dx")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"1.215112em",verticalAlign:"-0.35582em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mop"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0005599999999999772em"}}),"\u222b"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.8592920000000001em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.34418em",marginLeft:"-0.19445em",marginRight:"0.05em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"0"))),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.2579000000000002em",marginRight:"0.05em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"\u221e")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.35582em"}}),Object(b.b)("span",{parentName:"span"})))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.10764em"}}),"f"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"d"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x")))))," and ",Object(b.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mi",{parentName:"mrow"},"\u03c0")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\pi")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.03588em"}}),"\u03c0"))))),"."),Object(b.b)("p",null,"To use Display Mode in the KaTeX, use double dollar signs on new lines. For example,"),Object(b.b)("pre",null,Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-latex"}),"Text\n\n$$\n\\int_0^\\infty f(x)dx\n$$\n\nMore Text\n")),Object(b.b)("p",null,"should yield:"),Object(b.b)("p",null,"Text"),Object(b.b)("div",{className:"math math-display"},Object(b.b)("span",Object(s.a)({parentName:"div"},{className:"katex-display"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("msubsup",{parentName:"mrow"},Object(b.b)("mo",{parentName:"msubsup"},"\u222b"),Object(b.b)("mn",{parentName:"msubsup"},"0"),Object(b.b)("mi",Object(s.a)({parentName:"msubsup"},{mathvariant:"normal"}),"\u221e")),Object(b.b)("mi",{parentName:"mrow"},"f"),Object(b.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(b.b)("mi",{parentName:"mrow"},"x"),Object(b.b)("mo",Object(s.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(b.b)("mi",{parentName:"mrow"},"d"),Object(b.b)("mi",{parentName:"mrow"},"x")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\int_0^\\infty f(x)dx")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"2.326242em",verticalAlign:"-0.9119499999999999em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mop"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011249999999999316em"}}),"\u222b"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"msupsub"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"1.414292em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-1.7880500000000001em",marginLeft:"-0.44445em",marginRight:"0.05em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"0"))),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-3.8129000000000004em",marginRight:"0.05em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mtight"}),"\u221e")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.9119499999999999em"}}),Object(b.b)("span",{parentName:"span"})))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault",style:{marginRight:"0.10764em"}}),"f"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mopen"}),"("),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mclose"}),")"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"d"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord mathdefault"}),"x")))))),Object(b.b)("p",null,"More Text"),Object(b.b)("h3",{id:"katex-tables"},Object(b.b)("span",Object(s.a)({parentName:"h3"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"K"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.68333em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.904999em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"T"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.46782999999999997em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.7845em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"E")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),Object(b.b)("span",{parentName:"span"})))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"X")))))))," Tables"),Object(b.b)("p",null,"Please see ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://katex.org/docs/supported.html"}),"here")," and ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://katex.org/docs/support_table.html"}),"here")," for tables of all the functions and symbols that ",Object(b.b)("span",Object(s.a)({parentName:"p"},{className:"math math-inline"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-mathml"}),Object(b.b)("math",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(b.b)("semantics",{parentName:"math"},Object(b.b)("mrow",{parentName:"semantics"},Object(b.b)("mtext",{parentName:"mrow"},"KaTeX")),Object(b.b)("annotation",Object(s.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\KaTeX")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"base"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"strut",style:{height:"0.89883em",verticalAlign:"-0.2155em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"K"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.17em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.68333em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.904999em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm mtight sizing reset-size6 size3"}),"A")))))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.15em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord text"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"T"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.1667em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.46782999999999997em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{style:{top:"-2.7845em"}}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"E")))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist-r"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"vlist",style:{height:"0.2155em"}}),Object(b.b)("span",{parentName:"span"})))),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mspace",style:{marginRight:"-0.125em"}})),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"mord textrm"}),"X")))))))," supports."),Object(b.b)("h2",{id:"license"},"License"),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/sn-extensions/math-editor/blob/master/LICENSE"}),"GNU Affero General Public License v3.0")),Object(b.b)("h2",{id:"development"},"Development"),Object(b.b)("p",null,"This editor uses Grunt to compile."),Object(b.b)("h2",{id:"further-resources"},"Further Resources"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(s.a)({parentName:"li"},{href:"https://github.com/sn-extensions/math-editor"}),"GitHub"))))}l.isMDXComponent=!0},199:function(e,a,t){"use strict";t.d(a,"a",(function(){return O})),t.d(a,"b",(function(){return N}));var s=t(0),n=t.n(s);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},b=Object.keys(e);for(s=0;s<b.length;s++)t=b[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(s=0;s<b.length;s++)t=b[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=n.a.createContext({}),l=function(e){var a=n.a.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},O=function(e){var a=l(e.components);return n.a.createElement(r.Provider,{value:a},e.children)},j={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},i=n.a.forwardRef((function(e,a){var t=e.components,s=e.mdxType,b=e.originalType,c=e.parentName,r=p(e,["components","mdxType","originalType","parentName"]),O=l(t),i=s,N=O["".concat(c,".").concat(i)]||O[i]||j[i]||b;return t?n.a.createElement(N,m(m({ref:a},r),{},{components:t})):n.a.createElement(N,m({ref:a},r))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var b=t.length,c=new Array(b);c[0]=i;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,c[1]=m;for(var r=2;r<b;r++)c[r]=t[r];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}i.displayName="MDXCreateElement"}}]);
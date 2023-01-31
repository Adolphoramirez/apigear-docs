"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[8809],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2594:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:7},i="Error Messages",s={unversionedId:"advanced/objectlink/errors",id:"advanced/objectlink/errors",title:"Error Messages",description:"Error can be raised in several places. The error message is always send back to the client with the message type of the original message. The error message is a JSON array with the following format:",source:"@site/docs/advanced/objectlink/errors.md",sourceDirName:"advanced/objectlink",slug:"/advanced/objectlink/errors",permalink:"/docs/advanced/objectlink/errors",draft:!1,editUrl:"https://github.com/apigear-io/apigear-docs/edit/main/docs/advanced/objectlink/errors.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Server Side Signals",permalink:"/docs/advanced/objectlink/signals"},next:{title:"ObjectAPI",permalink:"/docs/category/objectapi"}},l={},c=[{value:"Error Codes",id:"error-codes",level:2},{value:"Invalid Message",id:"invalid-message",level:2},{value:"Invalid Message Type",id:"invalid-message-type",level:2},{value:"No Such Module",id:"no-such-module",level:2},{value:"No Such Object",id:"no-such-object",level:2},{value:"No Such Property",id:"no-such-property",level:2},{value:"No Such Operation",id:"no-such-operation",level:2}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-messages"},"Error Messages"),(0,o.kt)("p",null,"Error can be raised in several places. The error message is always send back to the client with the message type of the original message. The error message is a JSON array with the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[ ERROR, MsgType, RequestID, ErrorCode ]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MsgType"),": integer value of message type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RequestID"),": the request id of the original message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ErrorCode"),": a JSON string value with the error code")),(0,o.kt)("h2",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,"Error codes are string messages starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"olink.error.")," followed by a short description of the error. The following error codes are defined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.invalid_message"),": the message is not a valid JSON array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.invalid_message_type"),": the message type is not a valid integer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.no_such_module"),": the module does not exist"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.no_such_object"),": the object does not exist"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.no_such_property"),": the property does not exist"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"olink.error.no_such_operation"),": the operation does not exist")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Currently it is not possible to add details to the error message. This will be added in a future version.")),(0,o.kt)("h2",{id:"invalid-message"},"Invalid Message"),(0,o.kt)("p",null,"The error message is send if the client sends an invalid message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, 0, 0, "olink.error.invalid_message" ]\n')),(0,o.kt)("h2",{id:"invalid-message-type"},"Invalid Message Type"),(0,o.kt)("p",null,"The error message is send if the client sends an invalid message type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, 0, 0, "olink.error.invalid_message_type" ]\n')),(0,o.kt)("h2",{id:"no-such-module"},"No Such Module"),(0,o.kt)("p",null,"The error message is send if the client tries to link to a non existing module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, LINK, 0, "olink.error.no_such.module" ]\n')),(0,o.kt)("p",null,"This error can also be send during an unlink operation if the module is not linked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, UNLINK, 0, "olink.error.no_such.module" ]\n')),(0,o.kt)("h2",{id:"no-such-object"},"No Such Object"),(0,o.kt)("p",null,"The error message is send if the client tries to link to a non existing object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, LINK, 0, "olink.error.no_such.object" ]\n')),(0,o.kt)("p",null,"This error can also be raised during an unlink operation if the object does not exists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, UNLINK, 0, "olink.error.no_such.object" ]\n')),(0,o.kt)("h2",{id:"no-such-property"},"No Such Property"),(0,o.kt)("p",null,"The error message is send if the client tries to set a property on a non existing property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, SET_PROPERTY, 0, "olink.error.no_such.property" ]\n')),(0,o.kt)("h2",{id:"no-such-operation"},"No Such Operation"),(0,o.kt)("p",null,"The error message is send if the client tries to invoke a non existing operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ ERROR, INVOKE, 0, "olink.error.no_such.operation" ]\n')))}d.isMDXComponent=!0}}]);
parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var b;function d(){var e,t,n=document.querySelector("#category"),o=document.querySelector("#searchTerm"),r=document.querySelector("button"),a=document.querySelector("main"),c=n.value,l="";function s(){if(""===o.value.trim())t=e,u();else{for(var n=o.value.trim().toLowerCase(),r=0;r<e.length;r++)-1!==e[r].name.indexOf(n)&&t.push(e[r]);u()}}function u(){for(;a.firstChild;)a.removeChild(a.firstChild);if(0===t.length){var e=document.createElement("p");e.textContent="No results to display!",a.appendChild(e)}else for(var n=0;n<t.length;n++)i(t[n])}function i(e){var t="images/"+e.image;console.log(t),fetch(t).then(function(t){t.ok?t.blob().then(function(t){var n=URL.createObjectURL(t);console.log(n),function(e,t){var n=document.createElement("section"),o=document.createElement("h2"),r=document.createElement("p"),c=document.createElement("img");n.setAttribute("class",t.type),o.textContent=t.name.replace(t.name.charAt(0),t.name.charAt(0).toUpperCase()),r.textContent="$"+t.price.toFixed(2),c.src=e,c.alt=t.name;try{c.onload=function(){window.URL.revokeObjectURL(c.src),console.log("revoke")}}catch(l){console.log("ERROR",l)}a.appendChild(n),n.appendChild(o),n.appendChild(r),n.appendChild(c),console.log("has load here")}(n,e)}):console.log("Network request for \""+e.name+"\" image failed with response "+t.status+": "+t.statusText)})}t=b,u(),e=[],t=[],r.onclick=function(r){if(r.preventDefault(),e=[],t=[],n.value===c&&o.value.trim()===l)return;if(c=n.value,l=o.value.trim(),"All"===n.value)e=b,s();else{for(var a=n.value.toLowerCase(),u=0;u<b.length;u++)b[u].type===a&&e.push(b[u]);s()}}}fetch("products.json").then(function(e){e.ok?e.json().then(function(e){b=e,d()}):console.log("Network request for products.json failed with response "+e.status+": "+e.statusText)});return{"NnrA":{}};});
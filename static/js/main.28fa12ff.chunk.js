(this.webpackJsonpomtimistic_frontend=this.webpackJsonpomtimistic_frontend||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),n=t(6),s=t.n(n),r=(t(12),t(13),t(1)),m=t(2),c=t(4),o=t(3),u=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"site-mobile-menu site-navbar-target"},l.a.createElement("div",{className:"site-mobile-menu-header"},l.a.createElement("div",{className:"site-mobile-menu-close mt-4"},l.a.createElement("span",{className:"icon-close2 js-menu-toggle"}))),l.a.createElement("div",{className:"site-mobile-menu-body"})),l.a.createElement("header",{className:"header-bar d-flex d-lg-block align-items-center site-navbar-target","data-aos":"fade-right"},l.a.createElement("div",{className:"site-logo"},l.a.createElement("a",{href:"index.html"},"Omtimistic")),l.a.createElement("div",{className:"d-inline-block d-lg-none ml-md-0 ml-auto py-3",style:{position:"absoute",top:"43px"}},l.a.createElement("a",{href:"#",className:"site-menu-toggle js-menu-toggle text-white"},l.a.createElement("span",{className:"icon-menu h3"}))),l.a.createElement("div",{className:"main-menu"},l.a.createElement("ul",{className:"js-clone-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"#section-home",className:"nav-link"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section-photos",className:"nav-link"},"Artworks")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section-bio",className:"nav-link"},"About Myself")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section-contact",className:"nav-link"},"Reach Out"))),l.a.createElement("ul",{className:"social js-clone-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:""},l.a.createElement("span",{className:"icon-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"icon-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"icon-instagram"})))))))}}]),t}(i.Component),d=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"site-section-hero bg-image",style:{backgroundImage:"url(".concat("/images/sign.JPG",")")},"data-stellar-background-ratio":"0.5",id:"section-home"},l.a.createElement("div",{className:"row justify-content-center align-items-center"},l.a.createElement("div",{className:"col-12 col-md-7 text-center"},l.a.createElement("h1",{className:"text-white heading text-uppercase","data-aos":"fade-up"},"Inking Ideas"),l.a.createElement("p",{className:"lead text-white mb-5","data-aos":"fade-up","data-aos-delay":"100"},'Art and creativity have always gone hand in hand. Scott Adams rightly says, "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep". Creativity starts with an idea. With the tools we have today, we don\'t really need ink for inking ideas. The digital era has provided artists with immense opportunities to realize their thoughts, and mould their ideas into arbitrarily brilliant shapes and colours. Inking ideas is a huge collection of such thoughts and creative ideas that I have poured over screen, canvas or even paper. Here at inking ideas, I also accept orders for commissioned artworks. The creations will be posted only with your consent. Anything and everything is welcome, be it a picture with your family, you hiking the mountains, surfing the oceans, caressing your pets, memorable moments with your loved ones, or selfies with your favourite superstars. Inking ideas, together!'),l.a.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100"},l.a.createElement("a",{href:"#section-contact",className:"btn btn-primary btn-md smoothscroll"},"Contact Me")))))}}]),t}(i.Component),h=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-11 col-md-12 text-center py-5"},l.a.createElement("p",null,"Copyright \xa9 ",l.a.createElement("span",{style:{color:"#df0e62"}},"Omtimistic")," ",(new Date).getFullYear()," All rights reserved | Designed By ",l.a.createElement("span",{style:{color:"#df0e62"}},"Smit D Gor"))))}}]),t}(i.Component),g=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).state={fname:"",lname:"",subject:"",email:"",message:""},i}return Object(m.a)(t,[{key:"onFirstNameChange",value:function(e){this.setState({fname:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({lname:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),fetch("https://smit36.github.io/omtimistic_backend/email",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(alert("Message Sent."),a.resetForm()):"fail"===e.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){document.getElementsById("contact-form").reset()}},{key:"render",value:function(){return l.a.createElement("div",{className:"site-section darken-bg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-10 col-md-8"},l.a.createElement("h2",{className:"text-white mb-5 heading",id:"section-contact"},"Contact"),l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-md-6 mb-3 mb-md-0"},l.a.createElement("label",{className:"text-white",htmlFor:"fname"},"First Name"),l.a.createElement("input",{type:"text",id:"fname",className:"form-control",value:this.state.fname,onChange:this.onFirstNameChange.bind(this)})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{className:"text-white",htmlFor:"lname"},"Last Name"),l.a.createElement("input",{type:"text",id:"lname",className:"form-control",value:this.state.lname,onChange:this.onLastNameChange.bind(this)}))),l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"text-white",htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",className:"form-control",value:this.state.email,onChange:this.onEmailChange.bind(this)}))),l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"text-white",htmlFor:"subject"},"Subject"),l.a.createElement("input",{type:"subject",id:"subject",className:"form-control",value:this.state.subject,onChange:this.onSubjectChange.bind(this)}))),l.a.createElement("div",{className:"row form-group mb-5"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",{className:"text-white",htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",value:this.state.message,onChange:this.onMessageChange.bind(this),id:"message",cols:"30",rows:"2",className:"form-control",placeholder:"Write your notes or questions here..."}))),l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("input",{type:"submit",value:"Send Message",className:"btn btn-primary btn-md text-white"}))))))))}}]),t}(i.Component),p=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={images:[{id:1,url:"images/srk.JPG"},{id:2,url:"images/amitabh.JPG"},{id:3,url:"images/cr7.JPG"},{id:4,url:"images/sachin.JPG"},{id:5,url:"images/saif.JPG"},{id:6,url:"images/joker.JPG"},{id:7,url:"images/shiv.JPG"},{id:8,url:"images/bachchan.JPG"},{id:9,url:"images/Irfaan.JPG"},{id:10,url:"images/Welcome.JPG"},{id:11,url:"images/Ayushmaan.JPG"},{id:12,url:"images/angelina.JPG"},{id:13,url:"images/angira.JPG"},{id:14,url:"images/disney.JPG"},{id:15,url:"images/ark.JPG"},{id:16,url:"images/cb.JPG"},{id:17,url:"images/don2.JPG"},{id:18,url:"images/fnf.JPG"},{id:19,url:"images/hawkeye.JPG"},{id:20,url:"images/herapheri.JPG"},{id:21,url:"images/hritik.JPG"},{id:22,url:"images/ironsrk.JPG"},{id:23,url:"images/modi.JPG"},{id:24,url:"images/kb.JPG"},{id:25,url:"images/maa.JPG"},{id:26,url:"images/panida.JPG"},{id:27,url:"images/rk.JPG"},{id:28,url:"images/ramospique.JPG"},{id:29,url:"images/sholay.JPG"},{id:30,url:"images/Shraddha.JPG"},{id:31,url:"images/smit.JPG"},{id:32,url:"images/thehangover.JPG"},{id:33,url:"images/witcher.JPG"},{id:34,url:"images/3idiots.JPG"},{id:35,url:"images/a1.JPG"},{id:36,url:"images/a2.JPG"},{id:37,url:"images/a3.JPG"},{id:38,url:"images/a4.JPG"},{id:39,url:"images/a5.JPG"},{id:40,url:"images/a6.JPG"},{id:41,url:"images/a7.JPG"},{id:42,url:"images/a8.JPG"},{id:43,url:"images/a9.JPG"},{id:44,url:"images/a10.JPG"},{id:45,url:"images/a11.JPG"},{id:46,url:"images/a12.JPG"},{id:47,url:"images/a13.JPG"},{id:48,url:"images/a14.JPG"},{id:49,url:"images/a15.JPG"},{id:50,url:"images/a16.JPG"},{id:52,url:"images/a18.JPG"},{id:53,url:"images/a19.JPG"},{id:54,url:"images/a20.JPG"},{id:55,url:"images/a21.JPG"},{id:56,url:"images/a22.JPG"},{id:57,url:"images/a23.JPG"},{id:58,url:"images/a24.JPG"},{id:59,url:"images/a25.JPG"},{id:60,url:"images/a26.JPG"},{id:61,url:"images/a27.JPG"},{id:62,url:"images/a28.JPG"},{id:63,url:"images/a29.JPG"}]},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"row align-items-stretch photos",id:"section-photos"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"row align-items-stretch"},this.state.images.map((function(e){return l.a.createElement("div",{className:"col-12 col-md-6 col-lg-4","data-aos":"fade-up","data-aos-delay":"100"},l.a.createElement("a",{href:e.url,key:e.id,className:"d-block photo-item","data-fancybox":"gallery"},l.a.createElement("img",{src:e.url,key:e.id,alt:"Image",className:"img-fluid"}),l.a.createElement("div",{className:"photo-text-more"},l.a.createElement("span",{className:"icon icon-search"}))))})))))}}]),t}(i.Component),E=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"site-section darken-bg",id:"section-bio"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-10 col-md-8"},l.a.createElement("h2",{className:"heading text-uppercase text-white"},"About Myself"),l.a.createElement("figure",{className:"mb-5","data-aos":"fade-up"},l.a.createElement("img",{src:"images/person_3.jpg",alt:"Image",className:"img-fluid w-50 rounded"})),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"100"},l.a.createElement("h2",{className:"text-white"},"Hi I'm Om"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam a velit. Harum eligendi quod reiciendis quos ullam libero est dolor,",l.a.createElement("a",{href:"#"},"corporis dolores assumenda"),", delectus, quidem voluptatibus dolorum temporibus enim!"),l.a.createElement("p",null,"Neque facilis soluta, accusantium quaerat, adipisci porro animi, hic fugiat id vero placeat dolorem accusamus sapiente odio consequatur debitis beatae eius quos alias. In recusandae magnam quis ipsum, asperiores mollitia!"),l.a.createElement("h3",{className:"text-white mt-5"},"Photographer for 10 years"),l.a.createElement("p",null,"Tempore repudiandae ",l.a.createElement("a",{href:"#"},"rerum numquam iste"),", quibusdam omnis voluptates quaerat veniam neque odit sit vel dolores. Optio eveniet ex laborum similique inventore sapiente tenetur. Ipsam aliquam esse voluptate qui reiciendis. Harum."),l.a.createElement("div",{className:"d-block d-md-flex mt-5"},l.a.createElement("div",{className:"mr-md-auto mr-2"},l.a.createElement("ul",{className:"ul-check list-unstyled success"},l.a.createElement("li",null,"Optio eveniet ex laborum"),l.a.createElement("li",null,"Inventore sapiente tenetur"),l.a.createElement("li",null,"Ipsam aliquam esse"))),l.a.createElement("div",{className:"mr-md-auto"},l.a.createElement("ul",{className:"ul-check list-unstyled success"},l.a.createElement("li",null,"Optio eveniet ex laborum"),l.a.createElement("li",null,"Inventore sapiente tenetur"),l.a.createElement("li",null,"Ipsam aliquam esse")))))))))}}]),t}(i.Component),v=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"site-section",id:"section-testimonial"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-10 col-md-8 text-center"},l.a.createElement("h2",{className:"heading text-uppercase text-white"},"Creating Software"),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"owl-carousel slide-one-item home-slider"},l.a.createElement("div",{className:"testimony text-center px-md-4"},l.a.createElement("figure",{className:"mx-auto d-inline-block"},l.a.createElement("img",{src:"images/person_2.jpg",alt:"Image",className:"mx-auto img-fluid w-25 rounded-circle"})),l.a.createElement("p",{className:"text-white"},l.a.createElement("strong",null,"Jean Smith")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur quis facilis quam optio voluptate totam placeat, doloremque. Sit repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit, harum!\u201d"))),l.a.createElement("div",{className:"testimony text-center px-md-4"},l.a.createElement("figure",{className:"mx-auto d-inline-block"},l.a.createElement("img",{src:"images/person_3.jpg",alt:"Image",className:"mx-auto img-fluid w-25 rounded-circle"})),l.a.createElement("p",{className:"text-white"},l.a.createElement("strong",null,"Jean Smith")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur quis facilis quam optio voluptate totam placeat, doloremque. Sit repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit, harum!\u201d"))))))))))}}]),t}(i.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.Fragment,null,l.a.createElement(u,null),l.a.createElement("main",{className:"main-content"},l.a.createElement(d,null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(p,null),l.a.createElement(E,null),l.a.createElement(v,null)),l.a.createElement(g,null),l.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.28fa12ff.chunk.js.map
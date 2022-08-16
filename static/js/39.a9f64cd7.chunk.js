"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[39],{5039:function(A,n,e){e.r(n),e.d(n,{default:function(){return U}});var t,o,i,r,c,s,a,u,d=e(168),f=e(2982),p=e(885),l=e(2791),x=e(5048),h=e(6871),g=e(4289),m=e(6203),E=e(9126),z=e(2426),j=e(4453),Z=(0,z.ZF)({apiKey:"AIzaSyBGW_j0LEud3iyjGJevWLt4TetIscAWlyY",authDomain:"phonebook-381ff.firebaseapp.com",projectId:"phonebook-381ff",storageBucket:"phonebook-381ff.appspot.com",messagingSenderId:"474948812701",appId:"1:474948812701:web:8e56c64208b5d5883ff974"}),b=(0,j.cF)(Z),y=e(5984),V=e(9085),v=e(9156),B=e(6444),q=e(4407),K=e(3331),w=e(7574),O=e(3541),T=e(5633),N=e(3329),F=B.ZP.div(t||(t=(0,d.Z)(["\nheight: 100%;\nposition: relative;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nmargin: 0 auto;\nbackground-color: white;\nbackground-image: url(",");\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: contain;\n"])),w),Q=B.ZP.img(o||(o=(0,d.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 150px;\nheight: 190px;\nborder-radius: ",";\nbackground-color: transparent;\n  @media (",") {\n    width: 190px;\n    height: 230px;\n  };\n"])),(function(A){return A.theme.radii.normal}),v.A.tablet),k=B.ZP.input(i||(i=(0,d.Z)(["\nposition: absolute;\ntop: 0;\nright: 0;\ndisplay: block;\nwidth: 50px;\nheight: 50px;\nopacity: 0;\n  &:hover{\n    cursor: pointer;\n  };\n"]))),P=B.ZP.div(r||(r=(0,d.Z)(["\nz-index: 10;\nposition: absolute;\nbottom: -10px;\nright: -10px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 50px;\nheight: 50px;\nborder-radius: ",";\nborder: none;\nbackground-color: transparent;\nbackground-image: url(",");\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: contain;\n  &:hover ","{\n    cursor: pointer;\n  };\n"])),(function(A){return A.theme.radii.round}),K,k),W=B.ZP.div(c||(c=(0,d.Z)(["\nposition: relative;\nmargin: ","px 0;\n"])),(function(A){return A.theme.space[3]})),H=B.ZP.li(s||(s=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\n"]))),M=B.ZP.span(a||(a=(0,d.Z)(["\npadding-left: ","px;\nfont-size: ",";\nfont-weight: ",";\ncolor: ",";\n"])),(function(A){return A.theme.space[2]}),(function(A){return A.theme.fontSizes.s}),(function(A){return A.theme.fontWeights.semibold}),(function(A){return A.theme.colors.primary})),I=B.ZP.span(u||(u=(0,d.Z)(["\nmargin-bottom: ","px;\npadding-left: ","px;\nfont-size: ",";\nfont-weight: ",";\n"])),(function(A){return A.theme.space[0]}),(function(A){return A.theme.space[2]}),(function(A){return A.theme.fontSizes.l}),(function(A){return A.theme.fontWeights.semibold})),U=function(){var A,n=(0,T.g0)(),e=(0,p.Z)(n,2),t=e[0],o=e[1].isSuccess,i=(0,l.useState)(null),r=(0,p.Z)(i,2),c=r[0],s=r[1],a=(0,l.useState)([]),u=(0,p.Z)(a,2),d=u[0],z=u[1],Z=(0,x.v9)(g.Z.getUserName),v=(0,x.v9)(g.Z.getUserEmail),B=(0,l.useState)(null),K=(0,p.Z)(B,2),w=K[0],U=K[1],S=(0,x.I0)(),G=(0,h.TH)(),C=(0,h.s0)();return(0,l.useEffect)((function(){if(v){var A=(0,j.iH)(b,"".concat(v,"/images/"));(0,j.aF)(A).then((function(A){A.items.forEach((function(A){(0,j.Jt)(A).then((function(A){z((function(n){return[A].concat((0,f.Z)(n))}))}))}))}))}}),[v]),(0,l.useEffect)((function(){if(c){var A=(0,j.iH)(b,"".concat(v,"/images/").concat(c.name+(0,y.x0)()));(0,j.KV)(A,c).then((function(A){V.Am.success("Image Uploaded"),(0,j.Jt)(A.ref).then((function(A){z((function(n){return[A].concat((0,f.Z)(n))}))}))}))}}),[v,c]),(0,l.useEffect)((function(){o&&S(O.Z.actions.signout())}),[S,o]),(0,l.useEffect)((function(){var A,n;null===w&&U(null!==(A=null===G||void 0===G||null===(n=G.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/")}),[w,null===G||void 0===G||null===(A=G.state)||void 0===A?void 0:A.from]),(0,N.jsx)(F,{children:(0,N.jsxs)(m.xu,{children:[(0,N.jsx)(m.kq,{onClick:function(){return C(w)},children:(0,N.jsx)(E.aEb,{})}),(0,N.jsx)(m.Dx,{children:"Personal Info"}),(0,N.jsxs)(W,{children:[d.length>0?(0,N.jsx)(Q,{src:d[0],alt:"avatar"}):(0,N.jsx)(Q,{src:q,alt:"noAvatar"}),(0,N.jsx)(P,{children:(0,N.jsx)(k,{type:"file",onChange:function(A){return s(A.target.files[0])}})})]}),(0,N.jsxs)(m.aV,{children:[(0,N.jsxs)(H,{children:[(0,N.jsx)(M,{children:"Name"}),(0,N.jsx)(I,{children:Z})]}),(0,N.jsxs)(H,{children:[(0,N.jsx)(M,{children:"Email"}),(0,N.jsx)(I,{children:v})]})]}),(0,N.jsx)(m.C9,{type:"button",onClick:function(){return t()},children:"Log out"})]})})}},3331:function(A,n,e){A.exports=e.p+"static/media/addPhoto.a8b24ef9dc2a48fd260b.jpg"},4407:function(A){A.exports="data:image/jpeg;base64,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"},7574:function(A,n,e){A.exports=e.p+"static/media/profileBack.5434d40a2b43557b7bd8.jpg"}}]);
//# sourceMappingURL=39.a9f64cd7.chunk.js.map
"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[133],{5598:function(e,r,n){n.d(r,{B:function(){return h}});var a=n(1413),s=n(885),t=n(2791),o=n(5705),i=n(2797),l=n(5237),d=n(9085),u=n(6355),c=n(6856),m=n(6203),p=n(3985),v=n(2576),x=n(3329),h=function(e){var r=e.onSubmit,n=e.type,h=e.error,j=e.register,f=void 0!==j&&j,y=(0,t.useState)(!1),Z=(0,s.Z)(y,2),w=Z[0],b=Z[1];(0,t.useEffect)((function(){var e,r,n;400===(null===h||void 0===h?void 0:h.status)&&("MongoError"===(null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.name)&&d.Am.error("User already exists! Try again!"),null!==h&&void 0!==h&&null!==(r=h.data)&&void 0!==r&&r.message&&d.Am.error("".concat(null===h||void 0===h||null===(n=h.data)||void 0===n?void 0:n.message)),f||d.Am.error("Incorrect email or password. Try again!"));404===(null===h||void 0===h?void 0:h.status)&&d.Am.error("\u0421onnection error 404! Try later!"),500===(null===h||void 0===h?void 0:h.status)&&d.Am.error("Server error! Try again!")}),[h,f]);var g=f?i.Ry((0,a.Z)((0,a.Z)((0,a.Z)({},l.oe),l.TN),{},{name:i.Z_().required("Please, enter your name")})):i.Ry((0,a.Z)((0,a.Z)({},l.oe),l.TN));return(0,x.jsx)(o.J9,{initialValues:{name:"",email:"",password:""},validationSchema:g,onSubmit:r,children:(0,x.jsxs)(m.Gq,{noValidate:!0,children:[f&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m.__,{htmlFor:"name",children:[(0,x.jsx)(u.Bj$,{}),"Name"]}),(0,x.jsx)(m.yt,{type:"name",name:"name"}),(0,x.jsx)(m.Xq,{name:"name"})]}),(0,x.jsxs)(m.__,{htmlFor:"email",children:[(0,x.jsx)(c.pFf,{}),"Email"]}),(0,x.jsx)(m.yt,{type:"email",name:"email"}),(0,x.jsx)(m.Xq,{name:"email"}),(0,x.jsx)(m.__,{htmlFor:"password",children:"Password"}),(0,x.jsxs)(m.SP,{children:[(0,x.jsx)(m.yt,{type:w?"text":"password",name:"password"}),(0,x.jsx)(p.Z,{placement:"top",overlay:(0,x.jsx)(v.Z,{id:"password button tooltip",children:"show password"}),children:(0,x.jsx)(m.pn,{onClick:function(){b(!w)},type:"button",children:(0,x.jsx)(u.z5B,{size:30})})})]}),(0,x.jsx)(m.Xq,{name:"password"}),(0,x.jsx)(m.KM,{type:"submit",children:n})]})})}},8133:function(e,r,n){n.r(r);var a=n(885),s=n(2791),t=n(5048),o=n(3541),i=n(5633),l=n(5598),d=n(6203),u=n(3329);r.default=function(){var e=(0,i.DW)(),r=(0,a.Z)(e,2),n=r[0],c=r[1],m=c.data,p=c.error,v=(0,t.I0)();(0,s.useEffect)((function(){null!==m&&void 0!==m&&m.user&&v(o.Z.actions.signin(m))}),[m,v]);return(0,u.jsx)(d.uL,{children:(0,u.jsxs)(d.n5,{children:[(0,u.jsx)(d.Dx,{children:"Create your free account!"}),(0,u.jsx)(l.B,{onSubmit:function(e,r){var a=r.resetForm;n(e),a()},error:p,register:!0,type:"Sign Up"})]})})}},5237:function(e,r,n){n.d(r,{TN:function(){return o},oe:function(){return t},cx:function(){return s}});var a=n(2797),s={number:a.Z_().required().test({test:function(e){return/^[\d+][\d()-]{8,16}\d$/i.test(e)}})},t={password:a.Z_().required("Please, enter your password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,"Must contain 8 or more characters: uppercase, lowercase letters, a number and a special case character")},o={email:a.Z_().email("Invalid email address format").required("Please, enter your email")}}}]);
//# sourceMappingURL=133.a629b686.chunk.js.map
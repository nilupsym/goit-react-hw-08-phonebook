(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{95:function(e,t,n){"use strict";n.r(t);var a=n(6),o=n(36),r=n(37),i=n(39),l=n(38),s=n(0),c=n(10),b=n(24),u=n(1),h={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},button:{marginTop:"20px",padding:"10px",textAlign:"left",width:"fit-content",backgroundColor:"rgb(199, 239, 245)",border:"none",borderRadius:"4px",outline:"none",transition:"background-color 250ms ease-in-out"},"& hover":{cursor:"pointer",backgroundColor:"rgb(88, 188, 211)",color:"#fff"}},p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,o=n.name,r=n.value;e.setState(Object(a.a)({},o,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Login page"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,style:h.form,autoComplete:"off",children:[Object(u.jsxs)("label",{style:h.label,children:["E-mail",Object(u.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(u.jsxs)("label",{style:h.label,children:["Password",Object(u.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(u.jsx)("button",{style:h.button,type:"submit",children:"Login"})]})]})}}]),n}(s.Component),d={onLogin:b.a.logIn};t.default=Object(c.b)(null,d)(p)}}]);
//# sourceMappingURL=login-page.e8c71d27.chunk.js.map
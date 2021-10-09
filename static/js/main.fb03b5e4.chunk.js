(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},13:function(t,e,n){t.exports={container:"Container_container__3RIox"}},2:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",button:"Form_button__243jh",input:"Form_input__2ESfd"}},23:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),s=n.n(c),i=(n(19),n(14)),o=n(5),l=n(6),u=n(8),b=n(7),m=n(12),h=n(4),d=n.n(h),j=n(25),f=n(2),p=n.n(f),_=n(0),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(j.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(_.jsxs)("label",{className:p.a.label,children:["Name",Object(_.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(_.jsxs)("label",{className:p.a.label,children:["Number",Object(_.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(_.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(r.a.Component);O.protoType={onSubmit:d.a.func};var C=O,x=n(3),v=n.n(x),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(_.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(_.jsxs)("li",{className:v.a.item,children:[Object(_.jsxs)("span",{className:v.a.name,children:[t.name,":"]}),Object(_.jsx)("span",{className:v.a.tell,children:t.number}),Object(_.jsx)("button",{className:v.a.button,type:"button",id:t.id,onClick:function(){return n(t.id)},children:"remove"})]},t.id)}))})},y=n(10),F=n.n(y),N=function(t){var e=t.filter,n=t.onChangeFilter;return Object(_.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:F.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",required:!0,onChange:n,value:e})]})};N.protoType={filter:d.a.string,onChangeFilter:d.a.func};var S=N,A=n(13),L=n.n(A);var k=function(t){var e=t.children;return Object(_.jsx)("div",{className:L.a.container,children:e})},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.setState((function(t){return t.contacts.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts!")):{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value.toLocaleLowerCase()})},t.onFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(k,{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(C,{onSubmit:this.formSubmitHandler}),Object(_.jsx)("h2",{children:"Contacts"}),0!==this.state.contacts.length&&Object(_.jsx)(S,{filter:this.state.filter,onChangeFilter:this.changeFilter}),""===this.state.filter?Object(_.jsx)(g,{contacts:this.state.contacts,deleteContact:this.deleteContact}):Object(_.jsx)(g,{contacts:this.onFilter(),deleteContact:this.deleteContact})]})}}]),n}(r.a.Component),Z=w;s.a.render(Object(_.jsx)(Z,{}),document.querySelector("#root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",name:"ContactList_name__2WLgA",tell:"ContactList_tell__2eCh7",button:"ContactList_button__1RuFy"}}},[[23,1,2]]]);
//# sourceMappingURL=main.fb03b5e4.chunk.js.map
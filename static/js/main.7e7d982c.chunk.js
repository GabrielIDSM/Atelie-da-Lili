(this.webpackJsonpproject_atelie=this.webpackJsonpproject_atelie||[]).push([[0],Array(30).concat([function(e,a,t){e.exports=t(99)},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/ProjectSClouds.3ea7ec07.png"},function(e,a,t){e.exports=t.p+"static/media/Slides.bc0384d2.gif"},function(e,a,t){e.exports=t.p+"static/media/Elogios.bac056a0.gif"},function(e,a,t){e.exports=t.p+"static/media/1_1_1.e150bce6.png"},function(e,a,t){e.exports=t.p+"static/media/1_1_2.c8ef1600.png"},function(e,a,t){e.exports=t.p+"static/media/1_2_1.815a3e2f.png"},function(e,a,t){e.exports=t.p+"static/media/1_2_2.85904c71.png"},function(e,a,t){e.exports=t.p+"static/media/1_3_1.9f1b2cac.png"},function(e,a,t){e.exports=t.p+"static/media/1_3_2.b9909fa8.png"},function(e,a,t){e.exports=t.p+"static/media/1_4_1.a21f5e72.png"},function(e,a,t){e.exports=t.p+"static/media/1_4_2.65b1a80f.png"},function(e,a,t){e.exports=t.p+"static/media/1_5_1.4c89dbe2.png"},function(e,a,t){e.exports=t.p+"static/media/1_5_2.0ee3c46f.png"},function(e,a,t){e.exports=t.p+"static/media/1_6_1.ada89826.png"},function(e,a,t){e.exports=t.p+"static/media/1_6_2.62dde5a0.png"},function(e,a,t){e.exports=t.p+"static/media/1_7_1.aa7eb3b0.png"},function(e,a,t){e.exports=t.p+"static/media/1_7_2.64c9643c.png"},function(e,a,t){e.exports=t.p+"static/media/1_8_1.35d78516.png"},function(e,a,t){e.exports=t.p+"static/media/1_8_2.7d487fda.png"},function(e,a,t){e.exports=t.p+"static/media/2_1_1.03bae77a.png"},function(e,a,t){e.exports=t.p+"static/media/2_1_2.2a812ca2.png"},function(e,a,t){e.exports=t.p+"static/media/2_2_1.4f62e56e.png"},function(e,a,t){e.exports=t.p+"static/media/2_2_2.2ddaf701.png"},function(e,a,t){e.exports=t.p+"static/media/2_3_1.1fa361bb.png"},function(e,a,t){e.exports=t.p+"static/media/2_3_2.a446b5ac.png"},function(e,a,t){e.exports=t.p+"static/media/2_4_1.485df87c.png"},function(e,a,t){e.exports=t.p+"static/media/2_4_2.f800eb31.png"},function(e,a,t){e.exports=t.p+"static/media/2_5_1.396a82a8.png"},function(e,a,t){e.exports=t.p+"static/media/2_5_2.8d0f9c09.png"},function(e,a,t){e.exports=t.p+"static/media/2_6_1.2b51647e.png"},function(e,a,t){e.exports=t.p+"static/media/2_6_2.a49663a3.png"},function(e,a,t){e.exports=t.p+"static/media/2_7_1.8a40d9a3.png"},function(e,a,t){e.exports=t.p+"static/media/2_7_2.98a58780.png"},function(e,a,t){e.exports=t.p+"static/media/3_1_1.89a29322.png"},function(e,a,t){e.exports=t.p+"static/media/3_1_2.ec1a2ceb.png"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(28),c=t.n(r),s=t(3),o=t(4),m=t(6),i=t(5),u=t(15),p=t.n(u),d=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).categoryOne=function(e){var a=e.target.value;l.setState((function(e){var t=e;return t.Ctg1=parseInt(a),{obj:t}}))},l.categoryTwo=function(e){var a=e.target.value;l.setState((function(e){var t=e;return t.Ctg2=parseInt(a),{obj:t}}))},l.categoryThree=function(e){var a=e.target.value;l.setState((function(e){var t=e;return t.Ctg3=parseInt(a),{obj:t}}))},l.categoryFour=function(e){var a=e.target.value;l.setState((function(e){var t=e;return t.Ctg4=parseInt(a),{obj:t}}))},l.changeCEP=function(e){var a=e.target.value;l.setState((function(e){var t=e;return t.Cep=a,{obj:t}}))},l.submit=function(e){var a,t,n,r,c;l.setState((function(e){var a=e;return a.Result="Processando ...",{obj:a}})),l.setState((function(e){var l=e;return t=l.Ctg1,n=l.Ctg2,r=l.Ctg3,c=l.Ctg4,a=250*parseFloat(l.Ctg1),a+=250*parseFloat(l.Ctg2),a+=280*parseFloat(l.Ctg3),(a+=320*parseFloat(l.Ctg4))>=500&&(a*=.92),l.Cep=l.Cep.replace("-",""),{obj:l}}));var s=0,o={servico:"41106",cepOrigem:"25943509",cepDestino:l.state.Cep.toString(),formato:"1",comprimento:60,altura:25,largura:25,diametro:25,peso:2},m={servico:"41106",cepOrigem:"25943509",cepDestino:l.state.Cep.toString(),formato:"1",comprimento:60,altura:30,largura:25,diametro:25,peso:2};p.a.post("https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete",o).then((function(e){console.log(e),s+=parseFloat(e.data.valor.replace(",","."))*(t+n),p.a.post("https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete",m).then((function(e){console.log(e),s+=parseFloat(e.data.valor.replace(",","."))*(r+c),a+=s,l.setState((function(e){var t=e;return a=Math.round(100*a)/100,t.Result="Valor Total: R$"+a.toString(),{obj:t}}))})).catch((function(e){console.log(e),l.setState((function(e){var a=e;return a.Result="Erro!",{obj:a}}))}))})).catch((function(e){console.log(e),l.setState((function(e){var a=e;return a.Result="Erro!",{obj:a}}))}))},l.state={Ctg1:0,Ctg2:0,Ctg3:0,Ctg4:0,Cep:"",Result:""},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Frete"},n.a.createElement("h1",null,"Simule Sua Compra"),n.a.createElement("h2",null,"Agora voc\xea mesmo pode calcular o valor de sua compra e frete!"),n.a.createElement("h2",null,"Para materiais de pel\xfacia ou pedidos especiais, entre em contato com o Ateli\xea. "),n.a.createElement("h2",null,"Para efetivar a compra, entre em contato com o Ateli\xea. "),n.a.createElement("h2",null,n.a.createElement("b",null,"*")," Valores aproximados"),n.a.createElement("h2",null,n.a.createElement("b",null,"**")," 8% de desconto para compras acima de R$500,00"),n.a.createElement("div",{className:"Frete_Div"},n.a.createElement("div",{className:"Div_Labels"},n.a.createElement("label",{className:"Frete_Label"},"Kit(s) Tipo Cabe\xe7\xe3o"),n.a.createElement("label",{className:"Frete_Label"},"Kit(s) B\xedblia e Cora\xe7\xe3o")),n.a.createElement("div",{className:"Div_Select"},n.a.createElement("select",{className:"Frete_Select",id:"Ctg1",name:"Ctg1",type:"number",value:this.state.Ctg1,onChange:this.categoryOne},n.a.createElement("option",{value:"0"},"0 un."),n.a.createElement("option",{value:"1"},"1 un."),n.a.createElement("option",{value:"2"},"2 un."),n.a.createElement("option",{value:"3"},"3 un."),n.a.createElement("option",{value:"4"},"4 un."),n.a.createElement("option",{value:"5"},"5 un."),n.a.createElement("option",{value:"6"},"6 un."),n.a.createElement("option",{value:"7"},"7 un."),n.a.createElement("option",{value:"8"},"8 un."),n.a.createElement("option",{value:"9"},"9 un."),n.a.createElement("option",{value:"10"},"10 un.")),n.a.createElement("select",{className:"Frete_Select",id:"Ctg2",name:"Ctg2",type:"number",value:this.state.Ctg2,onChange:this.categoryTwo},n.a.createElement("option",{value:"0"},"0 un."),n.a.createElement("option",{value:"1"},"1 un."),n.a.createElement("option",{value:"2"},"2 un."),n.a.createElement("option",{value:"3"},"3 un."),n.a.createElement("option",{value:"4"},"4 un."),n.a.createElement("option",{value:"5"},"5 un."),n.a.createElement("option",{value:"6"},"6 un."),n.a.createElement("option",{value:"7"},"7 un."),n.a.createElement("option",{value:"8"},"8 un."),n.a.createElement("option",{value:"9"},"9 un."),n.a.createElement("option",{value:"10"},"10 un.")))),n.a.createElement("div",{className:"Frete_Div"},n.a.createElement("div",{className:"Div_Labels"},n.a.createElement("label",{className:"Frete_Label"},"Kit(s) Ide Mundo e Guita"),n.a.createElement("label",{className:"Frete_Label"},"Kit(s) Mochila, L\xe1pis e Outros")),n.a.createElement("div",{className:"Div_Select"},n.a.createElement("select",{className:"Frete_Select",id:"Ctg3",name:"Ctg3",type:"number",value:this.state.Ctg3,onChange:this.categoryThree},n.a.createElement("option",{value:"0"},"0 un."),n.a.createElement("option",{value:"1"},"1 un."),n.a.createElement("option",{value:"2"},"2 un."),n.a.createElement("option",{value:"3"},"3 un."),n.a.createElement("option",{value:"4"},"4 un."),n.a.createElement("option",{value:"5"},"5 un."),n.a.createElement("option",{value:"6"},"6 un."),n.a.createElement("option",{value:"7"},"7 un."),n.a.createElement("option",{value:"8"},"8 un."),n.a.createElement("option",{value:"9"},"9 un."),n.a.createElement("option",{value:"10"},"10 un.")),n.a.createElement("select",{className:"Frete_Select",id:"Ctg4",name:"Ctg4",type:"number",value:this.state.Ctg4,onChange:this.categoryFour},n.a.createElement("option",{value:"0"},"0 un."),n.a.createElement("option",{value:"1"},"1 un."),n.a.createElement("option",{value:"2"},"2 un."),n.a.createElement("option",{value:"3"},"3 un."),n.a.createElement("option",{value:"4"},"4 un."),n.a.createElement("option",{value:"5"},"5 un."),n.a.createElement("option",{value:"6"},"6 un."),n.a.createElement("option",{value:"7"},"7 un."),n.a.createElement("option",{value:"8"},"8 un."),n.a.createElement("option",{value:"9"},"9 un."),n.a.createElement("option",{value:"10"},"10 un.")))),n.a.createElement("div",{className:"CEP_Div"},n.a.createElement("label",{className:"CEP_Label"},"CEP"),n.a.createElement("input",{type:"text",value:this.state.Cep,onChange:this.changeCEP})),n.a.createElement("div",{className:"Button_Div"},n.a.createElement("button",{type:"submit",onClick:this.submit},"Calcular")),n.a.createElement("div",{className:"Result_Div"},this.state&&this.state.Result&&n.a.createElement("label",{className:"Result_Label"},this.state.Result)))}}]),t}(l.Component),E=t(10),g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"Bar"},n.a.createElement("ul",{className:"Bar_Navlinks"},n.a.createElement(E.b,{className:"Bar_links",to:"/"},n.a.createElement("li",null,n.a.createElement("label",{className:"Bar_label"},"In\xedcio"))),n.a.createElement(E.b,{className:"Bar_links",to:"/produtos"},n.a.createElement("li",null,n.a.createElement("label",{className:"Bar_label"},"Produtos"))),n.a.createElement(E.b,{className:"Bar_links",to:"/sobre"},n.a.createElement("li",null,n.a.createElement("label",{className:"Bar_label"},"Sobre")))))}}]),t}(l.Component),v=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("img",{className:"Home_Image",src:t(57),alt:"logo"}),n.a.createElement("div",{className:"Home_Component"},n.a.createElement("h1",null,"Ol\xe1, Este \xe9 o Ateli\xea Lili In\xe1cio!"),n.a.createElement("h2",null,"Bem-vindo a este espa\xe7o que \xe9 nosso e foi projetado com muito carinho pra voc\xea! Aqui voc\xea poder\xe1 escolher e sonhar com o seu mascote. E de sonhos eu entendo, pois o ateli\xea nasceu de um sonho!")),n.a.createElement("div",{className:"About_Component"},n.a.createElement("h1",null,"Nossa Hist\xf3ria"),n.a.createElement("h2",null,"Era agosto de 2011 e t\xednhamos idealizado uma chamada evangel\xedstica pelas ruas do nosso Bairro, e ter bonec\xf5es j\xe1 era um desejo. Foi dif\xedcil encontrar quem fizesse, na \xe9poca n\xe3o era t\xe3o comum; e n\xe3o  desmerecendo o trabalho de ningu\xe9m, quando encontramos, o pre\xe7o era inacess\xedvel pra n\xf3s. Quase deixamos nosso sonho pra l\xe1. Um dia [...]"),n.a.createElement(E.b,{to:"/sobre"},n.a.createElement("label",null,"Continuar lendo \u2192"))),n.a.createElement(d,null),n.a.createElement("div",{className:"Contact_Component"},n.a.createElement("h1",null,"Contato"),n.a.createElement("h2",null,"O Ateli\xea preza pelo contato personalizado com os clientes. Para entrar em contato com o Ateli\xea, basta usar um dos seguintes meios:"),n.a.createElement("ul",null,n.a.createElement("li",null,"E-mail: ",n.a.createElement("b",null,"atelieliliinacio@gmail.com")),n.a.createElement("li",null,"Whatsapp: ",n.a.createElement("b",null,"(21) 9 7291-9788")),n.a.createElement("li",null,"Facebook: ",n.a.createElement("b",null,"facebook.com/liliInacio82")))))}}]),l}(l.Component),_=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("div",{className:"Gallery_Slide"},n.a.createElement("div",{className:"Slide_Div"},n.a.createElement("img",{className:"Slide_Img",alt:"Slide",src:t(58)}))),n.a.createElement("div",{className:"Gallery_Component"},n.a.createElement("h1",null,"Mascotes e Kits"),n.a.createElement("h2",null,"Nossa linha de bonecos faz a alegria de adultos e crian\xe7as por onde chega. Isso porque projetamos seus rostinhos para terem tra\xe7os delicados e harmonioso,  de t\xe3o lindos \xe9 dif\xedcil n\xe3o acreditar que n\xe3o  s\xe3o crian\xe7as de verdade."),n.a.createElement("h2",null,"Cada kit cont\xe9m: ",n.a.createElement("b",null,"1 cabe\xe7a, 1 par de sapatos decorados e 1 sacola brinde.")),n.a.createElement(E.b,{to:"/1"},n.a.createElement("label",null,"Fotos \u2192"))),n.a.createElement("div",{className:"Gallery_Component"},n.a.createElement("h1",null,"Mascotes de Vestir"),n.a.createElement("h2",null,"O l\xfadico se comunica com adultos e crian\xe7as. Pensando nisso, criamos esta linha de materiais."),n.a.createElement("h2",null,"Estes materiais foram projetados para humanizar objetos e aproximar o p\xfablico da mensagem que se deseja passar."),n.a.createElement(E.b,{to:"/2"},n.a.createElement("label",null,"Fotos \u2192"))),n.a.createElement("div",{className:"Gallery_Component"},n.a.createElement("h1",null,"Linha mini Ajudante"),n.a.createElement("h2",null,"Pensando neles o tempo todo, fomos os pioneiros em criar mini mascotes pra turminha que queria ajudar tamb\xe9m."),n.a.createElement("h2",null,"Com tamanhos e aberturas especiais para facilitar o uso, temos todos os modelos dispon\xedveis em tamanho baby e at\xe9 sob medida se for o caso!"),n.a.createElement(E.b,{to:"/3"},n.a.createElement("label",null,"Fotos \u2192"))))}}]),l}(l.Component),f=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("img",{className:"Gif_one",src:t(59),alt:"Comentarios"}),n.a.createElement("div",{className:"About_Full_Component"},n.a.createElement("h1",null,"Sobre o Ateli\xea"),n.a.createElement("p",null,"Era agosto de 2011 e t\xednhamos idealizado uma chamada evangel\xedstica pelas ruas do nosso Bairro, e ter bonec\xf5es j\xe1 era um desejo. Foi dif\xedcil encontrar quem fizesse, na \xe9poca n\xe3o era t\xe3o comum; e n\xe3o  desmerecendo o trabalho de ningu\xe9m, quando encontramos, o pre\xe7o era inacess\xedvel pra n\xf3s. Quase deixamos nosso sonho pra l\xe1. Um dia passeando com meus filhos, bati meus olhos naquelas bolas gigantes, recreativas.. E pensei: - \xc9 isso! Farei o molde a partir dela... Gente!  Ficou horr\xedvel, mas foi um sucesso"),n.a.createElement("p",null,"A partir da\xed, fomos  adaptando o modelo at\xe9 ficar melhorzinho rs. Ent\xe3o surge a nossa 1\xb0 cliente no Orkut!!! ( Magna Raimundo,  amiga da ateli\xea at\xe9 hoje). Na mesma procura e sonho. - Por que n\xe3o vender? Fiz um pra ela.. E come\xe7amos a produzir mascotes de vestir ( Mas do tipo cabe\xe7a de fantoche). "),n.a.createElement("p",null,"Este n\xe3o era um modelo original, outras pessoas j\xe1 produziam. At\xe9 que em 2012, a partir do desafio de um amigo, tive uma ideia diferente... E foi assim que criei uma modelagem autoral e totalmente original. N\xe3o demorou muito para que pessoas de quase todo o Brasil e de v\xe1rias partes do mundo se apaixonassem por eles. "),n.a.createElement("h2",null,"Agradecimentos"),n.a.createElement("p",null,"Tenho muita gratid\xe3o por ter participado de tantos sonhos e projetos que mal consigo enumerar! Cantatas, musicais, evangelismo de rua, em tribos ind\xedgenas, comunidades ribeirinhas... E as apresenta\xe7\xf5es que s\xe3o feitas em alas infantis de hospitais por todo o Brasil? Ver o sorriso e alegria dessas crian\xe7as \xe9 extraordin\xe1rio, algo Divino! - Sem palavras! Eu sou TODA gratid\xe3o por fazer parte desse plano maior de alguma forma. ")))}}]),l}(l.Component),b=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("div",{className:"Gallery_Page"},n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(60)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(61)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(62)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(63)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(64)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(65)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(66)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(67)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(68)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(69)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(70)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(71)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(72)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(73)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(74)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(75)})))))}}]),l}(l.Component),N=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("div",{className:"Gallery_Page"},n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(76)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(77)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(78)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(79)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(80)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(81)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(82)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(83)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(84)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(85)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(86)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(87)}))),n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(88)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(89)})))))}}]),l}(l.Component),h=function(e){Object(m.a)(l,e);var a=Object(i.a)(l);function l(){return Object(s.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{className:"Page"},n.a.createElement(g,null),n.a.createElement("div",{className:"Gallery_Page"},n.a.createElement("div",{className:"Gallery_Two_Images"},n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side L",src:t(90)})),n.a.createElement("div",{className:"Gallery_Div_Image"},n.a.createElement("img",{className:"Gallery_Image",alt:"Side R",src:t(91)})))))}}]),l}(l.Component),y=t(1);t(92),t(93),t(94),t(95),t(96),t(97),t(98);var I=function(){return n.a.createElement(E.a,{basename:"/"},n.a.createElement("div",{className:"App"},n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",exact:!0,component:v}),n.a.createElement(y.a,{path:"/produtos",exact:!0,component:_}),n.a.createElement(y.a,{path:"/sobre",exact:!0,component:f}),n.a.createElement(y.a,{path:"/1",exact:!0,component:b}),n.a.createElement(y.a,{path:"/2",exact:!0,component:N}),n.a.createElement(y.a,{path:"/3",exact:!0,component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[30,1,2]]]);
//# sourceMappingURL=main.7e7d982c.chunk.js.map
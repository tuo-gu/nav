let imgs =[//背景轮播
  "https://up.enterdesk.com/edpic/23/0e/40/230e40c640be4866471224009bcd3006.jpg", 
  "https://th.bing.com/th/id/Rf6a99c6a56db28e009787987a2bb6f0d?rik=eO4KbxgComMvow&riu=http%3a%2f%2fpic.netbian.com%2fuploads%2fallimg%2f200219%2f201515-158211451517f1.jpg&ehk=rYlBlglaYdYYIlwa%2fqJgUzNNebnukJepIsSdPEHGjzw%3d&risl=&pid=ImgRaw",
];
let index=Math.round(Math.random()*1);
const showBg=()=>{
  document.body.onload=document.body.style.backgroundImage="url("+imgs[index]+")";
}
showBg();
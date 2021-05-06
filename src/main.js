const $siteList=$('.siteList')
const $lastLi=$siteList.find('li.last')
const x=localStorage.getItem('x')
const xObject=JSON.parse(x)
const hashMap=xObject||[
  {logo:'https://www.acfun.cn/favicon.ico', url:'https://www.acfun.cn/'},
  {logo:'https://www.bilibili.com/favicon.ico', url:'https://www.bilibili.com'},
]
const xhr = new XMLHttpRequest();
const simplifyUrl=(url)=>{
  return url.replace('https://m.','')
            .replace('https://','')
            .replace('http://','')
            .replace('www.','')
            .replace(/\/.*/,'')     
}
const render=()=>{
  $siteList.find('li:not(.last)').remove()//找到所有的li除了last
  hashMap.forEach((node,index)=>{//
        const $li=$(`<li>
          <div class="site">
            <div class="logo">
              <span id="logoText">${simplifyUrl(node.url)[0].toUpperCase()}</span>
              <image class="siteIcon" src="${node.logo}" style="display: none;">
            </div>
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
              <svg class="icon" >
                <use xlink:href="#icon-close"></use>
              </svg>
            </div> 
          </div>  
        </li>`).insertBefore($lastLi)  
      $li.on('click',()=>{
        window.open(node.url)
      })
      $li.on('click','.close',(e)=>{
        e.stopPropagation()
        hashMap.splice(index,1)
        render()
      })
    }
  )
}
render()
$('.addButton')
  .on('click',()=>{
    let url= window.prompt('请输入需要添加的网址：')
    if(url.indexOf('http')!==0){
      url='https://'+url
    }
    hashMap.push({
      logo:`https://${simplifyUrl(url)}/favicon.ico`,
      url:url}
    )
    render()
  })
document.addEventListener("load", function (e) {
  const elem = e.target;
  if (elem.tagName.toLowerCase() == 'img') {
    elem.parentNode.children[1].style.display='block'
    elem.parentNode.children[0].style.display='none'
  }
}, true)
window.onbeforeunload=()=>{//不能存对象，需要变字符串
  const string=JSON.stringify(hashMap)
  localStorage.setItem('x',string)//在localStorage设置一个x的值为string
}
$(document).on('keypress',(e)=>{
  const {key}=e//等效key=e.key
  for (let i = 0; i < hashMap.length; i++) {
    if(hashMap[i].logo.toLowerCase()===key){
      window.open(hashMap[i].url)
    }
  }
})

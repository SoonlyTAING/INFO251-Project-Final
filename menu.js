
var Strings=JSON.parse(localStorage.getItem('addArray')) || [];
var total=0;
function update(){
    total=0
        $('.ordered .subp').each(function() {
            var p = $(this).text();
            p=parseFloat(p)
            total+=p
            
          });
        
          console.log(total)
          let str = total.toFixed(2) + " USD"
          $(".tp").text(str);
}
$(document).ready(function() {
    
    for (let i=0; i<Strings.length; i++){
        console.log(Strings.length)
        console.log(i)
        console.log(Strings[i])
        $(".ordered tr:first").after(Strings[i])}
    $('.remove').click(function(event){

        console.log(Strings);
        event.preventDefault();
        console.log("running")
        console.log($(this).closest("tr"))
        if ($(this).closest("tr").attr("class")=="added"){
            let x = $(this).closest("tr").map(function() {
                return "    <tr class='added'>" + $(this).html() + '</tr>';
            }).get();
            console.log(x[0])
            console.log(Strings.length)
            var index = Strings.indexOf(x[0]);
        if (index !== -1) {
        Strings.splice(index, 1);
        localStorage.setItem('addArray', JSON.stringify(Strings));
        }
        console.log(Strings.length)
        }
        $(this).closest("tr").remove();
        update();
        
    });
    update();

});



$('form input[type="submit"]').on('click', function(event) {
    let isValid=true;
    console.log(Strings);
    event.preventDefault();
    const formId = $(this).closest('form').attr('id');
    $('.required').each(function() {
        if ($(this).val() === '') {
          isValid = false;
        }
      });
      if (!isValid){
        window.alert("Make sure to fill everything")
      } else {
        var add, quant, mid, subp;

    mid=''
    quant="";
    subp=""
    add=''
    console.log(`formId: ${formId}`);
    {
        let value=formId
        console.log("test2")
        console.log("value:" + value)
    var words = (value.toString()).split('-');

    // capitalize the first letter of each word and remove the word "form"
        for (var i = 0; i < words.length; i++) {
        if (words[i] == 'form') {
            words.splice(i, 1);
            i--;
        } else {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        }
            if (words.length>1){
                words=words.join(" ")
            }
            if (words=="Menu2"){
                words="Breakfast Set";
            } else if(words=="choco"){
                words="Chocolate Drink";
            } else if(words=="Milk"){
                words="Milkshake"
            }
        
    mid+=`        <td class="mid"><h3>${words}</h3>\n            <ul>\n`
    console.log(words)}
    const form = document.getElementById(formId);
    console.log(`form: ${form}`);
    var quantity=0
    const formData = new FormData(form);
    
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    //   console.log(name=="formId")
    //   if (name=="formId"){
        
    //   }
      if (name=="quantity"){
        quantity=parseFloat(value)
        
        quant+=`        <td class="quant"><h3>${quantity}x</h3></td>\n`
      }
      console.log(quantity)
      
      if (name!="formId" && name!="quantity"  && name!="price" && name!='form'){
        var words = value.split('_');
        for (var i = 0; i < words.length; i++) {
            if (words[i] === 'form') {
                words.splice(i, 1);
                i--;
            } else {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            }
            words=words.join(" ");
            console.log(words)
        mid+=`                <li>${words}</li><br>\n`
      }
      if(name=="price"){
        quantity=formData.get("quantity")
        let price=parseFloat(value)
        console.log("quantity test")
        console.log(quantity)
        
        let temp=price * quantity
        
        temp=temp.toFixed(2)
        console.log(temp)
        subp=`        <td class="subp"><h3>${temp} USD</h3></td>\n`
      }
    }
    mid+=`            </ul>\n        </td>\n`

    add+= "    <tr class='added'>"+ quant + mid + subp+'         <td class="rem"><h3><a href="" class="remove">Remove</a></h3></td></tr>'
    console.log("add")
    console.log(add)
    Strings.push(add);
    console.log(typeof(Strings))
    
    localStorage.setItem('addArray', JSON.stringify(Strings));
    let myData = localStorage.getItem("addArray")
    console.log(typeof(myData))
    console.log(myData)
    
    
    const str = formId;
    let targetId = str.replace('form', 'dropdown');
    targetId="#"+targetId
    let target=document.querySelector(targetId);

    let popup=target.querySelectorAll(".popup")[0]
    close(target,popup)
      }
  });

// console.log("isrunning")
// console.log(document.querySelector("#waffles-dropdown"))
document.querySelectorAll('.sele').forEach((item) => {
    item.addEventListener("click",function(){
        // console.log(item)
        openDrop(item)}, "true");
    
})
document.querySelectorAll('.drop').forEach((item) => {
    item.setAttribute("tabindex",2);
    
})
document.querySelectorAll('.popup').forEach((item) => {
    item.setAttribute("tabindex",1);
    
})
$(document).click(function(){})
$(".subm").click(function(){})

function openDrop(item){
    console.log(document.activeElement)
    let ID=item.id;
    item.children[0].blur()
    item.parentNode.blur()

    let targetId= "#"+ID+"-dropdown"
    // console.log(targetId)
    let target=document.querySelector(targetId);
    // console.log(target.className)
    let targetClass="."+target.className;
    let popup=target.querySelectorAll(".popup")[0]
    // targetId="#"target.id

    
    
    // console.log(popup)
    // console.log(document.activeElement)

    
    popup.style.display="block"
    popup.style.opacity=1
    // console.log(popup.style.display)
    // console.log(popup.style.opacity)
    

    target.style.display="block"
    target.style.opacity=1
    target.style.background="rgba(0, 0, 0, 0.75)"

    
    // console.log(document.activeElement)
    popup.addEventListener("focus",function(){appear(target,popup)}, "true")
    setTimeout(()=>{popup.focus()},0)
    // console.log(document.activeElement)
}
function appear(target,popup){
    setTimeout(()=>{popup.focus()},0)
    // console.log("appear test")

    // console.log(document.activeElement)
    document.querySelectorAll('.close').forEach((item) => {
        item.addEventListener("click",function(){close(target,popup)}, "false");
    })
    target.addEventListener("keydown", ()=> {
        // console.log(event.keyCode)
        if(event.keyCode == 27) {
        close(target,popup)
    }},"true")

    popup.style.display="block"
    popup.style.opacity=1
    // console.log(popup.style.display)
    // console.log(popup.style.opacity)
    

    target.style.display="block"
    target.style.opacity=1
    target.style.background="rgba(0, 0, 0, 0.75)"
    // function keyPress (e) {
        
    // }
    // popup.addEventListener("blur",()=>{close(target,popup)})
    target.addEventListener("click",(event)=>{
        // console.log((document.activeElement==popup))
        if((document.activeElement!=popup && event.target.tagName !== 'INPUT' && event.target.tagName !== 'LABEL')){
            // console.log(document.activeElement)
            close(target,popup)
        }
        },"true")

    
}
function close(target,popup){

    // console.log(document.activeElement)
    popup.style.display="none"
    popup.style.opacity=0
    // console.log(popup.style.display)
    // console.log(popup.style.opacity)
    
    let x=target.parentNode.querySelectorAll(".drop")
    // console.log(x)

    target.style.display="none"
    target.style.opacity=0
    target.style.background="rgba(0, 0, 0, 0.00)"
    // popup.removeEventListener("blur",()=>{close(target,popup)})

}


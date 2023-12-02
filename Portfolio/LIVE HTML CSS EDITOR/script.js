
function run(){
    let htmlcode=document.querySelector(".editor #html_code").value;
    let csscode="<style>"+document.querySelector(".editor #css_code").value+"<style>";
    let jscode =document.querySelector(".editor #js_code").value;
    let output=document.querySelector(" #output");
    output.contentDocument.body.innerHTML=htmlcode+csscode;
    output.contentWindow.eval(jscode);
    } 
    
    document.querySelector(".editor #html_code").addEventListener("keyup",run);
    document.querySelector(".editor #css_code").addEventListener("keyup",run);
    document.querySelector(".editor #js_code").addEventListener("keyup",run);

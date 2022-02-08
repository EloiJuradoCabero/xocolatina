

function formulari() {
    let wind = window.open("questionari.html");
    wind.addEventListener("unload", function () {
        console.log(document.cookie);
    })
}

function enviar(){
    let num = document.getElementById("num").value;
    let width=document.getElementById("wid").value;
    let height=document.getElementById("hei").value;
    setCookie("num",num);
    setCookie("wid",width);
    setCookie("hei",height);

}


function setCookie(pos,num){
    if(pos!=="none"){
        if(num!=="none"){
            console.log(pos+" "+num);
            document.cookie= pos+"="+num;
            console.log(document.cookie);

        }else{
            let data=new  Date();
            data.setDate(0);
            document.cookie=pos+"= aliceblue; expires"+data.toUTCString();
        }
    }

    printarRajoles();
}


function printarRajoles() {

    let taula = "<table>";

    if (document.cookie !== "") {
        var arraycookies = document.cookie.split(";")
        console.log(arraycookies)
    }

    let n;
    let m;
    let r;

    arraycookies.forEach(pos=>{
        var res=pos.split("=");
        console.log("hello its mee: "+res);
        if(res[0].trim()=="wid"){
            n=res[1];
        }
        if(res[0].trim()=="hei"){
            m=res[1];
        }
        if(res[0].trim()=="num"){
            r=res[1];
        }
    });



    for (let i = 0; i<m; i++) {
        console.log(i);
        taula += "<tr>";
        for (let j = 0; j < n; j++) {
            taula += "<td class='rajola'></td>";
        }
        taula += "</tr>"
    }

    taula += "</table><br style='padding-top: 20px'>";

    console.log(n+"-"+m+"---"+n*m + " --- "+ r);

    if (n*m < r){
        taula += taula;
    }

    let prova=window.opener.document.getElementById('prova');
    prova.innerHTML = taula;

    window.close();

}

window.onload=function () {
    let fenlei=document.querySelector(".fenlei");
    let fenlei1=document.querySelectorAll(".fenlei .fenlei_1");
    let product=document.querySelectorAll(".product");
    console.log(product);
    for(let i=0;i<fenlei1.length;i++){
        fenlei1[i].onclick=function () {
            for(let j=0;j<fenlei1.length;j++){
                product[j].style.zIndex="5";
            }
            product[i].style.zIndex="10";
        }
    }

    let picture=document.querySelectorAll(".picture");
    let fruit=document.querySelector(".fruit_small");
    let lis=document.querySelectorAll(".fruit_small li");
    console.log(lis);
    let num=0;
    // setInterval(move,1000);
    function move() {
        for(let i=0;i<picture.length;i++){
            picture[num].style.zIndex="5";
        }
        num++;
        if(num>picture.length-1){
            num=0;
        }
        picture[num].style.zIndex="10";
    }

    function move1() {
        for(let i=0;i<picture.length;i++){
            picture[num].style.zIndex="5";
        }
        num--;
        if(num<0){
            num=picture.length-1;
        }
        picture[num].style.zIndex="10";
    }

    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            for(let j=0;j<lis.length;j++){
                picture[j].style.zIndex="5";
                lis[j].className="";
            }
            picture[i].style.zIndex="10";
            lis[i].className="hot";
            num=i;
        }
    }
};
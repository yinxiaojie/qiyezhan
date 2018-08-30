window.onload=function () {
    let fenlei=document.querySelector(".fenlei");
    let fenlei1=document.querySelectorAll(".fenlei .fenlei_1");
    console.log(fenlei1);
    let product=document.querySelectorAll(".product");
    console.log(product);
    for(let i=0;i<fenlei1.length;i++){
        fenlei1[i].onclick=function () {
            for(let j=0;j<fenlei1.length;j++){
                product[j].style.zIndex="5";
                fenlei1[j].style.border="1px solid rgba(226,226,226,1)";
            }
            product[i].style.zIndex="10";
            fenlei1[i].style.border="1px solid rgba(170,170,170,1)";
        }
    }


    //产品轮播图
    let fruit=document.querySelector(".fruit");
    let img=document.querySelectorAll(".fruit img");
    let smallfruit=document.querySelector(".fruit_small");
    let lis=document.querySelectorAll(".fruit_small li");
    let back=document.querySelectorAll(".back");
    console.log(back);

        let next=now=0;
        fruit.onclick=function () {
            next++;
            if(next==img.length){
                next=0;
            }
            back.forEach(function (v) {
                v.style.display="none";
            });
            img[next].style.left="332px";
            animate(img[now],{left:-332});
            animate(img[next],{left:0});
            console.log(now);
            now=next;
            back[now].style.display="block";
        };













    lis.forEach(function (v,i) {
        lis[i].onclick=function () {
            back.forEach(function (v) {
                v.style.display="none";
            });
            if(i==now){
                return;
            }else if(i<now){
                img[i].style.left="-332px";
                animate (img[now],{left:332});
                animate (img[i],{left:0});
            }else{
                img[i].style.left="332px";
                animate (img[now],{left:-332});
                animate (img[i],{left:0});
            }
            back[i].style.display="block";
            next=now=i;
        }
    })


};


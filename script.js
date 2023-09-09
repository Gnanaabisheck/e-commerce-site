
document.addEventListener('DOMContentLoaded',loadContent)

function loadContent()
{
    loadProduct()
}

function loadProduct()
{
const remove=document.querySelectorAll('.remove')
remove.forEach((val)=>{
    val.addEventListener('click',del)
    
    })

let add=document.querySelectorAll('.add')
add.forEach((btn)=>{
    btn.addEventListener('click',btnAdd)
    })

let qty=document.querySelectorAll('.qty')
qty.forEach((input)=>{
    input.addEventListener('change',changeQty)
})
    
updateTotal()

}

    function del(){
        if(confirm("Would you like to remove this from your Cart"))
        this.parentElement.remove()
    }

    // function changeQty(){
    //     if(this.value<1){
    //         this.value=1
    //     }
    //     if(this.value>=5)
    //     {
    //         alert("YOU EXCEDED YOUR PURCHASE LIMIT")
    //     }
    // }
    let itemList=[]
       
function btnAdd(){
    let cartAdd=this.parentElement;
   let title=cartAdd.querySelector('.card-title').innerHTML;
   let cost=cartAdd.querySelector('.card-subtitle').innerHTML
   let img=cartAdd.querySelector('.img-fluid').src
   

   let newProductElement=createCart (title,cost,img);
   let element=document.createElement('div')
   element.innerHTML=newProductElement

   let cartBasket=document.querySelector('.cart-content')

   cartBasket.append(element)

   
   loadProduct()
   
   
   
}

function createCart (title,cost,img){
    return ` <div class="cart-box">
    <img src="${img}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-pro-title">
            ${title}</div>
            <div class="price-box">
                <div class="cost">
                    ${cost}
                </div>
                
            </div>
            
        </div>
        <img src="—Pngtree—trash icon vector illustration in_4246157.png" alt="" class="remove">
       
   </div>`;

}

function updateTotal(){
    let cartItem=document.querySelectorAll('.cart-box');
    let totalValue=document.querySelector('.total-amount');
    let total=0;

    cartItem.forEach((pro)=>{
        let priceElement=pro.querySelector('.cost');
        let price=parseFloat(priceElement.innerHTML.replace("$ ",""));
       
        total+=price
        
        console.log(total);
    })
    totalValue.innerHTML=`$ ${total}`
   
    
}

function a()
{
    alert("Your Order Has Been Placed")
}









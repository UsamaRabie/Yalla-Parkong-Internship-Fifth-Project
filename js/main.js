



let myslide = document.getElementById("myslide");

let arrayslides1 = [
    `<div class=" d-lg-flex justify-content-between " id="myslide">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/HomeToHome.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/mag.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/NationalCarParks.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/deyaar.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/doubletree.png" alt="">
        </div>`];

        let arrayslides2 = [ `<div class=" d-lg-flex justify-content-between " id="myslide">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/NationalCarParks.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/deyaar.png" alt="">
            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/doubletree.png" alt="">

            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/dubizzle.png" alt="">

            <img class="w-50" src="https://www.yallaparking.com/Content/img/logos/intrecontinental.png" alt="">
        </div>`];


        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");

        btn1.addEventListener("click" , () => {


          myslide.innerHTML = arrayslides1;
          btn1.style.color='gray';
          btn2.style.color='white';
        }
        )

         btn2.addEventListener("click" , () => {


          myslide.innerHTML = arrayslides2;
          btn2.style.color='gray';
          btn1.style.color='white';
        }
        )
import tab_template from "../views/tab.html";

import home_controller from '../controllers/home_controller';
import class_controller from '../controllers/class_controller';
import taste_controller from '../controllers/taste_controller';
import cart_controller from '../controllers/cart_controller';
import person_controller from '../controllers/person_controller';


console.log("render");

const render = () => {

    document.querySelector(".tab").innerHTML = tab_template;
    $("#tan_main").addClass("active");

    switchTab(); 
}

const switchTab = () =>{
    $(".tab-item").on("tap",function(){
        let _controllers = [home_controller,class_controller,taste_controller,cart_controller,person_controller];
        _controllers[$(this).index()].render();
       console.log(_controllers[$(this).index()]);
       
        
        $(this).find("div").addClass("active").end().siblings().find("div").removeClass("active")

    })


}

export default{
    render
}
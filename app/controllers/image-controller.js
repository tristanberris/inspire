import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

    //target store at url, 
   function _drawImgUrl(){
       let template = ''
     let  storedImg = store.State.imgUrl

       template = `<img src="${storedImg}">`
    //    document.getElementById("bg-image") = template
        document.getElementById("bg-image").style.backgroundImage = `url('${storedImg}')`
    //    console.log("THE IMAGE URL IS") + store.State.imgUrl;
       
   }
export default class ImageController {
    constructor(){
        store.subscribe("imgUrl", _drawImgUrl)
            ImageService.getImgUrl();
          

    }
}

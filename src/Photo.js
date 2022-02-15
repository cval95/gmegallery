import React, {useState} from 'react';
import './gallery.css'
import CloseIcon from '@material-ui/icons/Close'



import Img1 from './imgPhoto/IMG_1531.JPG';
import Img2 from './imgPhoto/IMG_1532.JPG';
import Img3 from './imgPhoto/IMG_1533.JPG';
import Img4 from './imgPhoto/IMG_1536.JPG';
import Img5 from './imgPhoto/IMG_1539.JPG';
import Img6 from './imgPhoto/IMG_1540.JPG';
import Img7 from './imgPhoto/IMG_1541.JPG';
import Img8 from './imgPhoto/IMG_1542.JPG';
import Img9 from './imgPhoto/IMG_1545.JPG';

const Photo = () => {

    let data = [
        {
            id:1,
            imgSrc: Img1,
        }, 
        {
            id:2,
            imgSrc: Img2,
        },
        {
    
            id:3,
            imgSrc: Img3,
        },
        {
            id:4,
            imgSrc: Img4,
        },
        {
            id:5,
            imgSrc: Img5,
        },
        {
    
            id:6,
            imgSrc: Img6,
        },
        {
            id:7,
            imgSrc: Img7,
        },
        {
    
            id:8,
            imgSrc: Img8,
        },
        {
    
            id:9,
            imgSrc: Img9,
        }




    ]


const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');
const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true); 
}


return(

    <>

<div className={model? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>

    </div>


    <h1 style={{paddingBottom: 15,paddingTop: 15 , textAlign: 'center' }}>Photography Portfoilo</h1>
  
    <div className="gallery">

    

    {data.map((item, index)=>{

        return(

            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: '100%'}}/>                
             </div>   

        )
    
    })}
    
    


    </div>





   </>
)


}

export default Photo;
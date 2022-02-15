import React, {useState} from 'react';
import './gallery.css'
import CloseIcon from '@material-ui/icons/Close'


import Img1 from './imgPaint/img1.jpeg';
import Img2 from './imgPaint/IMG_2.jpeg';
import Img3 from './imgPaint/IMG_3.jpeg';
import Img4 from './imgPaint/IMG_4.jpeg';
import Img5 from './imgPaint/IMG_5.jpeg';
import Img6 from './imgPaint/IMG_6.jpeg';
import Img7 from './imgPaint/IMG_7.jpeg';
import Img8 from './imgPaint/IMG_8.jpeg';
import Img9 from './imgPaint/IMG_1371.JPG';

const Gallery = () => {

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


    <h1 style={{paddingBottom: 15, paddingTop: 15 ,textAlign: 'center'}}>Painting Portfoilo</h1>
  
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

export default Gallery;
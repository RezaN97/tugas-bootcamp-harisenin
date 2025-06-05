import CardSlideshow from "../Card/CardSlideshow"
import CardWatch from "../Card/CardWatch"
import CardPoster from "../Card/CardPoster"
import arwLeft from '../../img/arrow-left.png'
import arwRight from '../../img/arrow-right.png'



const Content = () =>{
    return(
        <>
        <content>
            <CardSlideshow />
            <CardWatch />
            <CardPoster />
        

        </content>
        </>

    )
}

export default Content


export const BtnArrowLeft = () => {
  return (
    <div id="btn-arrow-left" className="bg-[#2F3334] w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap-[10px] absolute border-[#E7E3FC3B]">
      <img src={arwLeft} className='w-[16px] h-[16px] absolute right-[12px] top-[13px]'  alt="left" />
    </div>
  )
}

export const BtnArrowRight = () => {
  return (
  <div id="btn-arrow-right" className='bg-[#2F3334] w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap-[10px] absolute border-[#E7E3FC3B]'>
    <img src={arwRight} alt="right" className='w-[16px] h-[16px] absolute right-[12px] top-[13px]' />
  </div>

  )
}
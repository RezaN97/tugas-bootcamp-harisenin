 import arwLeft from '../../img/arrow-left.png'
 import arwRight from '../../img/arrow-right.png'

const CardWatch = () => {
    return (
        <>
        <section className=" font-Lato flex flex-col top-[681px] md:w-[1440px] md:h-[309px] px-[80px] py-[40px] gap-[32px]">
                <h2 className="text-white text-[32px] font-bold">Melanjutkan Tonton Film</h2>
                <div id="image-slider" className="flex flex-row gap-[24px] text-white">
                    <div id="img-look" className="">
                        <div id="txt-nama-film" className="flex text bg-[url('../../img/slider/Type=31.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">Don't Look Up</div>
                                <div id="txt-rate-film"> &#9733; 4.5/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-all">
                           <div id="txt-nama-film" className="flex text bg-[url('../../img/slider/Type=17.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">All of us are dead</div>
                                <div id="txt-rate-film"> &#9733; 4.2/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-blue">
                        <div id="txt-nama-film" className="flex text bg-[url('../../img/slider/Type=5.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">Blue Lock</div>
                                <div id="txt-rate-film"> &#9733; 4.6/5</div>
                            </div>
                        </div>
                    </div>

                    <div id="img-otto">
                           <div id="txt-nama-film" className="flex text bg-[url('../../img/slider/Type=9.png')] bg-no-repeat md:w-[302px] h-[162px] ">
                            <div id='text-content' className=" flex justify-between w-[302px] h-[54px] px-[20px] py-[18vh]">
                                <div className="text-[18px] font-bold">A Man Called Otto</div>
                                <div id="txt-rate-film"> &#9733; 4.4/5</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="btn-arrow-left" className="bottom-[-38vh] left-[4vw] bg-[#2F3334] w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap-[10px] absolute border-[#E7E3FC3B]">
                <img className='w-[16px] h-[16px] absolute right-[12px] top-[13px]' src={arwLeft} alt="left" />
            </div>
            <div id="btn-arrow-right" className='bottom-[-38vh] right-[2vw] bg-[#2F3334] w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap-[10px] absolute border-[#E7E3FC3B]'>
        <img src={arwRight} alt="right" className='w-[16px] h-[16px] absolute right-[12px] top-[13px]' />
            </div>

               
        </section>
        </>

    )
}

    export default CardWatch
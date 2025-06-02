const CardSlideshow = () => {
    return(
        <>
        <div className="bg-[url('/isi-konten.png')] bg-no-repeat bg-contain flex justify-center items-center w-[360px] h-[225px] gap-[20px] sm:w-[1440px] sm:h-[587px] sm:gap-[10px] bg-liner-to-b from-[#000000]-0 to-[#101213DB]-800 ">
            <div id="contentSlideshow" className=" flex-col w-[320px] h-[118px] gap-[12px] sm:w-[1280px] sm:[233px] sm:gap-[40px]">
                {/* teks slideshow */}
                <div className="sm:w-[668px] sm:h-[148px] sm:gap-[20px]">
                    <h1 id="judul-slide" className=" w-[202px] h-[29px] sm:w-[1440px] sm:h-[587px]  text-[24px] sm:text-[48px] font-bold  text-white">Duty After School</h1>
                    <p id="p-slide" className="relative sm:bottom-[85vh] max-sm:truncate w-[320px] h-[40px] text-[12px] sm:w-[668px] sm:h-[75px] sm:text-[18px] text-white font-medium ">
                    Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                    </p>
                </div>
             

                {/* navigasi */}
                <div id="slideNavigation" className="sm:mt-[10vh] w-[320px] h-[25px] sm:w-[1280px] sm:h-[45px] flex justify-between items-center text-white p-8">
                    <div className="flex gap-5">
                        <button id="btn-mulai" className="bg-[#0F1E93] cursor-pointer text-white text-[12px] w-[55px] sm:w-[93px] h-[25px] sm:h-[42px] rounded-[48px] gap-[8px] ">Mulai</button>
                        <button className="flex text-[12px] bg-[#22282A] cursor-pointer w-[120px] h-[25px] sm:w-[185px] sm:h-[45px] sm:px-[26px] sm:py-[10px] rounded-[48px]">
                            <div className="bg-[url('/info-slide.png')] bg-no-repeat w-[12px] h-[12px] sm:w-8 sm:h-8"></div>
                            Selengkapnya</button>
                        <div className="border-[1px] rounded-[24px] p-[10px] gap-[10px] border-[#C1C2C4]">18+</div>
                    </div>
                    <div className="flex  w-[44px] h-[44px] rounded-[50%] border-[1px] p-[10px] gap[10px]">
                        <div className="bg-[url('/mute.png')] bg-no-repeat w-[24px] h-[24px]"></div>
                    </div>
                </div>
            </div> 
        </div>
        
        </>


    )
}

    export default CardSlideshow 
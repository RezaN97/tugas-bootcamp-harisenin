const CardSlideshow = () => {
    return(
        <>
        <div className="bg-[url('/isi-konten.png')] flex gap-[10px] relative   md:w-[1440px] md:h-[587px] bg-liner-to-b from-[#000000]-0 to-[#101213DB]-800 ">
            <div id="contentSlideshow" className="absolute  top-18 flex-col gap-[40px]md:w-[1280px} md:h-[233px]">
                <h1 id="judul-slide" className=" m-20 md:text-5xl md:font-bold text-white">Duty After School</h1>
                <p id="p-slide" className="absolute top-36 px-20 text-white md:w-[668px] md:h-[75px] md:text-[18px] md:font-medium    ">
                    Sebuah benda tak dikenal mengambil alih dunia. 
                    Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
                    termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
                    dalam perang.
                </p>
                <div id="slideNavigation" className="w-[1280px] h-[45px] relative flex justify-between mx-12 my-32 items-center text-white p-8">
                    <div className="flex gap-5">
                        <button id="btn-mulai" className="bg-[#0F1E93] text-white w-[93px] h-[42px] rounded-[48px] gap-[8px] ">Mulai</button>
                        <button className="flex bg-[#22282A] w-[185px] h-[45px] px-[26px] py-[10px] rounded-[48px]">
                            <div className="bg-[url('/info-slide.png')] bg-no-repeat w-8 h-8"></div>
                            Selengkapnya</button>
                        <div className="border-[1px] rounded-[24px] p-[10px] gap-[10px] border-[#C1C2C4]">18+</div>
                    </div>
                    <div className="flex  left-[100px] w-[44px] h-[44px] rounded-[24px] border-[1px] p-[10px] gap[10px]">
                        <div className="bg-[url('/mute.png')] bg-no-repeat w-[24px] h-[24px]"></div>
                    </div>
                </div>
            </div> 
        </div>
        
        </>


    )
}

    export default CardSlideshow
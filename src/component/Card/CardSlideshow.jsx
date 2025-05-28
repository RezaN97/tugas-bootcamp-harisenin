const CardSlideshow = () => {
    return(
        <>
           <section className="slideshow">
            <div className="bg-[url(../img/isi-konten.png)]">
                <div className="container-slideshow">
                    <h1 id="judul-slide">Duty After School</h1>
                    <p id="p-slide">
                        Sebuah benda tak dikenal mengambil alih dunia. 
                        Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
                        termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
                        dalam perang.
                    </p>
                    <div className="slideshow-container">
                        <div className="container-action-slideshow">
                            <button id="btn-mulai">Mulai</button>
                            <button id="btn-selengkapnya">Selengkapnya</button>
                            <div className="btn-18">18+</div>
                        </div>
                        <div className="btn-mute"></div>
                    </div>
                </div> 
            </div>
            </section>
        
        </>


    )
}

    export default CardSlideshow
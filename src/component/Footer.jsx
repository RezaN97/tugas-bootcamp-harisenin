import logoChill from '../img/logo-full.png'
import footerArrow from '../img/arrow-footer.png'


const Footer = () => {
    return(
        <>
        <footer>
                {/* <!-- footer copyright --> */}
                <div className="container-footer">
                    <div class="copyright">
                        <div> 
                            <img src={logoChill} alt="logo" />
                        </div>
                        <div id="copyright-txt">&copy;2023 Chill All Right Reserved</div>
                    </div>
                    {/* <!-- footer genre --> */}
                    <div class="genre">
                        <h1 class="title-footer-genre">Genre</h1>
                        <img src={footerArrow} alt="arrow" />
                        <div class="genre-container" >
                    {/* <!-- genre items --> */}
                            <div class="genre-item" ><p>Aksi</p></div>
                            <div class="genre-item" ><p>Drama</p></div>
                            <div class="genre-item" ><p>Komedi</p></div>
                            <div class="genre-item" ><p>Sains & Alam</p></div>
                            <div class="genre-item" ><p>Anak-anak</p></div>
                            <div class="genre-item" ><p>Fantasi Ilmiah & Fantasi</p></div>
                            <div class="genre-item" ><p>Petualangan</p></div>
                            <div class="genre-item" ><p>Thriller</p></div>
                            <div class="genre-item" ><p>Anime</p></div>
                            <div class="genre-item" ><p>Kejahatan</p></div>
                            <div class="genre-item" ><p>Perang</p></div>
                            <div class="genre-item" ><p>Britania</p></div>
                            <div class="genre-item" ><p>KDrama</p></div>
                            <div class="genre-item" ><p>Romantis</p></div>
                        </div>
                    </div>
                    {/* <!-- footer bantuan --> */}
                    <div class="bantuan" >
                        <h1 class="title-footer">Bantuan</h1>
                        <img src={footerArrow} alt="arrow" />
                        <div class="bantuan-item" ><p>FAQ</p></div>
                        <div class="bantuan-item" ><p>Kontak kami</p></div>
                        <div class="bantuan-item" ><p>Privasi</p></div>
                        <div class="bantuan-item" ><p>Syarat & ketentuan</p></div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer
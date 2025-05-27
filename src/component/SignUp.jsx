import foto from '../img/logo-full.png'
import google from '../img/google-btn.png'
import showEye from '../img/eye-off.png'

const SignUp = () => {

    return (

    <>
        <div className=" font-Lato relative top-[172px] left-[27.7px] bg-[#181A1C]/60 flex flex-col justify-evenly items-center w-[306px] h-[452.28px] text-white  p-[24px] rounded-sm ">
               
                <div className="w-[94px] h-[24px] gap-[2.32px]">
                        <img src={foto} alt="Logo Chill" />
                </div> 
                <div className="w-[73px] h-[43.62px] flex gap-[10px] flex-col justify-center items-center">
                        <h1 className='font-bold text-[18px] tracking-tight'>Daftar</h1>
                        <p className='font-[500] text-[10px]'>Selamat Datang</p>
               </div>

                <div className="w-[258px] h-[45.47px] flex flex-col gap-[3.47px]">
                        <label className="text-[10px] font-[500] w-[46px] h-[14px] gap-[6px]" htmlFor="username">Username</label>
                        <input className="w-[260px] h-[28px] px-[11.55px] py-[8.09px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[9.24px] text-black p-2 rounded-2xl  " type="text" name="username" id="username" placeholder='Username..' />
                </div>

                <div className="w-[258px] h-[45.47px] flex flex-col gap-[3.47px] relative">
                        <label className="text-[10px] font-[500] w-[49px] h-[14px] gap-[6px]" htmlFor="kataSandi">Kata sandi</label>
                        <input className=" w-[260px] h-[28px] px-[11.55px] py-[8.09px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[9.24px] text-black p-2 rounded-2xl  " type="password" name="password" id="password" placeholder='Masukan Kata Sandi..' />
                        <img src={showEye} alt="show"  className='w-[12px] h-[12px] absolute right-3 bottom-2'/>
                </div>
                                
                <div className="w-[258px] h-[45.47px] flex flex-col gap-[3.47px] relative" >
                        <label className="text-[10px] font-[500] w-[101px] h-[14px] gap-[6px]" htmlFor="konfirmasi">Konfirmasi Kata sandi</label>
                        <input className="w-[260px] h-[28px] px-[11.55px] py-[8.09px] border-[#E7E3FC] bg-[#E7E3FC3B] text-[9.24px] text-black p-2 rounded-2xl  " type="password" name="confirm" id="confirm" placeholder='Masukan Kata Sandi' />
                        <img src={showEye} alt="show" className='w-[12px] h-[12px] absolute right-3 bottom-2' />
                </div>
                        <span className='w-[258px] h-[14px] flex justify-start gap-[8px] text-[10px] font-[400] '>Sudah Punya Akun? <a className='font-[500] text-[10px]' href="#">Masuk</a></span>

                <div className="w-[258px] h-[79.33px] flex flex-col justify-center items-center gap-[4px] my-2">
                        <button className='w-[258px] h-[30.17px] bg-[#3D4142] border-1 text-sm font-medium rounded-[13.86px]'>Daftar</button>
                        <p className='text-[10px] font-normal'>Atau</p>
                        <button className='w-[258px] h-[30.17px] justify-center flex items-center gap-2 bg-[#3D4142]/10 border-1 text-sm font-medium rounded-[13.86px] '>
                                <img src={google} alt="google" />
                                Daftar dengan Google
                        </button>
                </div>
        </div>   

    </>


    )
}

export default SignUp


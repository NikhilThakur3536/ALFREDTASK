export const NavBAr=()=>{
    return(
        <div className=" flex justify-around w-[80%] h-18 rounded-xl  mt-4 mr-6">
          <div className=" flex justify-center items-center w-[30%] h-full  text-white text-4xl font-semibold">LOGO</div>
          <div className="flex justify-around w-[40%] items-center text-white font-semibold text-xl">
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Contact us</h3>
          </div>
          <div className=" flex justify-center items-center w-[10%] h-full ">
            <div className=" flex justify-center items-center w-full h-[90%] border border-cyan-300 text-white text-xl font-semibold rounded-xl">LOGIN
            </div>
          </div>
        </div>
    )
}
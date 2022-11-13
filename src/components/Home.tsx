import waves1 from '../images/waves1.svg';

function Home() {
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
        <div className="bg-[#475790] w-fit mt-20 mb-2 rounded-md">
          <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
            knock knock
          </div>
        </div>
        <h1 className="italic text-[#434C5E] text-lg mb-8">
          find your new neighborhood
        </h1>
        <div className="">
          <input className="h-14 bg-light-container text-center text-3xl rounded-md border-[1px] border-[#434C5E] placeholder:text-2xl" placeholder="search for metro area">
          </input>
          <button></button>
        </div>
        <img src={waves1} className="absolute inset-x-0 bottom-0"/>
      </div>
    )
}

export default Home
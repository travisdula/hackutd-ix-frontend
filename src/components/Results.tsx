import waves2 from '../images/waves2.svg'
import CityContainer from './CityContainer'

function Results() {
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
            <div className="bg-[#475790] w-fit mt-20 mb-2 rounded-md">
                <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
                    knock knock
                </div>
            </div>

            <h1 className="italic text-[#434C5E] text-lg mb-8">find your new neighborhood</h1>

            <CityContainer/>
            <CityContainer/>
            <CityContainer/>
            <CityContainer/>
            <CityContainer/>

            <img src={waves2} className="relative inset-x-0 bottom-0"/>
      </div>
    )
}

export default Results
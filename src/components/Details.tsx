import { Link, useParams } from "react-router-dom"
import waves2 from '../images/waves2.svg'

function Details() {
    //const {origin, destination, zip} = useParams()
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
            <div className="bg-knock-blue w-fit mt-20 mb-2 rounded-md">
                <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
                    {/* <Link to="/">
                        knock knock
                    </Link> */}
                </div>
            </div>

            <h1 className="italic text-[#434C5E] text-lg mb-8">find your new neighborhood</h1>

            <img src={waves2} className="z-0 fixed bottom-0"/>
        </div>
    )
}

export default Details
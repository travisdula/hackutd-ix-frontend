import { Link, useParams } from 'react-router-dom'
import waves2 from '../images/waves2.svg'

function Detail() {
    const {zipCode} = useParams()
    return (
      <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
        <img alt="waves art" src={waves2} className="relative inset-x-0 bottom-0"/>
      </div>
    )
}

export default Detail

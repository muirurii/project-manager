import {BiLoader} from "react-icons/bi"

const Loader = ({width,height}:{width:string,height:string}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{
        height,
        width
    }}>
    <BiLoader className="loader" />
    </div>
  )
}

export default Loader;
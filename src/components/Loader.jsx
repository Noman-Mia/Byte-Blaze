import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
      <div>
          <div className="h-20">
          </div>

             <div className="flex flex-col justify-center items-center min-h[calc(100vh-130px)]">
                <ScaleLoader size={100} color="#F92FD3"></ScaleLoader>
            </div>
      </div>
    );
};

export default Loader; 
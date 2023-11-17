import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png';



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Button
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GItHub
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className='mr-3 text-blue-600'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className='mr-3 text-blue-400'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className='mr-3 text-purple-500'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} />
                <img src={qZone2} />
                <img src={qZone3} />
            </div>
        </div>
    );
};

export default RightSideNav;
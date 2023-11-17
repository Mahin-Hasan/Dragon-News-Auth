import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import info1 from '../../assets/1.png'
import info2 from '../../assets/2.png'
import info3 from '../../assets/3.png'
import moment from "moment/moment";
import { FaCalendar } from "react-icons/fa";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <Link
                    className="block ml-4 text-xl font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                > {category.name}
                </Link>)
            }
            <div>
                <div className="card w-full bg-base-100 shadow-xl mb-8">
                    <figure><img src={info1} /></figure>
                    <div className="">
                        <p className="font-semibold my-4 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex items-center">
                            <p className="mr-6 font-medium">Sports</p>
                            <FaCalendar className="mr-2"></FaCalendar>
                            <p className=''>{moment().format("MMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-8">
                    <figure><img src={info2} /></figure>
                    <div className="">
                        <p className="font-semibold my-4 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex items-center">
                            <p className="mr-6 font-medium">Sports</p>
                            <FaCalendar className="mr-2"></FaCalendar>
                            <p className=''>{moment().format("MMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={info3} /></figure>
                    <div className="">
                        <p className="font-semibold my-4 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex items-center">
                            <p className="mr-6 font-medium">Sports</p>
                            <FaCalendar className="mr-2"></FaCalendar>
                            <p className=''>{moment().format("MMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;
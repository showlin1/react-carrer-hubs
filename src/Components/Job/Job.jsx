import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold
                     border rounded border-[#7E90FE] text-[#9873FF] mr-4">{remote_or_onsite} </button>
                    <button className="px-5 py-2 font-extrabold
                     border rounded border-[#7E90FE] text-[#9873FF] mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-6">
                    <h2 className="flex mr-2"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h2>
                    <h2 className="flex mr-2"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
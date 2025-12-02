import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import PhoneIcon from "@mui/icons-material/Phone";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CheckCircle2 = CheckCircleIcon;
const AlertTriangle = WarningAmberIcon;
const MapPin = LocationOnIcon;
const Star = StarIcon;
const Phone = PhoneIcon;
const ThumbsUp = ThumbUpIcon;
const ChevronRight = ChevronRightIcon;

function ResultCard({ item }) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col md:flex-row gap-6">
            {/* Image  */}
            <div className="w-full md:w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 text-gray-400">
                <span className="font-medium">Image</span>
            </div>
            <div className="grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                        {item.isVerified ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                                <CheckCircle2 className="w-3 h-3" /> VERIFIED
                            </span>
                        ) : item.riskLevel === 'high' ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                                <AlertTriangle className="w-3 h-3" /> High Risk
                            </span>
                        ) : null}
                    </div>
                    <div className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                        <span>{item.subType}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-orange-400">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'text-gray-200'}`} />
                            ))}
                        </div>
                        <span className="font-bold text-gray-900">{item.rating}</span>
                        <span className="text-gray-400 text-sm">({item.votes} Votes)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border border-gray-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-50 gap-4">
                    <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                        <Phone className="w-4 h-4" />
                        {item.phone}
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <button className="flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            Trust This
                        </button>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 shadow-sm transition-colors">
                            Analyze Reviews
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resultcard
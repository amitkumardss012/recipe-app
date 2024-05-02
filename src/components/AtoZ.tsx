import { useNavigate } from "react-router-dom";

export const AtoZ = () => {
    const navigate = useNavigate();
    return (
        <>
            {
                buttons.map((item, index) => (
                    <button key={index} className="inline-flex items-center justify-center rounded-md bg-[#9ACD32] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#7CCD32] focus:outline-none focus:ring-2 focus:ring-[#9ACD32] focus:ring-offset-2 focus:bg-blue-600 disabled:pointer-events-none disabled:opacity-50" onClick={() => navigate(`/alphabet/${item}`)}>
                        {item}
                    </button>
                ))
            }
        </>
    );
};

const buttons = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



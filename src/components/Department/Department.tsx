import DEPARTMENT from "../../types/department";

const Department = ({ info }: { info: DEPARTMENT}) => {
    return (
        <div>
            {info.department}   
                     
        </div>
    );
};

export default Department;
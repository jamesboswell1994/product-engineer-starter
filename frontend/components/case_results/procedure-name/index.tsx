import React from "react";

interface ProcedureNameProps {
    procedure_name: string;
}

const ProcedureName: React.FC<ProcedureNameProps> = ({ procedure_name }) => {
    return (
        <li>
            <span className="font-bold">Procedure Name:</span> {procedure_name}
        </li>
    );
};

export default ProcedureName;

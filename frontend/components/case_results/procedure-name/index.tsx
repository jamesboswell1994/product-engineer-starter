import React from "react";

interface ProcedureNameProps {
    procedure_name: string;
}

const ProcedureName: React.FC<ProcedureNameProps> = ({ procedure_name }) => {
    return (
        <div className="flex flex-col">
            <span className="font-bold">Procedure Name:</span> {procedure_name}
        </div>
    );
};

export default ProcedureName;

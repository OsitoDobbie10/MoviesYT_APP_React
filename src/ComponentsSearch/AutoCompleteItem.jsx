import React from "react";
import "./index.css";
const AutoCompleteItem = ({
    titulo,
    id,
    onSelectItem,
    isHighlighted
}) => {
    return (
        <li
            className={`list-group-item ${
                isHighlighted ? "active highlighted" : ""
            }`}
            onClick={onSelectItem}
        >
            <div className="row">
                <div className="col text-left">
                    <p className="mb-0 font-weight-bold line-height-1">
                        {titulo}{" "}
                    </p>
                    <p className="mb-0 badge badge-primary">{id}</p>
                </div>
            </div>
        </li>
    );
};

export default AutoCompleteItem;

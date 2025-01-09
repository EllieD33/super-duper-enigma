import React from "react";

const item = (
    <div
        style={{
            minWidth: "200px",
            height: "200px",
            backgroundColor: "teal",
            margin: "5px",
        }}
    ></div>
);

export const mockContent = (
    <div style={{ display: "flex" }}>
        {Array(16)
            .fill(null)
            .map((_, index) => (
                <div key={index} style={{ margin: "0 5px" }}>
                    Item {index + 1}
                </div>
            ))}
    </div>
);

import React from "react";
import styled from "styled-components";

interface BoxProps {
    className?: string;
}

const Knob: React.FunctionComponent<BoxProps> = props => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <style>{`
                .cls-1 {
                    fill: #464547;
                }

                .cls-2 {
                    fill: #5f6062;
                    stroke: #f7941d;
                    stroke-miterlimit: 10;
                    stroke-width: 2px;
                }

                .cls-3 {
                    font-size: 12px;
                    fill: #f7941d;
                    font-family: Helvetica, sans-serif;
                }
            `}</style>

            <defs>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <rect className="cls-1" width="100" height="100" />
                <circle className="cls-2" cx="50" cy="40" r="30" />
                <path className="cls-2" d="M50,40V10" />
                <text className="cls-3"  textAnchor="middle" x={50} y={90}>127</text>
            </g>
        </svg>
    )
}

const StyledKnob = styled(Knob)`
        color: red;
        font-family: Helvetica;
        `;

export default StyledKnob;

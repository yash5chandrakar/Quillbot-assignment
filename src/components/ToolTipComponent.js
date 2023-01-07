import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Info } from '@mui/icons-material';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#252525',
        color: '#ffffff',
        maxWidth: 200,
        borderRadius: '2px',
    },
}));

export default function ToolTipComponent(props) {
    const { heading, body } = props;
    return (

        <HtmlTooltip
            placement="right"
            title={
                <React.Fragment>
                    <Typography fontSize="1.2vw" fontFamily="font-family: 'Open Sans', sans-serif" color="#DC9E00" fontWeight="400">
                        {heading}
                    </Typography>
                    <Typography fontSize="1vw">
                        {body}
                    </Typography>
                </React.Fragment>
            }
        >
            <Info color="disabled" style={{
                cursor: "pointer"
            }} fontSize="2vw"></Info>
        </HtmlTooltip>

    );
}
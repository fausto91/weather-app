import Tooltip from '@mui/material/Tooltip';

export const CustomTooltip = ({text, children}) => {
  return (
    <Tooltip  title={text} arrow>
        {children}
    </Tooltip>
  )
}

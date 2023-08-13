'use clinet'

import { Skeleton, createTheme } from "@mui/material";

const GameSkeleton = () => {

    const theme = createTheme({
        palette: {
          customColor: {
            main: '#b6b6f880 ',
          },
        },
      });

  return (
    <div className="w-full aspect-square rounded-xl overflow-hidden bg-primary-lighter">
        <div className="w-full h-[60%] overflow-hidden relative flex justify-start items-start">
                <Skeleton
                animation='wave' variant="rounded"
                sx={{ bgcolor: theme.palette.customColor.main, width : '100%', height: '100%'}}/>
        </div>

        <div className="flex flex-col justify-between h-[40%] w-full p-[10px]">
        <Skeleton variant="text" 
            sx={{ fontSize: '14px', 
            borderRadius: '16px',  
            width: '65%',
            bgcolor: theme.palette.customColor.main }} />
        <Skeleton variant="text" 
            sx={{ fontSize: '14px', 
            borderRadius: '16px',  
            width: '45%',
            bgcolor: theme.palette.customColor.main }} />
        <div className="flex gap-[10px]">
            <div className="w-full h-[40px] rounded-xl overflow-hidden">
            <Skeleton
                animation='wave' variant="rounded"
                sx={{ bgcolor: theme.palette.customColor.main, width : '100%', height: '100%'}}/>
            </div>
            <div className="w-full h-[40px] rounded-xl overflow-hidden">
            <Skeleton
                animation='wave' variant="rounded"
                sx={{ bgcolor: theme.palette.customColor.main, width : '100%', height: '100%'}}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GameSkeleton
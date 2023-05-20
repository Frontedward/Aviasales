import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'

function ProgressBar(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Open Sans' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary' style={{ fontSize: 'smaller' }}>
            {`Загружаем билеты, немного терпения, подождите ... ${Math.round(props.value)}%`}
            <LinearProgress variant='determinate' {...props} />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function ProgressBarWithValueLabel() {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10))
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <ProgressBar value={progress} />
    </Box>
  )
}

import propTypes  from 'prop-types'
import { Box } from '@mui/system' 
import { Checkbox, Button } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import  BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import  BookmarkIcon  from '@mui/icons-material/Bookmark';



export function Card(props) {
    const { theme } = props
    return (
       <Box sx={{
           backgroundColor: theme.palette.background.paper,
           border: 1,
           borderRadius: theme.shape.borderRadius,
           mx: theme.spacing(.5),
           py: theme.spacing(1),
           width: 1,
           textAlign:'center',
           '&:hover': {
            backgroundColor: theme.palette.action.hover,
        }, 
        }}>
           <h3 className="card-title">Title</h3>
           <p className="card-content">Content</p>
           <Box>
               <Checkbox 
                icon={<FavoriteBorder />}  
                checkedIcon={<Favorite/>}
                sx={{ 
                    color: 'inherit',
                    '&.Mui-checked': {
                        color: 'inherit',
                    }, 
                }} 
                />
               <Checkbox 
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                sx={{ 
                    color: 'inherit',
                    '&.Mui-checked': {
                        color: 'inherit',
                    }, 
                }} 
                />
                <Button color='inherit' variant='outlined'>
                    Buy
                </Button>
           </Box>
       </Box>
    )
}
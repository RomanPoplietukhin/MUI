import propTypes  from 'prop-types' 
import { Box } from '@mui/system';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';


export function Filters(props) {
    const { theme } = props
    return(
        <Box sx={{
            border: 1,
            borderRadius: theme.shape.borderRadius,
            width: '90vw',
            height: '10vh',
            py: theme.spacing(3),
          }}>
            <FormGroup sx={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection:'row',
              flexWrap: 'wrap',
            }}>
             <FormControlLabel control={ <Checkbox sx={{
                  color: theme.palette.text.main,
                '&.Mui-checked':{
                  color: theme.palette.text.main,
                }
              }}/> } label='label 1'/>
             <FormControlLabel control={ <Checkbox sx={{
                color: theme.palette.text.main,
                '&.Mui-checked':{
                  color: theme.palette.text.main,
                }
              }}/> } label='label 2'/>
             <FormControlLabel control={ <Checkbox sx={{
                color: theme.palette.text.main,
                '&.Mui-checked':{
                  color: theme.palette.text.main,
                }
              }}/> } label='label 3'/>
             <FormControlLabel control={ <Checkbox sx={{
                color: theme.palette.text.main,
                '&.Mui-checked':{
                  color: theme.palette.text.main,
                }
              }}/> } label='label 4'/>
            <Button 
              variant='outlined' 
              color='inherit' 
              size='large'
            >
              apply
            </Button>
            </FormGroup>
          </Box>
    )
}
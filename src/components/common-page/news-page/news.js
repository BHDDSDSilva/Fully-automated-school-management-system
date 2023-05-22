import {
    Card, 
    CardContent,  
    Box, 
    List, 
    ListItem, 
    ListItemText,
    
} from "@mui/material"
import { Link} from "react-router-dom"
import classes from "./styles.module.css"
export const NewsPage = () => {

    const listData = [
        { primary: 'Grade 01', secondary: 'Application form for accepting children for class grade 01',page:'/grade01-form' },
        { primary: 'Grade 06', secondary: 'Application form for accepting children for class grade 06',page:'/grade06-form' },
        { primary: 'Grade 12', secondary: 'Application form for accepting children for class grade 12',page:'/grade12-form' },
      ];
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Box>
        <Card sx={{width: '135vh', 
                   right: 0, 
                   top: 0, 
                   height: '80vh', 
                   backgroundColor: '#f0f0f0'}}>
            <CardContent>
                
            </CardContent>
        </Card>
        </Box>
        <Box sx={{ width: '20%', 
                   position: 'static', 
                   right: 0, 
                   top: 0, 
                   height: '60vh', 
                   backgroundColor: '#f0f0f0' 
                }}>
            <List>
                {listData.map((item, index) => (
                <ListItem button component={Link} to={item.page} key={index}>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                </ListItem>
                ))}
            </List>
        </Box>
        </div>
       </>
    )
}
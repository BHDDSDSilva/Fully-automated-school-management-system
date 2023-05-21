import { Box, List, ListItem, ListItemText, } from '@mui/material';

export const NewsPage = () => {
    const listData = [
        { primary: 'Grade 01', secondary: 'Application form for accepting children for class grade 01' },
        { primary: 'Grade 06', secondary: 'Application form for accepting children for class grade 06' },
        { primary: 'Grade 12', secondary: 'Application form for accepting children for class grade 12' },
      ];
    return(
        <>
        <div>
        <Box sx={{ width: '20%', 
                   position: 'static', 
                   right: 0, 
                   top: 0, 
                   height: '90vh', 
                   backgroundColor: '#f0f0f0' 
                }}>
            <List>
                {listData.map((item, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                </ListItem>
                ))}
            </List>
        </Box>
        </div>
       </>
    )
}
import {
    Card, 
    CardContent,  
    Typography,
    
} from "@mui/material"
import classes from "./styles.module.css"

export const TeachersInfoPage = () => {
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">
            Introduction to the staff of teachers at Bandaranayaka Balika National College
        </Typography>
        </div>
        <div >
        <Typography>
            Bandaranaike Girls National College has classes from primary to thirteenth standard. 
            It has three classes in one grade. In the primary section, there is one teacher per class. 
            From grade 06 to grade 13, each class has a class teacher, and there are separate teachers for teaching subjects.
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 345,backgroundColor: '#f0f0f0',height: '90vh' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Grade 01 - 05 Teachers
                </Typography>
                <Typography variant="h6">
                    Grade 01
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 01-A : Mrs. A.K. Kumari De Silva
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 01-B : Mrs. B.K Amali Nisansala
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 01-C : Mrs. A.H Akshani Anjula
                </Typography>
                <Typography variant="h6">
                    Grade 02
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 02-A : Mrs. A.K. Kumari De Silva
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 02-B : Mrs. B.K Amali Nisansala
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 02-C : Mrs. A.H Akshani anjula
                </Typography>
                <Typography variant="h6">
                    Grade 03
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 03-A : Mrs. P.T Kumari Perera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 03-B : Mrs. R.K Tharushi Bagya
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 03-C : Mrs. A.H Kumali Thisasma
                </Typography>
                <Typography variant="h6">
                    Grade 04
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 04-A : Mrs. Y.C. Achini Nimesha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 04-B : Mrs. E.R. Pawani Tharuka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 04-C : Mrs. S.S Ranasinghe
                </Typography>
                <Typography variant="h6">
                    Grade 05
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 05-A : Mrs. P.T Kumari Perera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 05-B : Mrs. R.K Tharushi Apsara
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 05-C : Mrs. A.H mathisha Thisasma
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345,backgroundColor: '#f0f0f0' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Grade 06 - 11 Teachers
                </Typography>
                <Typography variant="h6">
                    Grade 06
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 06-A : Mr. T.Y. Wasantha Kumara
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 06-B : Mrs. B.M Disanayake
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 06-C : Mr. A.H Akshan De Silva
                </Typography>
                <Typography variant="h6">
                    Grade 07
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 07-A : Mrs. Kalpana Galappaththi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 07-B : Mr. B.K Amal Nissanka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 07-C : Mr. N.L Nihal Paddakumara
                </Typography>
                <Typography variant="h6">
                    Grade 08
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 08-A : Mrs. P.T Kumari Disanayaka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 08-B : Mrs. Thamara Gunarathna
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 08-C : Mrs. Malmi Ilangakon
                </Typography>
                <Typography variant="h6">
                    Grade 09
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 09-A : Mrs. Achini Nimesha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 09-B : Mrs. E.O Pawani Bashika
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 09-C : Mrs. S.S Nirmala
                </Typography>
                <Typography variant="h6">
                    Grade 10
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 10-A : Mrs. P.T Tekla Dilani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 10-B : Mrs. S.A Irani Upeka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 10-C : Mrs. G.P. Deshani Paboda
                </Typography>
                <Typography variant="h6">
                    Grade 11
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 11-A : Mrs. A.K. Kumuduni De Silva
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 11-B : Mrs. B.K Amali Perera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 11-C : Mrs. A.H Akshani Disanayaka
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345,backgroundColor: '#f0f0f0', height: '50vh' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Grade 12 - 13 Teachers
                </Typography>
                <Typography variant="h6">
                    Grade 12
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 12-A : Mr. A.A Sanjeewa Bandara
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 12-B : Mrs. Sulochana Kuruppunayaka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 12-C : Mrs. A.H Dilini Ayesha
                </Typography>
                <Typography variant="h6">
                    Grade 13
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 13-A : Mr. D.G. Karu Disanayake
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 13-B : Mrs. H.T. Tirani Sathsarani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Grade 13-C : Mr. T.K. Akesh Ravishan
                </Typography>
            </CardContent>
        </Card>
        </div>
       </>
    )
}
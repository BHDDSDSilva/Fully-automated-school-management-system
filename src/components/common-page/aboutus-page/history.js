import {
    Card,  
    Typography,
    CardMedia,   
} from "@mui/material"
import classes from "./styles.module.css"

export const HistoryPage = () => {
    return(
        <>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">
            History of Bandaranayake Balika National College
        </Typography>
        </div>
        <div >
        <Typography>
            Under a surveyor named Mr. D.L.U. De Silva, the fire brigade was removed from this place and started as a mixed school on September 26, 1970.
            The first acting principal and the first teacher, Mr. D.R.U. Wijesinghe, have been appointed.
            This school, which was a mixed school, became a girls' school in 1972. Its first student is B.L.U. De Silva.
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">
            බණ්ඩාරනායක බාලිකා ජාතික විද්‍යාලයේ ඉතිහාසය
        </Typography>
        </div>
        <div >
        <Typography>
            මිනින්දෝරුවරයකු වූ ඩී.එල්.යූ. ද සිල්වා මහතා යටතේ ගිනි නිවන හමුදාව මෙම ස්ථානයෙන් ඉවත් කර මිශ්‍ර පාසලක් ලෙස ආරම්භ කළේ 1970 සැප්තැම්බර් 26 වැනිදාය. 
            ප්‍රථම වැඩබලන විදුහල්පති සහ ප්‍රථම ගුරුවරයා වූ ඩී.ආර්.යූ. විජේසිංහ පත් කර ඇත.
            මිශ්‍ර පාසලක් වූ මෙම පාසල 1972 වසරේ බාලිකා විද්‍යාලයක් බවට පත් විය.එහි ප්‍රථම ශිෂ්‍යාව B.L.U.ද සිල්වාය.
        </Typography>
        </div>
        <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Card sx={{ maxWidth: 1545 }}>
            <CardMedia
                    sx={{ height: 400, width: 1500 }}
                    image="./School image.jpg"
            />
        </Card>
        </div>
       </>
    )
}
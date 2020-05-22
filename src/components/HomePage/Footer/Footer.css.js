import eric from '../../../resources/silhouetteEric.png';

export default {
    footerContainer:{
        backgroundColor: '#e7eded'
    },
    footerSplash:{
        //background: 'linear-gradient(180deg, #e7eded, #fa5f3d)',
        width: "100%",
        height: "450px",
        backgroundImage: `url(${eric})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
    },
    footerBar:{
        backgroundColor: '#18251b',
        height: '50px',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2em'
    },
    footerCopy: {
        color: 'white',
        fontFamily: 'Quicksand',
        fontSize: '1em'
    },
    socialIcon: {
        height: '25px',
        padding: '.3em'
    },

}
import eric from '../../../resources/footer2.png';


export default {
    footerContainer:{
        backgroundColor: 'white', //'#e7eeed'//'#cfd5d5',
        boxShadow: '4px 0 8px 0 rgba(0, 0, 0, 0.4), 6px 0 20px 0 rgba(0, 0, 0, 0.39)',
    },
    footerSplash:{
        //background: 'linear-gradient(180deg, #e7eded, #fa5f3d)',
        width: "100%",
        height: "450px",
        backgroundImage: `url(${eric})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBar:{
        backgroundColor: '#cab0cc',
        height: '50px',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1em'
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
    signature: {
        maxHeight: '60%',
        maxWidth: '400px',
        width: '100%'
    }

}
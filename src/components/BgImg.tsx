const Bg=(img_src:string)=>{
    return(
        {
            backgroundImage: `url(${img_src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    )
}
export default Bg
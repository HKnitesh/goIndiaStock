
export default function MarketStory(props) {
    return (

        // <div className={` relative gap-2 w-[300px] h-[200px] rounded-lg bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/drw8eqw3i/image/upload/v1688377053/BSE__nffqfz.jpg')]`}>
        <div style={{ backgroundImage: `url(${props.urls})` }}
            className={` relative gap-2 w-[300px] h-[200px] rounded-lg bg-center bg-no-repeat bg-cover `}>

            <div className='absolute bottom-0 bg-black/40 rounded-lg '>

                <p className='text-white p-2 text-sm w-[85%] '>{props.details}</p>
            </div>
        </div>

    );
}
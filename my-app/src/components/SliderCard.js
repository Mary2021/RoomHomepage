import IconArrow from './../images/icon-arrow.svg'

const SliderCard = ({ heading, text }) => {
    if (window.innerWidth >= 376) {
    return (
        <div className='CardContainer'>
            <h1 className='SliderHeading'>{heading}</h1>
            <p className='SliderText'>{text}</p>
            <a className='SliderLink'>Shop now</a>
            <img src={IconArrow} alt={'arrowToRight'}></img>
        </div>)
    } else {
        return (
            <div className='CardContainer'>
                <h1 className='HeroHeading'>{heading}</h1>
                <p className='SliderText'>{text}</p>
                <a className='SliderLink'>Shop now</a>
                <img src={IconArrow} alt={'arrowToRight'}></img>
            </div>)
    }
}

export default SliderCard
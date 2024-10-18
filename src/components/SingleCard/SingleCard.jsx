import cover from '../../images/bell-logo.jpg';
import './SingleCard.scss';

function SingleCard ({data, selection, flipped, disabled}) {

    function handleClick() {
        if(!disabled) {
            selection (data);
        }
    }
    return (
        <section className='card'>
            <div className= {flipped ? 'card__flipped' : ''}>
                <img className='card__front' src={data.src} alt='front side of the image'/>
                <img className='card__cover' onClick={handleClick} src={cover} alt='cover of the image'/>
            </div>
        </section>
    )
}

export default SingleCard;
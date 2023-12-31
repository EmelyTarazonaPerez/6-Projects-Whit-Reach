import React from 'react';
import { Link } from 'react-router-dom';

const Pag1 = () => {

    const arrayKing = ['atanagildo', 'ataulfo', 'ervigio', 'leovigildo', 'recesvinto', 'sisebuto']

    return (
        <div className='row containter'>
            <div className='wrapper'>
                {
                    arrayKing.map(item => (
                        <Link  className='link_king' to={`/pagina2/${item}`}>
                            <div className='bg card'>
                                <img className='img_king' src={`https://www.html6.es/img/rey_${item}.png`} alt='item' />
                                <p className='name_king'>{item}</p>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    );
}

export default Pag1;

import React from 'react'
import {tagData} from '../api/TagData'
import Tag from './Tag';
import './style/tag.css'
import Btn from './Btn';

function Tgas() {
    return (
        <div className="container">
            <div className="tag__section--title">
                <h2>
                    ¿Por qué Amautas?
                </h2>
                <p>
                Si tienes curiosidad y te ilusiona compartir conocimiento, somos tu comunidad.
                </p>
            </div>
            <div className="tag__container">
                {
                    tagData.map(infoTag =>(
                        <Tag title={infoTag.title} text={infoTag.text} key={infoTag.id} />
                    ))
                }
            </div>
                <div className="tag__btn">
                    <Btn type="regular" content="Manifiesto" />
                </div>
        </div>
    )
}

export default Tgas;

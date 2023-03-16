import './JobOffer.scss';
import { useState } from 'react';

function JobOffer({JobDatas}) {
    const [logoUrl, SetLogoUrl] = useState(JobDatas.logo.substring(9))

    return (
        <div className="JobOffer">
            <div className="JobOffer__image">
                <img src={logoUrl} alt="Company logo" />
            </div>
            <div className="JobOffer__datas">
                <div className="JobOffer__datas--heading">
                    <p>{JobDatas.company}</p>
                    {
                        JobDatas.new && (
                            <div>new!</div>
                        )
                    }
                    {
                        JobDatas.featured && (
                            <div>featured!</div>
                        )
                    }
                </div>
                <div className="JobOffer__datas--title">
                    <p>{JobDatas.position}</p>
                </div>
                <div className="JobOffer__datas--details">
                    <p>{JobDatas.postedAt}</p>
                    <p>{JobDatas.contract}</p>
                    <p>{JobDatas.location}</p>
                </div>
            </div>
            <div className="JobOffer__categories">

            </div>
        </div>
    )
}

export default JobOffer
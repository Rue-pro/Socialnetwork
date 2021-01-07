import React from 'react'
import s from './Profile.module.css'
import Preloader from '../common/preloader/Preloader'

let Profile = (props) => {
    if(props.userInfo.isFetched === false) {
        return(<> <Preloader /> </>)
    } else {
        return (
            <div>
                <div className={s.userInfo}>
                    <div className={s.userInfoLeftPart}>
                        <img src={props.userInfo.photos.small} alt={props.userInfo.fullName+" photo"}/>
                    </div>
                    <div className={s.userInfoRightPart}>
                        <div className={s.userName}>{props.userInfo.fullName}</div>
                        <div className={s.parameterWrapper}>
                            <div className={s.parameterText}>Need job</div>
                            <div className={s.inProcessFindingJob}>{props.userInfo.lookingForAJob ? "Looking for a job" : "Don't looking for a job"}</div>
                        </div>
                        <div className={s.parameterWrapper}>
                            <div className={s.parameterText}>Description</div>
                            <div className={s.lookingForAJobDescription}>{props.userInfo.lookingForAJobDescription}</div>
                        </div>
                    </div>
                </div>
                {/* <PostsContainer /> */}
            </div>
        )
    }
}

export default Profile
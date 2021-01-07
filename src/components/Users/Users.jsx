import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/foto.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        let pages = []
    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(page => {
                    return(
                        <div onClick={()=>{props.onPageChange(page)}} 
                            className={props.currentPage===page ? s.selectedPage+" "+s.paginationItem : s.paginationItem}>
                            {page}
                        </div>
                    )
                })}
            </div>
            {
            props.users.map(user =><div key={user.id} className={s.user}>
                <div className={s.leftPart}>
                    <div><NavLink to={"/profile/"+user.id} target="_blankc"> 
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                </div>
                <div className={s.rightPart}>
                    <div className={s.userName}>{user.name}</div>
                    <div>{user.status}</div>
                    <div className={s.userLocation}>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id=> id===user.id)}
                                className={s.followBtn} 
                                onClick={() => props.unfollowUser(user.id)}>Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id=> id===user.id)}
                                className={s.followBtn} 
                                onClick={() => props.followUser(user.id)}>Follow</button>}
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users
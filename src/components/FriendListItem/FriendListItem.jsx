import css from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline })

{
    return(
    <li className={css.frItem} >
      <img className={css.frImg} src={avatar} alt={name} width="48" />
      <p className={css.frText}>{name}</p>
    {isOnline  ? <p className={css.frOnline}>Online</p> : <p className={css.frOffline}>Offline</p>}
    </li>)
}
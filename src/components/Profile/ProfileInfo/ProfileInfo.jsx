import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.scss'
import userPhoto from './../../../assets/userPhoto.PNG'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={s.profileInfo_wraper}>
            <div className={s.avatar_wrapper}>
                <div>
                    <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt=''></img>
                </div>
            </div>
            <div className={s.profileInformation}>
                <div className={s.fullName}>
                    {props.profile.fullName}
                </div>
                <div>
                    <div className={s.discription}>{props.profile.aboutMe && <span>About me: {props.profile.aboutMe}</span>}</div>
                </div>
                <div className={s.contacts}>
                    <div className={s.title}>{props.profile.contacts && <span>Contacts</span>}</div>
                    <div className={s.facebook, s.contactsItem}>{props.profile.contacts.facebook && <span>Facebook: {props.profile.contacts.facebook}</span>}</div>
                    <div className={s.website, s.contactsItem}>{props.profile.contacts.website && <span>Website: {props.profile.contacts.website}</span>}</div>
                    <div className={s.vk, s.contactsItem}>{props.profile.contacts.vk && <span>Vk: {props.profile.contacts.vk}</span>}</div>
                    <div className={s.twitter, s.contactsItem}>{props.profile.contacts.twitter && <span>Twitter: {props.profile.contacts.twitter}</span>}</div>
                    <div className={s.instagram, s.contactsItem}>{props.profile.contacts.instagram && <span>Instagram: {props.profile.contacts.instagram}</span>}</div>
                    <div className={s.youtube, s.contactsItem}>{props.profile.contacts.youtube && <span>Youtube: {props.profile.contacts.youtube}</span>}</div>
                    <div className={s.github, s.contactsItem}>{props.profile.contacts.github && <span>Github: {props.profile.contacts.github}</span>}</div>
                    <div className={s.mainLink, s.contactsItem}>{props.profile.contacts.mainLink && <span>MainLink: {props.profile.contacts.mainLink}</span>}</div>
                </div>
                <div className={s.findAJob}>
                    Find a job: {props.profile.lookingForAJob ? 'да,' : "нет"}
                </div>
                <div className={s.findAJobDescription}>
                    {props.profile.lookingForAJob && <span>{props.profile.lookingForAJobDescription}</span>}
                </div>
            </div>
        </div >
    )
}

export default ProfileInfo;
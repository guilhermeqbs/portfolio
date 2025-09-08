import srcAvatar from '../../assets/avatar-cut.JPEG'

function Avatar() {
    return (  
        <img 
            src={srcAvatar}
            alt="Avatar" 
            className="transition hover:translate-t-1 hover:scale-105 rounded-full border-2 border-secondary shadow-lg w-50 h-50"
        />
    );
}

export default Avatar;
